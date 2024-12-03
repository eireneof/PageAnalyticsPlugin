import { Document } from 'mongoose';
export interface IDomainToken extends Document {
  adminToken?: boolean;
  domain: string;
  tokens: string[];
  createdAt: Date;
}
