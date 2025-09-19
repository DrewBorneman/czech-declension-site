<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Word;
use Symfony\Component\HttpFoundation\Response;

class QuestionController extends Controller
{
    # placeholder
    public function get(Request $request)
    {
        $question = new Question();
        $word = Word::first()->where('rank', $request->route('rank'));
        $sentence = Sentence::first()->where('lemma', $word->lemma)

        $question->word = $word->lemma;
        $question->rank = $word->rank;
        $question->sentenceWithoutWord = $sentence->sentenceWithoutWord;
        $question->sentenceWithWord = $sentence->sentenceWithWord;
        $question->sentenceTranslation = $sentence->sentenceTranslation;
        $question->correctAnswer = $sentence->correctAnswer;

        // get the conjugations - all word members except lemma and rank
        $wordProperties = get_object_vars($word);
        $conjugations = [];
        foreach ($wordProperties as $key => $value) {
            if (strpos($key, 'rank') == false && strpos($key, 'lemma') == false) {
                $conjugations[] = $value;
            }
        }
        $question->allOptions = $conjugations;

        return response()->json($question);
    }
}
