import express from 'express';
import { getSiteData, setSiteData } from '../controllers/homeDataController';

export const siteRoute: express.Router = express.Router();

// Requests  
siteRoute.get('/api/site', getSiteData);
siteRoute.post('/api/site/post', setSiteData);
