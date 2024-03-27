import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrdersService } from '../services/orders.service';
import Order from '../entities/order.entity';
import { CreateOrderInput } from '../../graphql';

@Resolver()
export class OrdersResolver {
  constructor(private readonly orderService: OrdersService) {}

  @Query(() => [Order])
  async orders(): Promise<Order[]> {
    return this.orderService.getAllOrders();
  }

  @Query(() => Order)
  async order(@Args('id') id: number): Promise<Order> {
    return this.orderService.getOrder(id);
  }

  @Mutation(() => Order)
  async createOrder(
    @Args('orderInput') orderInput: CreateOrderInput,
  ): Promise<Order> {
    return this.orderService.createOrder(orderInput);
  }
}
