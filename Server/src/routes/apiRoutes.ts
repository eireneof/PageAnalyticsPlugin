import express from "express";

import { limitRequests } from "../utils/rateLimiter";
import { collectData, listData } from "../controllers/dataController";
import { verifyToken } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/collect", verifyToken, limitRequests, collectData);
router.get("/list", listData);

export default router;