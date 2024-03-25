import { Module } from '@nestjs/common';
import { VehiclesResolver } from './resolvers/vehicles.resolver';
import { VehiclesService } from './services/vehicles.service';

@Module({
  controllers: [],
  providers: [VehiclesResolver, VehiclesService],
})
export class VehiclesModule {}
