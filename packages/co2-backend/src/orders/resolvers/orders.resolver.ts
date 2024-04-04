import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrdersService } from '../services/orders.service';
import Order from '../entities/order.entity';
import { CreateOrderInput, User } from '../../graphql';
import { BadRequestException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { CurrentUser } from '../../common/current-user-decorator';

@Resolver()
export class OrdersResolver {
  constructor(private readonly orderService: OrdersService) {}

  @Query(() => [Order])
  async orders(): Promise<Order[]> {
    return this.orderService.getAllOrders({
      order: [['totalPrice', 'DESC']],
    });
  }

  @Query(() => Order)
  async order(@Args('id') id: number): Promise<Order> {
    return this.orderService.getOrder(id);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Order)
  async createOrder(
    @CurrentUser() user: User,
    @Args('orderInput') orderInput: CreateOrderInput,
  ): Promise<Order | BadRequestException> {
    return this.orderService.createOrder({
      ...orderInput,
      fkUserId: Number(user.id),
    });
  }
}
