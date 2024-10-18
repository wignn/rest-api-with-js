import { prisma } from "../config/db.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

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

      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const result = await prisma.user.create({
        data: {
          name: userData.name,
          email: userData.email,
          password: hashedPassword,
          username: userData.username,
          token: null,
        },
      });
      return result;
    } catch (e) {
      console.log(e);
    }
  }


  static async userLogin(userData) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          username: userData.username,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }
      const passwordMatch = await bcrypt.compare(userData.password, user.password);

      await prisma.user.update({
        where: {
          username: userData.username,
        },
        data: {
          token: uuidv4(),
        },
      });

      if (!passwordMatch) {
        throw new Error("Invalid password");
      }
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}
