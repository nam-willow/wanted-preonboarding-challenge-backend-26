import express from "express";
const router = express.Router();

import webhook from "./webhook-controller";
import payment from "./payment-controller";
import user from "./user-controller";

router.use("/", [webhook, payment, user]);

export default router;