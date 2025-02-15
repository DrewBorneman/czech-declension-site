<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjectData;
use App\Models\Projects;
use Symfony\Component\HttpFoundation\Response;

class ProjectResponse
{
    public $title;
    public $text;
    public $projects = array();
}

class ProjectsController extends Controller
{
    public function get()
    {
        $projectData = ProjectData::first();
        $projects = Projects::all();

        $projectResponse = new ProjectResponse();
        $projectResponse->title = $projectData->title;
        $projectResponse->text = $projectData->text;
        $projectResponse->projects = $projects->all();
        
        return response()->json($projectResponse);
    }
    public function post(Request $request)
    {
        $projectData = ProjectData::first();
        $projectData->title = $request->title;
        $projectData->text = $request->text;
        $projectData->save();
        
        Projects::truncate();
        $requestProjects = $request->projects;
        foreach($requestProjects as $requestProject){
            $project = Projects::newModelInstance();
            $project->id = $requestProject["id"];
            $project->title = $requestProject["title"];
            $project->date = $requestProject["date"];
            $project->text = $requestProject["text"];
            $project->url = $requestProject["url"];
            $project->imagePath = $requestProject["imagePath"];
            $project->save();
        }
        
        return response()->noContent(Response::HTTP_CREATED);
    }
}
