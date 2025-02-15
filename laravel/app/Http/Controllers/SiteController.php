<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SiteInfo;
use App\Models\SocialMediaLink;
use Symfony\Component\HttpFoundation\Response;

class SiteInfoResponse
{
    public $title;
    public $name;
    public $iconPath;
    public $copyrightStatement;
    public $passwordHash;
    public $links = array();
}

class SiteController extends Controller

{    public function get()
    {
        $siteInfo = SiteInfo::first();
        $socialMediaLinks = SocialMediaLink::all();

        $siteInfoResponse = new SiteInfoResponse();
        $siteInfoResponse->name = $siteInfo->name;
        $siteInfoResponse->iconPath = $siteInfo->iconPath;
        $siteInfoResponse->copyrightStatement = $siteInfo->copyrightStatement;
        $siteInfoResponse->passwordHash = $siteInfo->passwordHash;
        $siteInfoResponse->links = $socialMediaLinks->all();

        return response()->json($siteInfoResponse);
    }
    public function post(Request $request)
    {
        $siteInfo = SiteInfo::first();
        $siteInfo->name = $request->name;
        $siteInfo->iconPath = $request->iconPath;
        $siteInfo->copyrightStatement = $request->copyrightStatement;
        $siteInfo->passwordHash = $request->passwordHash;
        $siteInfo->save();

        SocialMediaLink::truncate();
        $requestLinks = $request->links;
        foreach($requestLinks as $requestLink){
            $link = SocialMediaLink::newModelInstance();
            $link->id = $requestLink["id"];
            $link->icon = $requestLink["icon"];
            $link->name = $requestLink["name"];
            $link->url = $requestLink["url"];
            $link->save();
        }

        return response()->noContent(Response::HTTP_CREATED);
    }
}
