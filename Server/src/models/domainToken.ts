import Joi from 'joi';
import mongoose, { Schema, Document } from 'mongoose';

interface IDomainToken extends Document {
  domain: string;
  tokens: string[];
  createdAt: Date;
}

export const DomainTokenValidator = Joi.object({
  domain: Joi.string().required(),
  token: Joi.array(),
  createdAt: Joi.date().required(),
});

const DomainTokenSchema = new Schema<IDomainToken>({
  domain: { type: String, required: true, unique: true },
  tokens: { type: [String], required: true, default: [] },
  createdAt: { type: Date, default: Date.now },
});

const DomainTokenModel = mongoose.model<IDomainToken>(
  'DomainToken',
  DomainTokenSchema,
);

export default DomainTokenModel;
