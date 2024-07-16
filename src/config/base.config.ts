import { ConfigModuleOptions } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
// import configuration from './configuration';

export const getBaseConfigModuleOptions = (): ConfigModuleOptions => {
  const configOptions: ConfigModuleOptions = {
    envFilePath: `${process.cwd()}/env/.env.${process.env.NODE_ENV}`,
    validationSchema: configValidationSchema,
    validationOptions: {
      allowUnknown: true,
      abortEarly: true,
    },
    // load: [configuration],
    isGlobal: true,
    cache: true,
  };

  return configOptions;
};
