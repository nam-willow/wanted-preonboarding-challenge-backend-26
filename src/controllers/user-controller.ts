import express, { Request, Response } from "express";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
const router = express.Router();
import { services } from "../services/user-services";
import { User } from "../entity/user.entity";

/**
 * 회원가입
 */
router.post("/user/create", async (req: Request, res: Response) => {
  const body: User = req.body;
  try {
    const result = await services.createUser(body);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error in user registration:", error);
    res.status(400).send(error);
  }
});

// router를 export
export default router;
