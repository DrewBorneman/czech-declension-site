import json
import sys
from declensions import NounDeclensions
from proxies import proxiesList
import scrapy
from scrapy.crawler import CrawlerProcess
from scrapy.http import Request
from urllib.parse import quote
from typing import Optional, List
from scrapy import signals
from scrapy.signalmanager import dispatcher
import random
from w3lib.http import basic_auth_header
import base64
import time
import logging
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timedelta

class ProxyMiddleware:
    def __init__(self):
        self.proxies = proxiesList
        self.working_proxies = []
        self.current_proxy_index = 0
        self.last_proxy_change = time.time()
        self.proxy_change_interval = 30  # Change proxy every 30 seconds
        self.logger = logging.getLogger(__name__)
        
        # Initialize by validating proxies
        self.validate_proxies()
        
    def validate_single_proxy(self, proxy: str) -> bool:
        """Test if a single proxy is working."""
        try:
            test_url = 'http://httpbin.org/ip'
            response = requests.get(
                test_url,
                proxies={'http': proxy, 'https': proxy},
                timeout=10
            )
            return response.status_code == 200
        except:
            return False

    def validate_proxies(self):
        """Validate all proxies in parallel and keep only working ones."""
        self.logger.info("Validating proxies...")
        working_proxies = []
        
        with ThreadPoolExecutor(max_workers=10) as executor:
            future_to_proxy = {
                executor.submit(self.validate_single_proxy, proxy): proxy 
                for proxy in self.proxies
            }
            
            for future in as_completed(future_to_proxy):
                proxy = future_to_proxy[future]
                try:
                    if future.result():
                        working_proxies.append(proxy)
                        self.logger.info(f"Valid proxy found: {proxy}")
                except Exception as e:
                    self.logger.warning(f"Proxy validation failed for {proxy}: {str(e)}")

        self.working_proxies = working_proxies
        self.logger.info(f"Found {len(self.working_proxies)} working proxies")
        
        if not self.working_proxies:
            self.logger.warning("No working proxies found! Using original proxy list.")
            self.working_proxies = self.proxies.copy()

    def get_next_proxy(self) -> str:
        """Get the next proxy from the rotation."""
        if not self.working_proxies:
            self.validate_proxies()
            
        if self.working_proxies:
            self.current_proxy_index = (self.current_proxy_index + 1) % len(self.working_proxies)
            return self.working_proxies[self.current_proxy_index]
        return None

    def should_change_proxy(self) -> bool:
        """Determine if it's time to change the proxy."""
        return time.time() - self.last_proxy_change > self.proxy_change_interval

    def process_request(self, request, spider):
        """Process each request using the proxy middleware."""
        # Change proxy if needed
        if self.should_change_proxy():
            self.last_proxy_change = time.time()
            
        proxy = self.get_next_proxy()
        if proxy:
            self.logger.debug(f"Using proxy: {proxy}")
            request.meta['proxy'] = proxy
            
            # Optional: Add basic retry handling
            request.meta['max_retry_times'] = 3
            request.meta['dont_retry'] = False
        else:
            self.logger.warning("No proxy available!")

    @classmethod
    def from_crawler(cls, crawler):
        """Create middleware from crawler."""
        return cls()

    def process_exception(self, request, exception, spider):
        """Handle proxy-related exceptions."""
        failed_proxy = request.meta.get('proxy')
        if failed_proxy and failed_proxy in self.working_proxies:
            self.logger.warning(f"Removing failed proxy: {failed_proxy}")
            self.working_proxies.remove(failed_proxy)
            
        return None
        
class RotatingUserAgentMiddleware:
    def __init__(self):
        self.user_agents = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1.15',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/91.0.864.59'
        ]
    
    def process_request(self, request, spider):
        request.headers['User-Agent'] = random.choice(self.user_agents)

class DeclensionSpider(scrapy.Spider):
    name = 'declension_spider'
    
    custom_settings = {
        'DOWNLOAD_DELAY': 3,  # Increased delay
        'RANDOMIZE_DOWNLOAD_DELAY': True,
        'RETRY_TIMES': 5,
        'RETRY_HTTP_CODES': [500, 502, 503, 504, 408, 429, 403, 404],
        'COOKIES_ENABLED': False,
        'CONCURRENT_REQUESTS': 1,
        'DOWNLOAD_TIMEOUT': 30,
        'HTTPERROR_ALLOWED_CODES': [404, 403],
        'DOWNLOADER_MIDDLEWARES': {
            'scrapy.downloadermiddlewares.retry.RetryMiddleware': 90,
            'scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware': 110,
            '__main__.ProxyMiddleware': 100,
            '__main__.RotatingUserAgentMiddleware': 400,
        },
    }
    
    def __init__(self, *args, **kwargs):
        super(DeclensionSpider, self).__init__(*args, **kwargs)
        self.noun = kwargs.get('noun')
        self.rank = kwargs.get('rank')
        self.declension = NounDeclensions(self.noun, self.rank)
    
    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        spider = super(DeclensionSpider, cls).from_crawler(crawler, *args, **kwargs)
        crawler.signals.connect(spider.spider_closed, signal=signals.spider_closed)
        return spider

    def start_requests(self):
        encoded_noun = quote(self.noun)
        url = f'https://prirucka.ujc.cas.cz/en/?slovo={encoded_noun}'
        yield Request(
            url=url, 
            callback=self.parse,
            errback=self.errback_httpbin,
            dont_filter=True,
            meta={
                'dont_retry': False,
                'max_retry_times': 5,
                'handle_httpstatus_list': [403, 404, 429]
            }
        )
    
    def errback_httpbin(self, failure):
        self.logger.error(f"Request failed for noun {self.noun}: {failure.value}")
        self.crawler.stats.set_value('declension', self.declension)

    def parse(self, response):
        if response.status in [403, 429]:
            self.logger.error(f"Access denied or rate limited for noun {self.noun}")
            return

        try:
            table = response.xpath('//*[@id="content"]/div[2]/table//tbody')
            if not table:
                self.logger.error(f"Table not found for noun: {self.noun}")
                return
            
            for i in range(1, 8):
                row = table.xpath(f'.//tr[{i+1}]')
                if row:
                    col2 = row.xpath('./td[2]//text()').get(default='').strip()
                    col3 = row.xpath('./td[3]//text()').get(default='').strip()
                    self.declension.set_declension(i-1, col2, col3)
                else:
                    self.logger.error(f"Row {i+1} not found for noun: {self.noun}")
        except Exception as e:
            self.logger.error(f"Error processing noun {self.noun}: {str(e)}")
        finally:
            self.crawler.stats.set_value('declension', self.declension)

    def spider_closed(self, spider):
        self.crawler.stats.set_value('declension', self.declension)

class DeclensionScraper:
    def __init__(self):
        self.declensions = []
        self.process = CrawlerProcess({
            'USER_AGENT': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'LOG_LEVEL': 'INFO',  # Changed to INFO to see more details
            'COOKIES_ENABLED': False,
            'CONCURRENT_REQUESTS': 1,
            'DOWNLOAD_DELAY': 2,
            'RANDOMIZE_DOWNLOAD_DELAY': True,
        })
        
        dispatcher.connect(self._spider_closed, signals.spider_closed)

    def _spider_closed(self, spider, reason):
        declension = spider.crawler.stats.get_value('declension')
        if declension:
            self.declensions.append(declension)
            print(f"Processed noun: {declension.noun} (rank: {declension.rank})")

    def scrapeDeclensionsForNoun(self, noun: str, rank: int):
        self.process.crawl(DeclensionSpider, noun=noun, rank=rank)

    def save_to_json(self, filename: str = "declensions.json"):
        output_data = {
            "declensions": [
                {
                    "noun": d.noun,
                    "rank": d.rank,
                    "declensions": [
                        {
                            "sing": first,
                            "pl": second
                        }
                        for first, second in d.declensions
                    ]
                }
                for d in self.declensions
            ]
        }
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(output_data, f, ensure_ascii=False, indent=2)

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py <json_file>")
        sys.exit(1)
    
    json_file = sys.argv[1]
    scraper = DeclensionScraper()
    
    try:
        with open(json_file, 'r', encoding='utf-8') as file:
            data = json.load(file)
        
        if 'nouns' not in data:
            print("Error: JSON file must contain a 'nouns' array")
            sys.exit(1)
            
        print("Starting the scraping process...")
        
        # Schedule all spiders
        for rank, noun in enumerate(data['nouns'], 1):
            scraper.scrapeDeclensionsForNoun(noun, rank)
        
        # Start the scraping process
        scraper.process.start()
        
        # Save results to JSON file
        scraper.save_to_json()
        
        # Print summary
        print(f"\nProcessed {len(scraper.declensions)} nouns")
        print("Results have been saved to declensions.json")
            
    except FileNotFoundError:
        print(f"Error: File '{json_file}' not found")
        sys.exit(1)
    except json.JSONDecodeError:
        print(f"Error: '{json_file}' is not a valid JSON file")
        sys.exit(1)
    except Exception as e:
        print(f"An unexpected error occurred: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()