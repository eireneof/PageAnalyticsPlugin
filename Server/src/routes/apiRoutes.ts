import express from 'express';

import { collectData, listData } from '../controllers/extractionDataController';
import { verifyToken } from '../middlewares/authMiddleware';
import { limitRequests } from '../utils/rateLimiter';
import { DomainTokenController } from '../controllers/domainTokenController';

const router = express.Router();

router.post('/collect', verifyToken, limitRequests, collectData);
router.get('/list', listData);
router.post('/generate-token', DomainTokenController.generateTokenForDomain);

export default router;
