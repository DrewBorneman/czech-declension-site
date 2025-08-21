import json
import sys
from declensions import NounDeclensions
import scrapy
from scrapy.crawler import CrawlerProcess
from scrapy.http import Request
from urllib.parse import quote
from typing import Optional, List
from scrapy import signals
from scrapy.signalmanager import dispatcher
import time

class DeclensionSpider(scrapy.Spider):
    name = 'declension_spider'
    
    custom_settings = {
        'DOWNLOAD_DELAY': 3,
        'RANDOMIZE_DOWNLOAD_DELAY': True,
        'RETRY_TIMES': 5,
        'RETRY_HTTP_CODES': [500, 502, 503, 504, 408, 429, 403, 404],
        'COOKIES_ENABLED': False,
        'CONCURRENT_REQUESTS': 1,
        'DOWNLOAD_TIMEOUT': 30,
        'HTTPERROR_ALLOWED_CODES': [404, 403]
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
        encoded_noun = quote(self.noun.encode('utf-8'))
        url = f'https://prirucka.ujc.cas.cz/en/?slovo={encoded_noun}'
        yield Request(
            url=url, 
            callback=self.parse,
            errback=self.errback_httpbin,
            dont_filter=True,
            meta={'dont_retry': False, 'max_retry_times': 5}
        )
    
    def errback_httpbin(self, failure):
        self.logger.error(f"Request failed for noun {self.noun}: {failure.value}")
        self.crawler.stats.set_value('declension', self.declension)

    def parse(self, response):
        try:
            table = response.xpath('//table[@class="para"]')
            if not table:
                self.logger.error(f"Table not found for noun: {self.noun}")
                with open(f"debug_{self.noun}.html", "w", encoding='utf-8') as f:
                    f.write(response.text)
                return
            
            for i in range(1, 8):
                row = table.xpath('.//tr[position()>1]')[i-1]
                if row:
                    col2 = row.xpath('.//td[@class="centrovane"][1]//text()').get(default='').strip()
                    col3 = row.xpath('.//td[@class="centrovane"][2]//text()').get(default='').strip()
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
            'LOG_LEVEL': 'ERROR',
            'DOWNLOAD_DELAY': 2,
            'RANDOMIZE_DOWNLOAD_DELAY': True,
            'RETRY_TIMES': 5,
            'RETRY_HTTP_CODES': [500, 502, 503, 504, 408, 429, 403, 404],
            'COOKIES_ENABLED': False,
            'CONCURRENT_REQUESTS': 1,
            'DOWNLOAD_TIMEOUT': 30,
            'HTTPERROR_ALLOWED_CODES': [404, 403]
        })
        self.nouns_to_process: List[str] = []
        self.current_noun_index = 0
        dispatcher.connect(self._spider_closed, signals.spider_closed)

    def _spider_closed(self, spider, reason):
        declension = spider.crawler.stats.get_value('declension')
        if declension:
            self.declensions.append(declension)
            print(f"Processed noun: {declension.noun} (rank: {declension.rank})")
            
            # Add delay before processing next noun
            time.sleep(2)  # Matching DOWNLOAD_DELAY setting
            
            # Process next noun if there are more
            self.process_next_noun()

    def process_next_noun(self):
        """Process the next noun in the queue if available."""
        if self.current_noun_index < len(self.nouns_to_process):
            noun = self.nouns_to_process[self.current_noun_index]
            self.current_noun_index += 1
            print(f"Processing noun {self.current_noun_index} of {len(self.nouns_to_process)}: {noun}")
            self.process.crawl(DeclensionSpider, noun=noun, rank=self.current_noun_index)

    def scrape_nouns(self, nouns: List[str]):
        """Initialize the scraping process for a list of nouns."""
        self.nouns_to_process = list(nouns)
        self.current_noun_index = 0
        
        # Start with the first noun
        self.process_next_noun()
        
        # Start the crawler process
        self.process.start()

    def save_to_json(self, filename: str = "declensions.json"):
        output_data = {
            "declensions": [
                {
                    "noun": d.noun,
                    "rank": d.rank,
                    "declensions": [
                        {
                            "sing": sing_forms,
                            "pl": pl_forms
                        }
                        for sing_forms, pl_forms in d.declensions
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
        
        # Process nouns sequentially
        scraper.scrape_nouns(data['nouns'])
        
        # Results will be saved after all processing is complete
        scraper.save_to_json()
        
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