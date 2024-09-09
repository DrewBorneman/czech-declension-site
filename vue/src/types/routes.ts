import type { TSocialMediaLink } from "./components";

export type TSiteInfo = {
    name: string;
    iconPath: string;
    copyrightStatement: string;
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
    email: string;
}

export type TResumeRouteInfo = {
    title: string;
    text: string;
    pdfFilename: string;
    docxFilename: string;
    pdfPath: string;
    docxPath: string;
}