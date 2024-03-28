import { Module } from '@nestjs/common';
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
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { MakesModule } from './makes/makes.module';
import { ModelsModule } from './models/models.module';
dotenv.config();

const sequelizeOptions: SequelizeModuleOptions = {
  dialect: <Dialect>process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  models: [join(__dirname, './', '**', '*.entity.{ts,js}')],
  // autoLoadModels: true,
  // synchronize: true, //false in prod
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
      context: ({ req, res }) => ({ req, res }),
    }),
    SequelizeModule.forRoot({
      ...sequelizeOptions,
    }),
    VehiclesModule,
    TreesModule,
    UsersModule,
    OrdersModule,
    AuthModule,
    MakesModule,
    ModelsModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
