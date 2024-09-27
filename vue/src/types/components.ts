import { IconType } from "./enums";

export interface TSocialMediaLink {
    icon: IconType;
    url: string;
    name: string;
}

export interface TResumeFile {
    filename: string;
    path: string;
    icon: IconType;
    description: string;
}

export interface TProject {
    id: number;
    title: string;
    date: string;
    text: string;
    url: string;
    imagePath: string;
}
