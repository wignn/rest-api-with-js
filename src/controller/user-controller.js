import { userService } from "../service/user-service";
import { userValidation } from "../validation/user-validation";

export class user{
    static async create(req, res){
        const userData = userValidation.parse(req.body);
        const response = await userService.userCreate(userData)
        res.status(200).json({data: response});
    }   
}