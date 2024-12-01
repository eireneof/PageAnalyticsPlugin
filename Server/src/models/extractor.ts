import { Schema, model } from 'mongoose'
import Joi from 'joi'

// Mongoose Schema
const ExtractedDataSchema = new Schema({
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
  }
});

// Joi Validator
export const ExtractedDataValidator = Joi.object({
  device: Joi.string().valid('android', 'ios', 'desktop').required(),
  operatingSystem: Joi.string().required(),
  origin: Joi.string().required(),
  themeSwitchCount: Joi.number().required(),
  createdAt: Joi.date().required()
});

// Create and export the model
export const ExtractedData = model('ExtractedData', ExtractedDataSchema);