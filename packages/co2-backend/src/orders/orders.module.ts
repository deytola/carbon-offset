import { Module } from '@nestjs/common';
import { OrdersService } from './services/orders.service';
import { OrdersResolver } from './resolvers/orders.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import Order from './entities/order.entity';
import Tree from '../trees/entities/tree.entity';

@Module({
  imports: [SequelizeModule.forFeature([Order, Tree])],
  providers: [OrdersService, OrdersResolver],
})
export class OrdersModule {}
