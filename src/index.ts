// src/index.js
import express, { Express } from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// Local Modules
import homePageRoute from './routes/pageRoutes';
import { homeRoute } from './routes/homeDataRoute';
import { contactRoute } from './routes/contactDataRoute';
import { resumeRoute } from './routes/resumeRoute';
import { siteRoute } from "./routes/siteDataRoute";
import { projectsRoute } from "./routes/projectsRoute";

// Server Initialization 
const app: Express = express();
const url = process.env.url || 'http://localhost';
const port = process.env.PORT || 3000;
const publicDir = process.env.PUBLIC_DIR || 'public';

const fullPath = path.join(process.env.BASE_LOCAL_DIR || __dirname, publicDir);

// Routes

app.use(cors());
app.use(express.json());
app.use(express.static(publicDir));

app.get('/api/home', homeRoute);
app.get('/api/contact', contactRoute);
app.get('/api/resume', resumeRoute);
app.get('/api/projects', projectsRoute);
app.get('/api/site', siteRoute);

app.post('/api/home/post', homeRoute);
app.post('/api/contact/post', contactRoute);
app.post('/api/resume/post', resumeRoute);
app.post('/api/projects/post', projectsRoute);
app.post('/api/site/post', siteRoute);
app.use('/', homePageRoute({ rootPath: fullPath }));

app.listen(port, () => {
  console.log(`[server]: Server is running at ${url}:${port}`);
});