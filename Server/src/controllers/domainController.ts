import { Request, Response } from 'express';
import crypto from 'crypto';
import DomainTokenModel from '../models/domainToken';

export const generateTokenForDomain = async (req: Request, res: Response) => {
  const domain = req.headers.host?.toString().trim();

  if (!domain) {
    res.status(400).json({ error: 'Domain is required' });
    return;
  }

  try {
    const existingDomain = await DomainTokenModel.findOne({ domain });

    if (existingDomain) {
      if (existingDomain.tokens.length >= 2) {
        res
          .status(400)
          .json({ error: 'This domain already has the maximum tokens limit' });
        return;
      }

      const newToken = crypto.randomBytes(32).toString('hex');
      existingDomain.tokens.push(newToken);
      await existingDomain.save();

      res.status(201).json({ domain, token: newToken });
      return;
    }

    const newToken = crypto.randomBytes(32).toString('hex');
    const newDomainToken = new DomainTokenModel({ domain, tokens: [newToken] });
    await newDomainToken.save();

    res.status(201).json({ domain, token: newToken });
    return;
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate token', details: error });
    return;
  }
};
