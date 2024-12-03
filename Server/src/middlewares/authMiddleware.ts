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
  const domain = req.headers.domain?.toString()?.trim() || '';

  if (!isValidToken(domain, token)) {
    res
      .status(HttpStatus.FORBIDDEN)
      .json({ error: 'Invalid or unauthorized token' });
    return;
  }
  next();
};

async function isValidToken(domain: string, token: string): Promise<boolean> {
  const validDomain = await DomainTokenModel.findOne({
    domain: domain,
    tokens: token,
  }).lean();
  return !!validDomain?._id;
}
