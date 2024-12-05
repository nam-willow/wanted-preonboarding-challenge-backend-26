import express from "express";
const router = express.Router();

import web from "./webhook-controller";

router.use("/", web);

export default router;