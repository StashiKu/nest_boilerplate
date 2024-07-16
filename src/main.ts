import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ENVIRONMENTS_ENUM } from './config/orm.config';
import helmet from 'helmet';

import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    console.log(exception, '<<<<<<<<<<')
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // disable detailed error message for prod
      // disableErrorMessages: process.env.NODE_ENV === ENVIRONMENTS_ENUM.PROD,
      // whitelist: true,
      // forbidNonWhitelisted: true
    }),
  );

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: ['PUT'],
  });
  app.use(helmet());
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
}
bootstrap();
