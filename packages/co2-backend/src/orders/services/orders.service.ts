import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Order from '../entities/order.entity';
import { CreateOrderInput } from '../../graphql';
import {FindOptions} from 'sequelize';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private readonly orderRepository: typeof Order,
  ) {}

  async getAllOrders(options: FindOptions<Order>) {
    return this.orderRepository.findAll(options);
  }

  async getOrdersByOptions(options: FindOptions<Order>): Promise<Order[]> {
    return this.orderRepository.findAll(options);
  }

  async getOrder(id: number) {
    return this.orderRepository.findByPk(id);
  }

  async createOrder(orderInput: CreateOrderInput) {
    const { fkUserId, fkTreeId, fkVehicleId, quantity, totalPrice } =
      orderInput;
    return this.orderRepository.create({
      fkUserId,
      fkTreeId,
      fkVehicleId,
      quantity,
      totalPrice,
    });
  }
}
