import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import Vehicle from '../entities/vehicle.entity';
import { VehiclesService } from '../services/vehicles.service';
import { CreateVehicleInput } from '../../graphql';

@Resolver()
export class VehiclesResolver {
  constructor(private readonly vehiclesService: VehiclesService) {}
  @Query(() => [Vehicle])
  async vehicles(): Promise<Vehicle[]> {
    return await this.vehiclesService.getVehicles();
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
