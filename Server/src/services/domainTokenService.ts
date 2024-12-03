import { HttpStatus } from '../utils/enums/httpStatusEnum';
import { DomainTokenValidator } from '../utils/validators/domainTokenValidator';
import { IServiceResult } from '../utils/interfaces/ServiceResultInterface';
import { DomainTokenRepository } from '../repositories/domainTokenRepository';
import { TokenGenerator } from '../utils/tokenGenerator';
import { IDomainToken } from '../utils/interfaces/domainTokenInterface';

export class DomainTokenService {
  static async generateToken(domain: string): Promise<IServiceResult> {
    try {
      const existingDomain = await DomainTokenRepository.findByDomain(domain);

      if (existingDomain) {
        if (existingDomain.tokens.length >= 1) {
          return {
            status: HttpStatus.BAD_REQUEST,
            body: { error: 'This domain already has the maximum tokens limit' },
          };
        }

        const newToken = TokenGenerator.generate();
        existingDomain.tokens.push(newToken);
        await DomainTokenRepository.updateTokens(domain, existingDomain.tokens);

        return {
          status: HttpStatus.CREATED,
          body: { domain, token: newToken },
        };
      }

      const newToken = TokenGenerator.generate();
      const newData: Partial<IDomainToken> = { domain, tokens: [newToken], createdAt: new Date() };
      const { error } = DomainTokenValidator.validate(newData);

      if (error) {
        return {
          status: HttpStatus.BAD_REQUEST,
          body: { error: 'Validation error', details: error },
        };
      }

      await DomainTokenRepository.save(newData);

      return {
        status: HttpStatus.CREATED,
        body: { domain, token: newToken },
      };
    } catch (error: unknown) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        body: { error, details: error },
      };
    }
  }
}
