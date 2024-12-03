import mongoose, { Schema } from 'mongoose';
import { IDomainToken } from '../utils/interfaces/domainTokenInterface';

const DomainTokenSchema = new Schema<IDomainToken>({
  domain: { type: String, required: true, unique: true },
  tokens: { type: [String], required: true, default: [] },
  createdAt: { type: Date, default: new Date() },
});

export default mongoose.model<IDomainToken>(
  'DomainTokens',
  DomainTokenSchema,
);
