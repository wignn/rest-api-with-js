import express from 'express';
import { userController } from '../controller/user-controller.js';

export const apiRouter = express.Router();

apiRouter.post("/api/users/current", userController.create)
