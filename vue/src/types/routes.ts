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