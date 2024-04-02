import {BadRequestException, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Order from '../entities/order.entity';
import { CreateOrderInput } from '../../graphql';
import {FindOptions} from 'sequelize';
import Tree from '../../trees/entities/tree.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private readonly orderRepository: typeof Order,
    @InjectModel(Tree)
    private readonly treeRepository: typeof Tree,

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

  async createOrder(orderInput: CreateOrderInput): Promise<Order|BadRequestException> {
    let totalPrice: number;
    const { fkUserId, fkTreeId, fkVehicleId, quantity } =
      orderInput;
    const savedTree: Tree = await this.treeRepository.findByPk(Number(fkTreeId));
    if(savedTree) {
      totalPrice = savedTree.unitPrice * quantity;
    }else{
      return new BadRequestException('invalid tree id');
    }
    return this.orderRepository.create({
      fkUserId,
      fkTreeId,
      fkVehicleId,
      quantity,
      totalPrice,
    });
  }
}
