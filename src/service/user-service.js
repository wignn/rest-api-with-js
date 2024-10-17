import { prisma } from "../config/db";
export class userService {
    static async userCreate(userData){
        const result = await prisma.user.create({
            data:userData
        })

        res
    } 
}