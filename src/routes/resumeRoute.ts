import express from 'express';
import { getResumeData, setResumeData } from '../controllers/homeDataController';

export const resumeRoute: express.Router = express.Router();

// Requests  
resumeRoute.get('/api/resume', getResumeData);
resumeRoute.post('/api/resume/post', setResumeData);
