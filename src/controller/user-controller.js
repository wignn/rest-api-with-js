import { userService } from "../service/user-service.js";
import { userValidation } from "../validation/user-validation.js";

export class userController {
  static async create(req, res) {
    try {
      const userData = userValidation.parse(req.body);
      console.log(userData)
      const response = await userService.userCreate(userData);
      res.status(200).json({ data: response });
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }
}
