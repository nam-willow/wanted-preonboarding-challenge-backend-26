import express, { Request, Response, NextFunction } from "express";
import { Jwt } from "../util/jwt";
import { JwtPayload } from "jsonwebtoken";
import { CustomError } from "../util/err/error";

const authJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    // 1 token o
    if (req.headers.authorization) {
      // 1-1 token 추출
      const token = req.headers.authorization.split("Bearer ")[1];

      // 1-2 token 인증
      const jwt = new Jwt();
      const tokenInfo = jwt.verify(token);

      // 1-3 headers 추가
      if (typeof tokenInfo !== "string") {
        req.headers.email = tokenInfo.email;
        req.headers.name = tokenInfo.name;
        req.headers.phone = tokenInfo.phone;
        next();
      }
    }

    // 2 token x
    if (!req.headers.authorization) {
      res.status(403).send({ error: "NOT_FOUND", message: "Authorization token is required." });
    }
  } catch (error) {
    console.error("Error in authJwt:", error);
    const customError = error as CustomError;
    res.status(401).send({ error: customError.code, message: customError.message });
  }
};

export default authJwt;
