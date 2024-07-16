import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';

export enum ENVIRONMENTS_ENUM {
  DEV = 'development',
  PROD = 'production',
  UAT = 'uat',
  TEST = 'test',
}

export const getTypeOrmModuleOptions = (): TypeOrmModuleOptions => {
  const dbOptions: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    synchronize: process.env.NODE_ENV === ENVIRONMENTS_ENUM.DEV,
    autoLoadEntities: true,
    entities: [join(__dirname + '../**/*.entity{.ts,.js}')],
  };

  return dbOptions;
};

export const getDataSourceOptions = (): DataSourceOptions => {
  const options: DataSourceOptions = {
    ...getTypeOrmModuleOptions(),
  } as DataSourceOptions;

  Object.assign(options, {
    migrationsTableName: '__migrations',
    migrations: ['./src/migrations/*.ts'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  } as Partial<DataSourceOptions>);

  return options;
};

export default new DataSource(getDataSourceOptions());
