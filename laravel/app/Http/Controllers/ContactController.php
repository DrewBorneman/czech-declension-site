<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactData;
use Symfony\Component\HttpFoundation\Response;

class ContactController extends Controller
{
    public function get()
    {
        $contactData = ContactData::first();
        return response()->json($contactData);
    }
    public function post(Request $request)
    {
        $contactData = ContactData::first();
        $contactData->title = $request->title;
        $contactData->subtitle = $request->subtitle;
        $contactData->text = $request->text;
        $contactData->save();
        return response()->noContent(Response::HTTP_CREATED);
    }
}
