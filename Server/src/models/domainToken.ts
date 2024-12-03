import mongoose, { Schema } from 'mongoose';
import { IDomainToken } from '../utils/interfaces/domainTokenInterface';

const DomainTokenSchema = new Schema<IDomainToken>({
  adminToken: { type: 'boolean', required: false },
  domain: { type: String, required: true, unique: true },
  tokens: { type: [String], required: true, default: [] },
  createdAt: { type: Date, default: new Date() },
});

export default mongoose.model<IDomainToken>(
  'DomainsTokens',
  DomainTokenSchema,
);
