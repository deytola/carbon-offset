import { Query, Resolver } from '@nestjs/graphql';
import Vehicle from '../entities/vehicle.entity';
import { VehiclesService } from '../services/vehicles.service';

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
}
