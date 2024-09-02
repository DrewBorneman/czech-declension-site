import type { Request, Response } from "express";
import type { THomeRouteInfo, TSiteInfo } from '../../vue/src/types/routes.ts'
import { TSocialMediaLink } from "../../vue/src/types/components.ts";
import { IconType } from "../../vue/src/types/enums.ts";

export const getHomeData = function(req: Request, res: Response): void  {
    res.send(<THomeRouteInfo>{
        tagline: 'Software Developer, Professional Badass',
        title: 'Welcome',
        subtitle: 'let me introduce myself.',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla tristique lacus ut mi. Morbi vitae erat. Integer at tortor. Suspendisse erat. Quisque orci. Quisque tortor massa, pretium non, lobortis vel, luctus ut, tellus. Donec nec massa nec lacus aliquam lobortis. Sed in dui et purus posuere gravida. Morbi accumsan. Cras pellentesque, diam semper feugiat iaculis, magna erat venenatis enim, nec lacinia tortor mauris vel ipsum. Nam lobortis. Donec semper wisi. Vivamus congue enim semper erat. Sed sem dui, porttitor eget, dapibus vel, pulvinar in, felis. Curabitur tellus felis, condimentum nec, tristique non, interdum at, lorem. Nullam nec libero ac purus hendrerit pellentesque. Phasellus sed sem. Donec molestie pede a felis. \n\nSed suscipit, quam semper ullamcorper semper, lorem est dapibus wisi, ac malesuada nulla ante eget sapien. Aenean non tellus. Cras dui. Morbi purus. ',
        imagePath: 'https://picsum.photos/200/300',
    });
} 

export const getSiteData = function(req: Request, res: Response): void  {
    res.send(<TSiteInfo>{
        name: 'Drew Borneman',
        copyrightStatement: '©2024 Drew Borneman',
        iconPath: 'https://picsum.photos/48/48',
        links: [<TSocialMediaLink>{
            icon: IconType.Facebook,
            subtext: "Facebook",
            url: "https://www.facebook.com",
        },
        <TSocialMediaLink>{
            icon: IconType.Instagram,
            subtext: "Instagram",
            url: "https://www.instagram.com",
        },
        <TSocialMediaLink>{
            icon: IconType.LinkedIn,
            subtext: "LinkedIn",
            url: "https://www.linkedin.com",
        },
        ]
    });
} 