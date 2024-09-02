import type { THomeRouteInfo, TSiteInfo } from '../types/routes.ts';
import type { TSocialMediaLink } from '../types/components.ts';

import { HomeDataURL, SiteInfoURL } from '../consts/routes.js'
import { JSONGetRequest } from './baseRequests.js';

export async function GetHomeData () : Promise<THomeRouteInfo> {
    const jsonObject = await JSONGetRequest<THomeRouteInfo>(HomeDataURL);
    console.dir(jsonObject);

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
    console.dir(jsonObject);
    const links : Array<TSocialMediaLink> = jsonObject.links ? jsonObject.links : [];

    return {
        name: jsonObject.name ? jsonObject.name : '',
        copyrightStatement: jsonObject.copyrightStatement ? jsonObject.copyrightStatement : '',
        iconPath: jsonObject.iconPath ? jsonObject.iconPath : '',
        links: links
    };
};