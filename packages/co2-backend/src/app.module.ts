import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { VehiclesModule } from './vehicles/vehicles.module';
import { TreesModule } from './trees/trees.module';
import { UsersModule } from './users/users.module';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize/types';
dotenv.config();

const sequelizeOptions: SequelizeModuleOptions = {
  dialect: <Dialect>process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  models: [join(__dirname, './', '**', '*.model.{ts,js}')],
  autoLoadModels: true,
  synchronize: true, //false in prod
};
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    SequelizeModule.forRoot({
      ...sequelizeOptions,
    }),
    VehiclesModule,
    TreesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
