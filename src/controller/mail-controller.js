import {Mailer} from '../service/mail-service.js';
import {mv} from '../validation/mail-validation.js';

export class mailController {
    static async create(req, res) {
        try{
            const mailData = req.body;
            const response = await Mailer.ForgotPassword(mv.parse(mailData));
            res.status(200).json({data: response});
        }catch(e){
            console.log(e);
            res.status(500).json(e);
        }
    }
}