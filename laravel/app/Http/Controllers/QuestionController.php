<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Word;
use App\Models\Question;
use App\Models\Sentence;

class QuestionController extends Controller
{
    public function get(Request $request)
    {
        $request->validate([
            'rank' => 'integer|min:1'
        ]);

        $question = new Question();
        $word = Word::where('rank', $request->route('rank'))->firstOrFail();
        $sentence = Sentence::where('lemma', $word->lemma)->first();

        $question->word = $word->lemma;
        $question->rank = $word->rank;
        $question->sentenceWithoutWord = $sentence->sentenceWithoutWord;
        $question->sentenceWithWord = $sentence->sentenceWithWord;
        $question->sentenceTranslation = $sentence->sentenceTranslation;
        $question->correctAnswer = $sentence->correctAnswer;

        // get the conjugations - all word members except lemma and rank
        $wordProperties = $word->getAttributes();
        $possibleDeclensions = [];
        foreach ($wordProperties as $key => $value) {
            if (!in_array($key, ['lemma', 'rank'])) {
                if (is_string($value)) {
                    $decoded = json_decode($value, true);
                    $value = is_array($decoded) ? $decoded : [$value];
                }
                // flatten array and add values individually
                foreach ((array)$value as $item) {
                    if (is_string($item)) {
                        $possibleDeclensions[] = $item;
                    }
                }
            }
        }
        // remove duplicates
        $possibleDeclensions = array_values(array_unique($possibleDeclensions));
        $question->allOptions = $possibleDeclensions;

        return response()->json($question);
    }
}
