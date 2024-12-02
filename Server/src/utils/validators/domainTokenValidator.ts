import Joi from 'joi';

export const DomainTokenValidator = Joi.object({
  domain: Joi.string().required(),
  token: Joi.array(),
  createdAt: Joi.date().required(),
});
