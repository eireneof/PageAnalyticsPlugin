import { Document } from 'mongoose';
import { DeviceType } from '../enums/deviceTypeEnum';

export interface IExtractionData extends Document {
  device: DeviceType;
  operatingSystem: string;
  origin: string;
  themeSwitchCount: number;
  token: string;
  createdAt: Date;
}
