import Joi from 'joi';

export const DomainTokenValidator = Joi.object({
  domain: Joi.string().required(),
  tokens: Joi.array().items(Joi.string()).required(),
  createdAt: Joi.date().required(),
}).options({
  stripUnknown: true, // Remove unknown fields
});
