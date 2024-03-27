import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Vehicle from '../entities/vehicle.entity';
import { CreateVehicleInput } from '../../graphql';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectModel(Vehicle)
    private readonly vehiclesRepository: typeof Vehicle,
  ) {}
  async getVehicles(): Promise<Vehicle[]> {
    return this.vehiclesRepository.findAll();
  }
  async getVehicle(id: number): Promise<Vehicle> {
    return this.vehiclesRepository.findByPk(id);
  }

  async createVehicle(vehicleInput: CreateVehicleInput): Promise<Vehicle> {
    const { year, make, model, mileage, imageURL, mttRatio } = vehicleInput;
    return this.vehiclesRepository.create({
      year,
      make,
      model,
      mileage,
      imageURL,
      mttRatio,
    });
  }
}
