import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrdersService } from '../services/orders.service';
import Order from '../entities/order.entity';
import { CreateOrderInput } from '../../graphql';
import sequelize from 'sequelize';
import {BadRequestException} from '@nestjs/common';
import Vehicle from '../../vehicles/entities/vehicle.entity';
import Make from '../../makes/entities/make.entity';
import ModelEntity from '../../models/entities/model.entity';

@Resolver()
export class OrdersResolver {
  constructor(private readonly orderService: OrdersService) {}

  @Query(() => [Order])
  async orders(): Promise<Order[]> {
    return this.orderService.getAllOrders({
      order: [['totalPrice', 'DESC']],
    });
  }

  @Query(() => [Order])
  async leaderboard(): Promise<Order[]> {
    return this.orderService.getOrdersLeaderboard({
      include: [
        {model: Vehicle, include: [{model: Make}, {model: ModelEntity}]}
      ],
      order: [['totalPrice', 'DESC']],
    });
  }

  @Query(() => Order)
  async order(@Args('id') id: number): Promise<Order> {
    return this.orderService.getOrder(id);
  }

  @Mutation(() => Order)
  async createOrder(
    @Args('orderInput') orderInput: CreateOrderInput,
  ): Promise<Order|BadRequestException> {
    return this.orderService.createOrder(orderInput);
  }
}
