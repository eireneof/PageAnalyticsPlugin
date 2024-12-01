import express from 'express';

import { collectData, listData } from '../controllers/dataController';
import { verifyToken } from '../middlewares/authMiddleware';
import { limitRequests } from '../utils/rateLimiter';

const router = express.Router();

router.post('/collect', verifyToken, limitRequests, collectData);
router.get('/list', listData);

export default router;
