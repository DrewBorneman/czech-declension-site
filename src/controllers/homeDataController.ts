import type { Request, Response } from "express";
import type { TContactRouteInfo, THomeRouteInfo, TProjectsRouteInfo, TResumeRouteInfo, TSiteInfo } from '../../vue/src/types/routes.ts'
import { TProject, TResumeFile, TSocialMediaLink } from "../../vue/src/types/components.ts";
import dotenv from "dotenv";
import { IconType } from "../../vue/src/types/enums.ts";


dotenv.config();
const publicDir = process.env.PUBLIC_DIR || 'public';

let homeData: THomeRouteInfo = <THomeRouteInfo>{
    tagline: 'Software Developer, and much more',
    title: 'Welcome',
    subtitle: 'Let me introduce myself.',
    text: 'I\'m Drew, a software developer currently based in Brno, Czechia.  I\'ve always had a passion for creating, exploring and learning, which I strive to exemplify both in and outside of my work.  As a developer, after graduating with a degree in Computer Engineering from Case Western Reserve University in 2019, I\'ve worked on projects involving full-stack web development, extensions for ERP systems, and most recently embedded firmware development, and have also continued my exploration of various technologies via my personal projects, dabbling in additional fields such as UX design and Android app development. Outside of development, I enjoy language learning, traveling, cooking, and music composition.<br /><br />Thank you for paying my site a visit, and feel free to check out my work on the Resume and Project pages, or get in touch on the Contact page.',
    imagePath: 'https://picsum.photos/200/300',
};

let siteData: TSiteInfo = <TSiteInfo> {
    name: 'Drew Borneman',
    copyrightStatement: '©2024 Drew Borneman',
    iconPath: './public/monogram.svg',
    passwordHash: 'f0e4c2f76c58916ec258f246851bea091d14d4247a2fc3e18694461b1816e13b',   //asdf
    links: [<TSocialMediaLink>{
        icon: IconType.Facebook,
        name: "Facebook",
        url: "https://www.facebook.com/drew.borneman/",
    },
    <TSocialMediaLink>{
        icon: IconType.Instagram,
        name: "Instagram",
        url: "https://www.instagram.com/supersquashmann/",
    },
    <TSocialMediaLink>{
        icon: IconType.LinkedIn,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dborneman/",
    },
    ]
};

let contactData: TContactRouteInfo = <TContactRouteInfo>{
    title: 'Contact',
    subtitle: 'Here\'s how to get ahold of me.',
    text: 'Please send any inquiries to my email at <span class="font-bold">drewwborneman@gmail.com</span>.<br />You can also find me on the following platforms:',
};

const pdfFilename = 'resume.pdf';
const docxFilename = 'resume.docx';

let resumeData: TResumeRouteInfo = <TResumeRouteInfo>{
    title: 'Resume',
    text: 'Here you can download my resume in the following formats:',
    files: [<TResumeFile>{
        filename: pdfFilename,
        path: pdfFilename,
        icon: IconType.PDF,
        description: 'Resume (PDF)',
        },
        <TResumeFile>{
            filename: pdfFilename,
            path: pdfFilename,
            icon: IconType.DOCX,
            description: 'Resume (DOCX)',
        }
    ],
};

let projectsData: TProjectsRouteInfo = <TProjectsRouteInfo>{
    title: 'Projects',
    text: 'I have been lucky enough to work on a wide variety of projects, both while employed and for my own interest.  Here are some of the highlights:',
    projects: [
        <TProject>{
            id: 0,
            title: 'FDE',
            date: 'Siemens · 2023-2024',
            text: 'The FDE (Field Data Enablement) Gateway is a brownfield gateway device designed to be used in an industrial environment to collect data from field devices over various protocols (such as Modbus, USS, BLE and more) and transmit it to the cloud via MQTT.  As a developer on the project from April 2023 until its unfortunate cancellation in September 2024, I carried out development tasks on various areas of the project, including both the firmware, developed in C++ on top of the existing internal Cactus framework, and the Web-based configuration gateway, developed in TypeScript/Vue.  Although the FDE only ever saw limited release, I consider it a valuable development experience in working with embedded devices and enterprise-scale projects.',
            url: 'https://www.siemens.com/global/en/products/automation/systems/industrial/field-data-enablement.html',
            imagePath: 'FDE-image.jpg',
        },
        <TProject>{
            id: 1,
            title: 'International Spending Tracker',
            date: 'Personal Project · 2022-2023',
            text: 'This Android app allows you to log, categorize and track expenses, with automatic currency conversion across over 150 currencies and up-to-date rates via API. Expenses can then be viewed in both graph and calendar format.  I developed this app in Java using Android Studio, both to explore the app development process, and to have the final product for my own use - as both a frequent traveller and someone who prefers to have control over my spending habits, currency conversions were a constant headache while abroad.<br /><br />The app can be downloaded for free on the linked Play Store page.',
            url: 'https://play.google.com/store/apps/details?id=com.spendingtracker&hl=en&pli=1',
            imagePath: 'https://play-lh.googleusercontent.com/BJEapw9zUdCtr5XZjo4LXKmcrSBpOyeBaET1P7uWhpJu0UIhuEF-bndMXFsXcMIzJQ=w240-h480-rw',
        },
        <TProject>{
            id: 2,
            title: 'This website!',
            date: 'Personal Project · 2024',
            text: 'This site was created as a personal project to both build and showcase my development skills, as well as to provide a platform for my resume and portfolio.  The site is built using Vue.js and TypeScript, and was originally created with a backend using Express.js, but has since been refactored into a Frontend-only webapp for ease of hosting.  The site features customizable content via a CMS, and will be further updated with new features such as built-in translations and a mobile-friendly layout.',
        },
    ]
};



export const getHomeData = function(req: Request, res: Response): void  {
    res.send(homeData);
} 

export const setHomeData = function(req: Request, res: Response): void  {
    const _homeData = req.body as THomeRouteInfo;
    homeData = _homeData
    res.sendStatus(200);
} 

export const getSiteData = function(req: Request, res: Response): void  {
    res.send(siteData);
} 

export const setSiteData = function(req: Request, res: Response): void  {
    const _siteInfo = req.body as TSiteInfo;
    siteData = _siteInfo
    res.sendStatus(200);
} 

export const getContactData = function(req: Request, res: Response): void  {
    res.send(contactData);
} 

export const setContactData = function(req: Request, res: Response): void  {
    const _contactData = req.body as TContactRouteInfo;
    contactData = _contactData
    res.sendStatus(200);
} 

export const getResumeData = function(req: Request, res: Response): void  {
    res.send(resumeData);
} 

export const setResumeData = function(req: Request, res: Response): void  {
    const _resumeData = req.body as TResumeRouteInfo;
    resumeData = _resumeData
    res.sendStatus(200);
} 

export const getProjectsData = function(req: Request, res: Response): void  {
    res.send(projectsData);
} 

export const setProjectsData = function(req: Request, res: Response): void  {
    const _projectsData = req.body as TProjectsRouteInfo;
    projectsData = _projectsData
    res.sendStatus(200);
} 
