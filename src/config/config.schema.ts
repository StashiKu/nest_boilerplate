import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'uat')
    .default('development'),
  PORT: Joi.number().default(3000),
  // need option 'allowUnknown' set to true
  // to ignore system env variables
})
// .options({ allowUnknown: true });
