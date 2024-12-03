import { Request, Response, NextFunction } from 'express';
import DomainTokenModel from '../models/domainToken';
import { HttpStatus } from '../utils/enums/httpStatusEnum';

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.headers.authorization?.length) {
    res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ error: 'Access token is required' });
    return;
  }

  const token = req.headers.authorization.toString().trim();

  if (!(await isValidToken(token))) {
    res
      .status(HttpStatus.FORBIDDEN)
      .json({ error: 'Invalid or unauthorized token' });
    return;
  }
  next();
};

async function isValidToken(token: string): Promise<boolean> {
  const tokenExist = await DomainTokenModel.find({ tokens: token }).lean();
  return !!tokenExist;
}
