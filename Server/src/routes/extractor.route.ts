import express from "express";
import { ExtractedDataControllers } from "../controllers/extractor.controller";

export const router = express.Router()

router.post('/',ExtractedDataControllers.addExtractedData)
router.get('/', ExtractedDataControllers.getExtractedData)
router.get('/:id', ExtractedDataControllers.getExtractedDataById)
router.delete('/:id', ExtractedDataControllers.deleteExtractedData)