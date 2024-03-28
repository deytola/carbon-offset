import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Order from '../entities/order.entity';
import { CreateOrderInput } from '../../graphql';

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
