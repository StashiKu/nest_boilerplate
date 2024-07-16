import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CustomConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { getTypeOrmModuleOptions } from './config/orm.config';
import { getBaseConfigModuleOptions } from './config/base.config';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    // CustomConfigModule,
    // ConfigModule.forRoot({ ...getBaseConfigModuleOptions() }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: () => ({
    //     ...getTypeOrmModuleOptions(),
    //   }),
    // }),
    // CacheModule.registerAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     ttl: configService.get('CACHE_TTL'),
    //     // store: redisStore,
    //     // host: 'localhost',
    //     // port: 6379,
    //   }),
    //   inject: [ConfigService],
    // }),
  AuthenticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
