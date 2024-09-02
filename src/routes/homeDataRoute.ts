import express from 'express';
import { getHomeData } from '../controllers/homeDataController';

export const homeRoute: express.Router = express.Router();

// Requests  
homeRoute.get('/api/home', getHomeData);

