<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ResumeData;
use App\Models\ResumeFile;
use Symfony\Component\HttpFoundation\Response;

class ResumeResponse
{
    public $title;
    public $text;
    public $files = array();
}

class ResumeController extends Controller
{    public function get()
    {
        $resumeData = ResumeData::first();
        $resumeFiles = ResumeFile::all();
        
        $resumeResponse = new ResumeResponse();
        $resumeResponse->title = $resumeData->title;
        $resumeResponse->text = $resumeData->text;
        $resumeResponse->files = $resumeFiles->all();
        
        return response()->json($resumeResponse);
    }
    public function post(Request $request)
    {
        $requestData = $request->all();
        $resumeData = ResumeData::first();
        $resumeData->title = $requestData["title"];
        $resumeData->text = $requestData["text"];
        $resumeData->save();
        
        ResumeFile::truncate();
        $requestResumeFiles = $request["files"];
        foreach($requestResumeFiles as $requestResumeFile){
            error_log(message: "file data: " . json_encode($requestResumeFile));
                error_log(message: "new file with id " . $requestResumeFile["id"]);
                $resumeFile = ResumeFile::newModelInstance();
                $resumeFile->id = $requestResumeFile["id"];
                $resumeFile->filename = $requestResumeFile["filename"];
                $resumeFile->path = $requestResumeFile["path"];
                $resumeFile->icon = $requestResumeFile["icon"];
                $resumeFile->description = $requestResumeFile["description"];
                $resumeFile->save();
        }
        
        return response()->noContent(Response::HTTP_CREATED);
    }
}
