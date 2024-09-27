import type { TProject, TSocialMediaLink, TResumeFile } from "./components";

export type TSiteInfo = {
    name: string;
    iconPath: string;
    copyrightStatement: string;
    passwordHash: string;
    links: TSocialMediaLink[];
}

export type THomeRouteInfo = {
    tagline: string;
    title: string;
    subtitle: string;
    text: string;
    imagePath: string;
}

export type TContactRouteInfo = {
    title: string;
    subtitle: string;
    text: string;
}

export type TResumeRouteInfo = {
    title: string;
    text: string;
    files: TResumeFile[];
}

export type TProjectsRouteInfo = {
    title: string;
    text: string;
    projects: TProject[];
}
