import { AppDataSource } from "../../util/database/mysql";
import { User } from "../entity/user.entity";
import { CustomError } from "../../util/err/error";
import * as bcrypt from "bcrypt";
import { log } from "console";

export const services = {
  /**
   * 회원가입
   */
  createUser: async (body: User) => {
    try {
      // 비밀번호 암호화
      body.password = bcrypt.hashSync(body.password, 10);
      const userRepository = AppDataSource.getRepository(User);
      const newUser = userRepository.create(body);
      const savedUser = await userRepository.save(newUser);
      return "Success";
    } catch (error) {
      const customError = error as CustomError;
      throw { error: customError.code, message: customError.message };
    }
  },
};
