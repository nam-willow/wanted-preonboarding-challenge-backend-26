import express from "express";
const router = express.Router();

import webhook from "./webhook-controller";
import payment from "./payment-controller";
import user from "./user-controller";
import product from "./product-controller";

router.use("/", [webhook, payment, user, product]);

export default router;
