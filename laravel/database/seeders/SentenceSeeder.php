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
        $declensionsFromFile = json_decode($declensions_json, true);

        $sentences_json = file_get_contents(database_path('seeders/data/sentences.json'));
        $sentences = json_decode($sentences_json, true);

        $declensionsDict = array();
        foreach($declensionsFromFile as $declension)
        {
            $declensionsDict[$declension['noun']] = $declension;
        }

        foreach ($sentences as $sentence)
        {   
            $answer = '';
            $currDeclension = $declensionsDict[$sentence['word']];
            # disgusting spaghetti code to find the correct answer in the sentence using the declensions JSON
            $haystack = strtolower($sentence['sentence']);
            if(str_contains($haystack, $currDeclension[0]['sing']))
                $answer = $currDeclension[0]['sing'];
            else if(str_contains($haystack, $currDeclension[0]['pl']))
                $answer = $currDeclension[0]['pl'];
            else if(str_contains($haystack, $currDeclension[1]['sing']))
                $answer = $currDeclension[1]['sing'];
            else if(str_contains($haystack, $currDeclension[1]['pl']))
                $answer = $currDeclension[1]['pl'];
            else if(str_contains($haystack, $currDeclension[2]['sing']))
                $answer = $currDeclension[2]['sing'];
            else if(str_contains($haystack, $currDeclension[2]['pl']))
                $answer = $currDeclension[2]['pl'];
            else if(str_contains($haystack, $currDeclension[3]['sing']))
                $answer = $currDeclension[3]['sing'];
            else if(str_contains($haystack, $currDeclension[3]['pl']))
                $answer = $currDeclension[3]['pl'];
            else if(str_contains($haystack, $currDeclension[4]['sing']))
                $answer = $currDeclension[4]['sing'];
            else if(str_contains($haystack, $currDeclension[4]['pl']))
                $answer = $currDeclension[4]['pl'];
            else if(str_contains($haystack, $currDeclension[5]['sing']))
                $answer = $currDeclension[5]['sing'];
            else if(str_contains($haystack, $currDeclension[5]['pl']))
                $answer = $currDeclension[5]['pl'];
            else if(str_contains($haystack, $currDeclension[6]['sing']))
                $answer = $currDeclension[6]['sing'];
            else if(str_contains($haystack, $currDeclension[6]['pl']))
                $answer = $currDeclension[6]['pl'];
            if($answer == '')
                throw new Exception('word not found in sentence');

            $blankSpace = str_repeat("_", strlen($sentence['word']));
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
