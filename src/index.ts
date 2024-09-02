// src/index.js
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { HomeRouteConfig } from './types/homeRouteConfig'
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// Local Modules
import homePageRoute from './routes/pageRoutes';
import { homeRoute } from './routes/homeDataRoute';
import { siteRoute } from "./routes/siteDataRoute";

// Server Initialization 
const app: Express = express();
const url = process.env.url || 'http://localhost';
const port = process.env.PORT || 3000;

const fullPath = path.join(process.env.BASE_LOCAL_DIR || __dirname, process.env.PUBLIC_DIR || 'public');

// Routes

app.use(cors());

app.get('/api/home', homeRoute);
app.get('/api/site', siteRoute);
app.use('/', homePageRoute({ rootPath: fullPath }));


// app.get('*', (req, res) => {
//   res.sendFile(path.join(fullPath, 'index.html'));
// });


app.listen(port, () => {
  console.log(`[server]: Server is running at ${url}:${port}`);
});