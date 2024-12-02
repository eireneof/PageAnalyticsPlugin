import Joi from 'joi';
import { DeviceType } from '../enums/deviceTypeEnum';

export const ExtractionDataValidator = Joi.object({
  device: Joi.string()
    .valid(...Object.values(DeviceType))
    .required(),
  operatingSystem: Joi.string().required(),
  origin: Joi.string().required(),
  themeSwitchCount: Joi.number().required(),
  createdAt: Joi.date().required(),
  token: Joi.string().required(),
});
