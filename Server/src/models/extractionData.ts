import mongoose, { Schema } from 'mongoose';
import { IExtractionData } from '../utils/interfaces/extractionDataInterface';
import { DeviceType } from '../utils/enums/deviceTypeEnum';

const ExtractionDataSchema = new Schema({
  device: {
    type: String,
    enum: DeviceType,
    required: true,
  },
  operatingSystem: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  themeSwitchCount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  token: { type: String, required: true },
});

export default mongoose.model<IExtractionData>(
  'ExtractionData',
  ExtractionDataSchema,
);
