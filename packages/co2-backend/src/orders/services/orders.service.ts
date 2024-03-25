import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrderInput } from '../../graphql';
import Order from '../entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private readonly orderRepository: typeof Order,
  ) {}

  async getAllOrders() {
    return this.orderRepository.findAll();
  }

  async getOrder(id: number) {
    return this.orderRepository.findByPk(id);
  }

  async createOrder(orderInput: CreateOrderInput) {
    const { userId, treeId, quantity, totalPrice } = orderInput;
    return this.orderRepository.create({ userId, treeId, quantity, totalPrice });
  }
}
