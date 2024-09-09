import express from 'express';
import { getResumeData } from '../controllers/homeDataController';

export const resumeRoute: express.Router = express.Router();

// Requests  
resumeRoute.get('/api/resume', getResumeData);

