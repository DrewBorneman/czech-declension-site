import express from 'express';
import { getProjectsData, setProjectsData } from '../controllers/homeDataController';

export const projectsRoute: express.Router = express.Router();

// Requests  
projectsRoute.get('/api/projects', getProjectsData);
projectsRoute.post('/api/projects/post', setProjectsData);
