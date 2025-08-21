import json
import sys
import time
class Sentence:
    word: str
    sentence: str
    wordEN: str
    sentenceEN: str

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py <text_file>")
        sys.exit(1)
    
    text_file = sys.argv[1]

    sentences = []
    
    try:
        with open(text_file, 'r', encoding='utf-8') as file:
            for line in file:
                s = Sentence()
                print(f"line 1: {line}")

                # Word - first position until space
                s.word = line.split(' ')[0]
                line = line[len(s.word) + 1:]
                print(f"line 2: {line}")
                
                # part of speech - until next space, discard
                line = line[len(line.split(' ')[0]) + 1:]
                print(f"line 3: {line}")
                
                # sentence - until period, remove spaces after
                firstPunctuation = next(e for i,e in enumerate(line) if e in {'.', '!', '?'})
                s.sentence = line.split(firstPunctuation)[0] + firstPunctuation
                line = line[len(s.sentence) + 1:].lstrip()
                print(f"line 4: {line}")
                
                # Word EN - until next capital letter
                firstCapitalIndex = next(i for i,e in enumerate(line[1:]) if e.isupper()) + 1
                s.wordEN = line[:firstCapitalIndex].rstrip()
                line = line[firstCapitalIndex:]
                print(f"line 5: {line}")

                # Sentence EN - rest of the line
                s.sentenceEN = line.rstrip()

                sentences.append(s)
        
            
    except FileNotFoundError:
        print(f"Error: File '{text_file}' not found")
        sys.exit(1)
    except Exception as e:
        print(f"An unexpected error occurred: {str(e)}")
        sys.exit(1)

    output_data = {
        "sentences": [
            {
                "word": s.word,
                "sentence": s.sentence,
                "wordEN": s.wordEN,
                "sentenceEN": s.sentenceEN,
            }
            for s in sentences
        ]
    }
    
    with open("sentences.json", 'w', encoding='utf-8') as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)
    
    print("Results have been saved to sentences.json")

if __name__ == "__main__":
    main()