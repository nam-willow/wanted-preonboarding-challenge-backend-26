import jwt, { JwtPayload } from "jsonwebtoken";
import { Login } from "../src/entity/user.interface";
import { User } from "../src/entity/user.entity";
import { CustomError } from "./err/error";

export class Jwt {
  private secretKey: string;

  constructor() {
    this.secretKey = process.env.JWT_SECRET || "";
  }

  sign(user: User): string {
    if (!this.secretKey) {
      throw { code: "NOT_FOUND", message: "jwt secret key가 없습니다." };
    }

    // 나중에 header에 넣어서 사용할수 있는 값들임
    const payload = {
      email: user.email,
      name: user.name,
      phone: user.phone,
    };

    // JWT 생성
    const token = jwt.sign(payload, this.secretKey, { expiresIn: "7d", issuer: "wantedMarket" });
    return token;
  }

  verify(token: string): JwtPayload | string {
    try {
      const tokenInfo = jwt.verify(token, this.secretKey);
      //   console.log(tokenInfo);
      return tokenInfo;
    } catch (error) {
      const customError = error as CustomError;
      //   console.log(customError);
      throw { code: customError.code, message: customError.message };
    }
  }
}
