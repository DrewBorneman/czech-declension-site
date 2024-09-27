import express from 'express';
import { displayHome } from '../controllers/pageController'
import type { HomeRouteConfig } from '../types/homeRouteConfig'

export default function (config: HomeRouteConfig){
    const router: express.Router = express.Router();
    // Requests  
    return router.get('/', express.static(config.rootPath), displayHome);
}
