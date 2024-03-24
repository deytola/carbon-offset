import { Module } from '@nestjs/common';
import { VehiclesResolver } from './resolvers/vehicles/vehicles.resolver';
import { VehiclesService } from './services/vehicles/vehicles.service';

@Module({
  controllers: [],
  providers: [VehiclesResolver, VehiclesService],
})
export class VehiclesModule {}
