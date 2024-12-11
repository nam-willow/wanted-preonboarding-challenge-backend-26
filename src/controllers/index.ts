import express from "express";
const router = express.Router();

import webhook from "./webhook-controller";
import payment from "./payment-controller";

router.use("/", [webhook, payment]);

export default router;