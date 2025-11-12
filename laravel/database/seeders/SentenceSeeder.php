<?php

namespace Database\Seeders;


use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\Sentence;

class SentenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $declensions_json = file_get_contents(database_path('seeders/data/declensions.json'));
        $declensionsFromFile = json_decode($declensions_json, true)['declensions'];

        $sentences_json = file_get_contents(database_path('seeders/data/sentences.json'));
        $sentences = json_decode($sentences_json, true)['sentences'];

        $declensionsDict = array();
        foreach($declensionsFromFile as $declension)
        {
            $declensionsDict[$declension['noun']] = $declension;
        }

        foreach ($sentences as $sentence)
        {   
            $answer = '';
            $currDeclension = $declensionsDict[$sentence['word']]['declensions'];
            $haystack = mb_strtolower($sentence['sentence']);

            // flatten to 1d array of possible declensions
            $possible_matches = [];
            foreach ($currDeclension as $item) {
                $possible_matches = array_merge($possible_matches, $item['sing'], $item['pl']);
            }

            // Remove duplicates and empty string
            $possible_matches = array_unique($possible_matches);
            $possible_matches = array_filter($possible_matches);

            foreach($possible_matches as $needle)
            {
                //if(str_contains($haystack, $needle))
                $matches = [];
                $escaped = preg_quote($needle, '/');
                if (preg_match('/\b' . $escaped . '\b/u', $haystack, $matches) === 1) {
                    $answer = $needle;
                    break;
                }
            }
            if($answer == '')
            {
                $this->command->info("NOT FOUND: CHECK DATA");
                $this->command->info("processing sentence: " . $haystack);
                $this->command->info(string: "possible matches: " . implode(',',$possible_matches));
                $this->command->info("");
                $this->command->info("");
                continue;
                //throw new \ErrorException('word not found in sentence');
            }

            $blankSpace = str_repeat("_", strlen($answer));
            $sentenceWithoutWord = str_ireplace($answer, $blankSpace, $sentence['sentence']);


            Sentence::create([
                'lemma' => $sentence['word'],
                'sentenceWithoutWord' => $sentenceWithoutWord,
                'sentenceWithWord' => $sentence['sentence'],
                'sentenceTranslation' => $sentence['sentenceEN'],
                'wordTranslation' => $sentence['wordEN'],
                'correctAnswer' => $answer,
            ]);
        }
    }
}
