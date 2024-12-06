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

/**
 * 결제 상세내역 조회
 */
router.post("/payments-balance/:imp_uid", async (req: Request, res: Response) => {
  const { imp_uid } = req.params; // URL 파라미터에서 imp_uid를 가져옵니다.
  try {
    const result = await services.paymentsBalance(imp_uid); // 결제 상세내역 조회
    res.json(result); // 결제 상세내역을 응답으로 보냅니다.
  } catch (error) {
    console.error("Error fetching payment balance:", error);
    res.status(500).send("결제 상세내역 조회 중 오류가 발생했습니다."); // 오류 메시지 반환
  }
});

/**
 * 결제 완료
 */
router.post("/payment/complete", (req: Request, res: Response) => {
  try {
    const result: string = "결제완료 컨트롤러까지 왔다.";
    res.send(result);
  } catch (e) {
    console.error("Error in payment complete:", e);
    res.status(400).send("결제 완료 처리 중 오류가 발생했습니다.");
  }
});

// router를 export
export default router;
