import DomainTokenModel from '../models/domainToken';
import { IDomainToken } from '../utils/interfaces/domainTokenInterface';

export class DomainTokenRepository {
  static async findByDomain(domain: string) {
    return DomainTokenModel.findOne({ domain });
  }

  static async save(domainToken: Partial<IDomainToken>) {
    const newDomainToken = new DomainTokenModel(domainToken);
    return newDomainToken.save();
  }

  static async updateTokens(domain: string, tokens: string[]) {
    return DomainTokenModel.updateOne({ domain }, { $set: { tokens } });
  }
}
