import { Request, Response } from 'express';
import { DomainTokenService } from '../services/domainTokenService';

export class DomainTokenController {
  public static async generateTokenForDomain(req: Request, res: Response) {
    const domain = req.headers.host?.toString()?.trim() || '';
    const result = await DomainTokenService.generateToken(domain);
    res.status(result.status).json(result.body);
  }
}
