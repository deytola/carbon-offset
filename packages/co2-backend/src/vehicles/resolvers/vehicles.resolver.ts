import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import Vehicle from '../entities/vehicle.entity';
import { VehiclesService } from '../services/vehicles.service';
import { CreateVehicleInput } from '../../graphql';
import Order from "../../orders/entities/order.entity";
import Make from "../../makes/entities/make.entity";
import ModelEntity from "../../models/entities/model.entity";
import sequelize from "sequelize";

@Resolver()
export class VehiclesResolver {
  constructor(private readonly vehiclesService: VehiclesService) {}
  @Query(() => [Vehicle])
  async vehicles(): Promise<Vehicle[]> {
    return await this.vehiclesService.getVehicles({
      include: [{association: 'make'}, {association: 'model'}]
    });
  }

  @Query(() => [Vehicle])
  async leaderboard(): Promise<Vehicle[]> {
    return this.vehiclesService.getVehiclesLeaderboard({
      attributes: [
        'id',
        [sequelize.fn('SUM', sequelize.col('orders.quantity')), 'totalTrees'],
        [sequelize.fn('SUM', sequelize.col('orders.totalPrice')), 'totalPrice']
      ],
      include: [{
        model: Order,
        as: 'orders',
        attributes: [],
        required: true
      }, {association: 'make'}, {association: 'model'},
      ],
      group: ['Vehicle.id', 'make.id', 'model.id'],
      order: [[sequelize.literal('"totalTrees"'), 'DESC']],
    });
  }

  @Query(() => Vehicle)
  async vehicle(id: number): Promise<Vehicle> {
    return await this.vehiclesService.getVehicle(id);
  }

  @Mutation(() => Vehicle)
  async createVehicle(
    @Args('vehicleInput') vehicleInput: CreateVehicleInput,
  ): Promise<Vehicle> {
    return this.vehiclesService.createVehicle(vehicleInput);
  }
}
