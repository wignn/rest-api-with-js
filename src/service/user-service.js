import { prisma } from "../config/db.js";
import { v4 as uuidv4 } from "uuid";

export class userService {
  static async userCreate(userData) {
    try {
      const userByEmail = await prisma.user.findUnique({
        where: {
          email: userData.email,
        },
      });
      if (userByEmail) {
        throw new Error("email already exists");
      }

      const userByUsername = await prisma.user.findUnique({
        where: {
          username: userData.username,
        },
      });
      
      if (userByUsername) {
        throw new Error("Username already exists");
      }

      const result = await prisma.user.create({
        data: {
          name: userData.name,
          email: userData.email,
          password: userData.password,
          username: userData.username,
          token: uuidv4(),
        },
      });
      return result;
    } catch (e) {
      console.log(e);
    }
  }
}
