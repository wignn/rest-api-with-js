import express from 'express';
import { userController } from '../controller/user-controller.js';
import { mailController } from '../controller/mail-controller.js';

export const apiRouter = express.Router();


apiRouter.post("/api/users", userController.create);
apiRouter.patch("/api/users/login", userController.login);
apiRouter.get("/api/users/:username", userController.get);
apiRouter.put("/api/users/:username", userController.update);
apiRouter.delete("/api/users/:username", userController.delete);


//
apiRouter.post("/api/mailer/current", mailController.create)