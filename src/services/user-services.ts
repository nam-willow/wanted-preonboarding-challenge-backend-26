import { AppDataSource } from "../../util/database/mysql";
import { User } from "../entity/user.entity";
import { CustomError } from "../../util/err/error";
import * as bcrypt from "bcrypt";
import { Jwt } from "../../util/jwt";
import crypto from "crypto";
import { Login, TokenInfo } from "../entity/user.interface";

export const services = {
  /**
   * 회원가입
   */
  createUser: async (body: User): Promise<string | CustomError> => {
    try {
      // 비밀번호 암호화
      body.password = bcrypt.hashSync(body.password, 10);

      // user 정보 insert
      const userRepository = AppDataSource.getRepository(User);
      const newUser = userRepository.create(body);
      const savedUser = await userRepository.save(newUser);
      return "Success";
    } catch (error) {
      const customError = error as CustomError;
      throw { error: customError.code, message: customError.message };
    }
  },

  /**
   * 로그인
   */
  // login: async (body: Login): Promise<{ message: string; accessToken: string }> => {
  login: async (body: Login): Promise<TokenInfo | CustomError> => {
    try {
      const { email, password } = body;
      const jwt: Jwt = new Jwt();

      const userRepository = AppDataSource.getRepository(User);
      const [user] = await userRepository.find({ where: { email: email } });

      // 가입 유저인지 확인
      if (!user) {
        console.log("user not found");
        throw { code: "NOT_FOUND", message: "가입한 USER가 없습니다." };
      }

      // 비밀번호 일치하는지 확인
      const validPassword: boolean = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        console.log("password is Incorrect");
        throw { code: "INCORRECT", message: "비밀번호가 다릅니다." };
      }

      // token 생성
      const token: string = jwt.sign(user);
      return { message: "token is created", accessToken: token };
    } catch (error) {
      const customError = error as CustomError;
      throw { error: customError.code, message: customError.message };
    }
  },
};
