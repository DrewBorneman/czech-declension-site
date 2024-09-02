import express from 'express';
import { getSiteData } from '../controllers/homeDataController';

export const siteRoute: express.Router = express.Router();

// Requests  
siteRoute.get('/api/site', getSiteData);

