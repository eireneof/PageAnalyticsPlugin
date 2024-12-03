import { Request, Response } from 'express';
import { ExtractionDataService } from '../services/extractionDataService';

export const collectData = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const token = req.header('Authorization')?.toString()?.trim() || '';
  const result = await ExtractionDataService.collectData(req.body, token);
  res.status(result.status).json(result.body);
};

export const listData = async (req: Request, res: Response): Promise<void> => {
  const token = req.query.token as string;
  const result = await ExtractionDataService.listData(token);

  res.status(result.status).json(result.body);
};
