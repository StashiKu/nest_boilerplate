// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// import { configValidationSchema } from './config.schema';
// import configuration from './configuration';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       envFilePath: `${process.cwd()}/env/.env.${process.env.NODE_ENV}`,
//       validationSchema: configValidationSchema,
//       validationOptions: {
//         allowUnknown: false,
//         abortEarly: true,
//       },
//       load: [configuration],
//       isGlobal: true,
//       cache: true,
//     }),
//   ],
//   providers: [],
//   exports: [],
// })
// export class CustomConfigModule {}
