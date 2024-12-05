import express, { Request, Response } from "express";
const router = express.Router();
const group = express.Router();
const services = require("../services/webhook-services")

router.post("/portone-webhook", (req: Request, res: Response) => {
  try {
    const result: string = "컨트롤러까지 왔다.";
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
});

// router를 export
export default router;


