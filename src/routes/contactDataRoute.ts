import express from 'express';
import { getContactData } from '../controllers/homeDataController';

export const contactRoute: express.Router = express.Router();

// Requests  
contactRoute.get('/api/contact', getContactData);

