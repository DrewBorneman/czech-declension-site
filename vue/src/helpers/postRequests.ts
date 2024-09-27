import type { TContactRouteInfo, THomeRouteInfo, TProjectsRouteInfo, TResumeRouteInfo, TSiteInfo } from '../types/routes.ts';

import { ContactDataPostURL, HomeDataPostURL, projectsDataPostURL, ResumeDataPostURL,  SiteInfoPostURL } from '../consts/routes.js'
import { JSONPostRequest } from './baseRequests.js';

export async function SetHomeData (HomeData: THomeRouteInfo) : Promise<void> {
    const ret = await JSONPostRequest(HomeDataPostURL, JSON.stringify(HomeData))
        .then((response) => { return response; });

    if(ret != 200 && ret != 201){
        console.log(`Error: route ${HomeDataPostURL} returned a status code of ${ret}`);
    }
};

export async function SetSiteInfo (SiteInfo: TSiteInfo) : Promise<void> {
    const ret = await JSONPostRequest(SiteInfoPostURL, JSON.stringify(SiteInfo))
        .then((response) => { return response; });

    if(ret != 200 && ret != 201){
        console.log(`Error: route ${SiteInfoPostURL} returned a status code of ${ret}`);
    }
};

export async function SetContactData (ContactData: TContactRouteInfo) : Promise<void> {
    const ret = await JSONPostRequest(ContactDataPostURL, JSON.stringify(ContactData))
        .then((response) => { return response; });

    if(ret != 200 && ret != 201){
        console.log(`Error: route ${ContactDataPostURL} returned a status code of ${ret}`);
    }
};

export async function SetResumeData (ResumeData: TResumeRouteInfo) : Promise<void> {
    const ret = await JSONPostRequest(ResumeDataPostURL, JSON.stringify(ResumeData))
        .then((response) => { return response; });

    if(ret != 200 && ret != 201){
        console.log(`Error: route ${ResumeDataPostURL} returned a status code of ${ret}`);
    }
};

export async function SetProjectsData (ProjectsData: TProjectsRouteInfo) : Promise<void> {
    const ret = await JSONPostRequest(projectsDataPostURL, JSON.stringify(ProjectsData))
        .then((response) => { return response; });

    if(ret != 200 && ret != 201){
        console.log(`Error: route ${projectsDataPostURL} returned a status code of ${ret}`);
    }
};
