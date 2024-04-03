import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import Vehicle from '../entities/vehicle.entity';
import { VehiclesService } from '../services/vehicles.service';
import { CreateVehicleInput, User } from '../../graphql';
import Order from '../../orders/entities/order.entity';
import sequelize from 'sequelize';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { CurrentUser } from '../../common/current-user-decorator';

@Resolver()
export class VehiclesResolver {
  constructor(private readonly vehiclesService: VehiclesService) {}
  @Query(() => [Vehicle])
  async vehicles(): Promise<Vehicle[]> {
    return await this.vehiclesService.getVehicles({
      include: [{ association: 'make' }, { association: 'model' }],
    });
  }

  @UseGuards(AuthGuard)
  @Query(() => [Vehicle])
  async myVehicles(@CurrentUser() user: User): Promise<Vehicle[]> {
    return await this.vehiclesService.getVehicles({
      where: {
        fkUserId: user.id,
      },
      include: [{ association: 'make' }, { association: 'model' }],
    });
  }
  @Mutation(() => [Vehicle])
  async vehiclesByUserId(
    @Args('fkUserId')
    fkUserId: number,
  ): Promise<Vehicle[]> {
    return await this.vehiclesService.getVehicles({
      where: {
        fkUserId,
      },
      include: [{ association: 'make' }, { association: 'model' }],
    });
  }

  @Query(() => [Vehicle])
  async leaderboard(): Promise<Vehicle[]> {
    return this.vehiclesService.getVehiclesLeaderboard({
      attributes: [
        'id',
        [sequelize.fn('SUM', sequelize.col('orders.quantity')), 'totalTrees'],
        [sequelize.fn('SUM', sequelize.col('orders.totalPrice')), 'totalPrice'],
      ],
      include: [
        {
          model: Order,
          as: 'orders',
          attributes: [],
          required: true,
        },
        { association: 'make' },
        { association: 'model' },
      ],
      group: ['Vehicle.id', 'make.id', 'model.id'],
      order: [[sequelize.literal('"totalTrees"'), 'DESC']],
    });
  }

  @Query(() => Vehicle)
  async vehicle(id: number): Promise<Vehicle> {
    return await this.vehiclesService.getVehicle(id);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Vehicle)
  async createVehicle(
    @CurrentUser() user: User,
    @Args('vehicleInput')
    vehicleInput: CreateVehicleInput & { fkUserId: number },
  ): Promise<Vehicle> {
    return this.vehiclesService.createVehicle({
      ...vehicleInput,
      fkUserId: Number(user.id),
    });
  }
}
