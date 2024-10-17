import express from 'express'
import { apiRouter } from '../routes/api.js';
export const web = express();

web.use(express.json());
web.use(apiRouter);