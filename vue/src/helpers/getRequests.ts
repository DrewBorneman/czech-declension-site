import type { TContactRouteInfo, THomeRouteInfo, TProjectsRouteInfo, TResumeRouteInfo, TSiteInfo } from '../types/routes.ts';
import type { TProject } from '../types/components.ts';

import { ContactDataGetURL, HomeDataGetURL, projectsDataGetURL, ResumeDataGetURL, SiteInfoGetURL } from '../consts/routes.js'
import { JSONGetRequest } from './baseRequests.js';

export async function GetHomeData () : Promise<THomeRouteInfo> {
    const jsonObject = await JSONGetRequest<THomeRouteInfo>(HomeDataGetURL);

    return {
        tagline: jsonObject.tagline ? jsonObject.tagline : '',
        title: jsonObject.title ? jsonObject.title : '',
        subtitle: jsonObject.subtitle ? jsonObject.subtitle : '',
        text: jsonObject.text ? jsonObject.text : '',
        imagePath: jsonObject.imagePath ? jsonObject.imagePath : '',
    };
};

export async function GetSiteInfo () : Promise<TSiteInfo> {
    const jsonObject = await JSONGetRequest<TSiteInfo>(SiteInfoGetURL);
    const links = jsonObject.links;

    return {
        name: jsonObject.name ? jsonObject.name : '',
        copyrightStatement: jsonObject.copyrightStatement ? jsonObject.copyrightStatement : '',
        iconPath: jsonObject.iconPath ? jsonObject.iconPath : '',
        passwordHash: jsonObject.passwordHash ? jsonObject.passwordHash : '',
        links: links
    };
};

export async function getContactData () : Promise<TContactRouteInfo> {
    const jsonObject = await JSONGetRequest<TContactRouteInfo>(ContactDataGetURL);

    return {
        title: jsonObject.title ? jsonObject.title : '',
        subtitle: jsonObject.subtitle ? jsonObject.subtitle : '',
        text: jsonObject.text ? jsonObject.text : '',
    };
};

export async function getResumeData () : Promise<TResumeRouteInfo> {
    const jsonObject = await JSONGetRequest<TResumeRouteInfo>(ResumeDataGetURL);

    return {
        title: jsonObject.title ? jsonObject.title : '',
        text: jsonObject.text ? jsonObject.text : '',
        files: jsonObject.files ? jsonObject.files : [],
    };
};

export async function getProjectsData () : Promise<TProjectsRouteInfo> {
    const jsonObject = await JSONGetRequest<TProjectsRouteInfo>(projectsDataGetURL);
    
    const projects : Array<TProject> = jsonObject.projects ? jsonObject.projects : [];

    return {
        title: jsonObject.title ? jsonObject.title : '',
        text: jsonObject.title ? jsonObject.text : '',
        projects: projects,
    };
};
