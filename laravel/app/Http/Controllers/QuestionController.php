<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Word;
use Symfony\Component\HttpFoundation\Response;

class QuestionController extends Controller
{
    # placeholder
    public function get()
    {
        $word = Word::first();
        return response()->json($word);
    }
}
