import express from 'express';
import { userController } from '../controller/user-controller.js';
import { mailController } from '../controller/mail-controller.js';

export const apiRouter = express.Router();

//user api
apiRouter.post("/api/users/current", userController.create)
apiRouter.patch("/api/users/current", userController.login)


//
apiRouter.post("/api/users/mailer", mailController.create)