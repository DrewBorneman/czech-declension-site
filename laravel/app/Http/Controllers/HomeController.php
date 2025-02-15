<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HomeData;
use Symfony\Component\HttpFoundation\Response;

class HomeController extends Controller
{
    public function get()
    {
        $homeData = HomeData::first();
        return response()->json($homeData);
    }
    public function post(Request $request)
    {
        $homeData = HomeData::first();
        $homeData->tagline = $request->tagline;
        $homeData->title = $request->title;
        $homeData->subtitle = $request->subtitle;
        $homeData->text = $request->text;
        $homeData->imagePath = $request->imagePath;
        $homeData->save();
        return response()->noContent(Response::HTTP_CREATED);
    }
}
