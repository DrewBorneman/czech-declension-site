import express from 'express';
import { getContactData, setContactData } from '../controllers/homeDataController';

export const contactRoute: express.Router = express.Router();

// Requests  
contactRoute.get('/api/contact', getContactData);
contactRoute.post('/api/contact/post', setContactData);
