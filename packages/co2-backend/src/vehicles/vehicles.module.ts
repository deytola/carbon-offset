import { Module } from '@nestjs/common';
import { VehiclesResolver } from './resolvers/vehicles.resolver';
import { VehiclesService } from './services/vehicles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import Vehicle from './entities/vehicle.entity';

@Module({
  imports: [SequelizeModule.forFeature([Vehicle])],
  controllers: [],
  providers: [VehiclesResolver, VehiclesService],
})
export class VehiclesModule {}
