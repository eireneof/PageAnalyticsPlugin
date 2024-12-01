import { Request, Response, NextFunction } from 'express';
import DomainTokenModel from '../models/domainToken';

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.headers.authorization?.length) {
    res.status(401).json({ error: 'Access token is required' });
    return;
  }

  const token = req.headers.authorization.toString().trim();
  const domain = req.headers.domain?.toString()?.trim() || '';

  if (!isValidToken(domain, token)) {
    res.status(403).json({ error: 'Invalid or unauthorized token' });
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
