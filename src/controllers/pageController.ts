import type { Request, Response } from "express";
import path from "path";
import type { HomeRouteConfig } from '../types/homeRouteConfig'

export const displayHome = function(config: HomeRouteConfig){
    return function(req: Request, res: Response): void  {
        return res.sendFile(path.join(config.rootPath, 'index.html'));
    }
} 
