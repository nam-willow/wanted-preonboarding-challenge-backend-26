import express, { Request, Response } from "express";
import { validate } from "class-validator";
import { validators } from "../../middlewares/validators";
import { plainToInstance } from "class-transformer";
const router = express.Router();
import { services } from "../services/user-services";
import { User } from "../entity/user.entity";
import { CustomError } from "../../util/err/error";

/**
 * 회원가입
 */
router.post("/user/sign-up", async (req: Request, res: Response) => {
  const body: User = req.body;
  try {
    const result = await services.createUser(body);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error in user registration:", error);
    const customError = error as CustomError;
    res.status(400).send({ error: "ARGUMENTS_REQUIRED", message: customError.message });
  }
});

/**
 * 로그인
 */
router.post("/user/login", validators.userLogin, async (req: Request, res: Response) => {
  // console.log(req);
  const body: User = req.body;
  try {
    const result = await services.login(body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

// router를 export
export default router;
