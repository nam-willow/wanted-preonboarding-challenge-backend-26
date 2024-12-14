import express, { Request, Response } from "express";
const router = express.Router();
const group = express.Router();
const services = require("../services/user-services");


interface UserConfig {
  email: string;
  phone: string;
  address: number;
  postcode: string;
  name: string;
}

/**
 * 회원가입
 */
router.post(
  "/user/create", 
  async (req: Request, res: Response) => {
    try {
      console.log("회원가입 컨트롤러")
      const result: string = await services.createUser(req.body.email);
      res.send(result);
    } catch (e) {
      console.error("Error in payment complete:", e);
      res.status(400).send({
        "error" : "USER_CREATE_ERROR",
        "massage" : "회원가입하다가 detail 오류 throw",
      });
    }
});


// router를 export
export default router;

