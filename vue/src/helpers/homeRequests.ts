import type { TContactRouteInfo, THomeRouteInfo, TResumeRouteInfo, TSiteInfo } from '../types/routes.ts';
import type { TSocialMediaLink } from '../types/components.ts';

import { ContactDataURL, HomeDataURL, ResumeDataURL, SiteInfoURL } from '../consts/routes.js'
import { JSONGetRequest } from './baseRequests.js';

export async function GetHomeData () : Promise<THomeRouteInfo> {
    const jsonObject = await JSONGetRequest<THomeRouteInfo>(HomeDataURL);

    return {
        tagline: jsonObject.tagline ? jsonObject.tagline : '',
        title: jsonObject.title ? jsonObject.title : '',
        subtitle: jsonObject.subtitle ? jsonObject.subtitle : '',
        text: jsonObject.text ? jsonObject.text : '',
        imagePath: jsonObject.imagePath ? jsonObject.imagePath : '',
    };
};

export async function GetSiteInfo () : Promise<TSiteInfo> {
    const jsonObject = await JSONGetRequest<TSiteInfo>(SiteInfoURL);
    const links : Array<TSocialMediaLink> = jsonObject.links ? jsonObject.links : [];

    return {
        name: jsonObject.name ? jsonObject.name : '',
        copyrightStatement: jsonObject.copyrightStatement ? jsonObject.copyrightStatement : '',
        iconPath: jsonObject.iconPath ? jsonObject.iconPath : '',
        links: links
    };
};

export async function getContactData () : Promise<TContactRouteInfo> {
    const jsonObject = await JSONGetRequest<TContactRouteInfo>(ContactDataURL);

    return {
        title: jsonObject.title ? jsonObject.title : '',
        subtitle: jsonObject.subtitle ? jsonObject.subtitle : '',
        email: jsonObject.email ? jsonObject.email : '',
    };
};

export async function getResumeData () : Promise<TResumeRouteInfo> {
    const jsonObject = await JSONGetRequest<TResumeRouteInfo>(ResumeDataURL);

    return {
        title: jsonObject.title ? jsonObject.title : '',
        text: jsonObject.text ? jsonObject.text : '',
        pdfPath: jsonObject.pdfPath ? jsonObject.pdfPath : '',
        docxPath: jsonObject.docxPath ? jsonObject.docxPath : '',
    };
};
