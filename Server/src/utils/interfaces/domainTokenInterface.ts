import { Document } from 'mongoose';
export interface IDomainToken extends Document {
  domain: string;
  tokens: string[];
  createdAt: Date;
}
