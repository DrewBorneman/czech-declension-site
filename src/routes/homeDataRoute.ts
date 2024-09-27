import express from 'express';
import { getHomeData, setHomeData } from '../controllers/homeDataController';

export const homeRoute: express.Router = express.Router();

// Requests  
homeRoute.get('/api/home', getHomeData);
homeRoute.post('/api/home/post', setHomeData);
