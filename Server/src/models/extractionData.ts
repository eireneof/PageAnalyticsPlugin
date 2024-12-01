import mongoose, { Schema, model, Document } from 'mongoose'
import Joi from 'joi'

const ExtractionDataSchema = new Schema({
  device: {
    type: String,
    enum: ['android', 'ios', 'desktop'],
    required: true
  },
  operatingSystem: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  themeSwitchCount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  token: { type: String, required: true },
});

export const ExtractionDataValidator = Joi.object({
  device: Joi.string().valid('android', 'ios', 'desktop').required(),
  operatingSystem: Joi.string().required(),
  origin: Joi.string().required(),
  themeSwitchCount: Joi.number().required(),
  createdAt: Joi.date().required(),
  token: Joi.string().required(),
});

// TODO: ver se separo depois em outros arquivos interfaces, schemas, etc
export interface IExtractionData extends Document {
  device: string;
  operatingSystem: string;
  origin: string;
  themeSwitchCount: number;
  token: string;
  createdAt: Date;
}

export default mongoose.model<IExtractionData>("ExtractionData", ExtractionDataSchema);