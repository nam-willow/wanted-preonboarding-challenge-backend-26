import express, { Request, Response } from "express";
const router = express.Router();
const group = express.Router();
const services = require("../services/webhook-services");


/**
 * 웹훅 검증
 */
router.post("/portone-webhook", (req: Request, res: Response) => {
  try {
    const result: string = "컨트롤러까지 왔다.";
    res.send(result);
  } catch (e) {
    console.error("Error in webhook:", e);
    res.status(400).send("웹훅 검증 중 오류가 발생했습니다.");
  }
});



// router를 export
export default router;
