import express from 'express';

import { collectData, listData } from '../controllers/dataController';
import { verifyToken } from '../middlewares/authMiddleware';
import { limitRequests } from '../utils/rateLimiter';
import { generateTokenForDomain } from '../controllers/domainController';

const router = express.Router();

router.post('/collect', verifyToken, limitRequests, collectData);
router.get('/list', listData);
router.post('/generate-token', generateTokenForDomain);

export default router;
