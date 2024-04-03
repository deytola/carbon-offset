import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Vehicle from '../entities/vehicle.entity';
import { CreateVehicleInput } from '../../graphql';
import {FindOptions} from "sequelize";
import Order from "../../orders/entities/order.entity";

@Injectable()
export class VehiclesService {
  constructor(
    @InjectModel(Vehicle)
    private readonly vehiclesRepository: typeof Vehicle,
  ) {}
  async getVehicles(options: FindOptions): Promise<Vehicle[]> {
    return this.vehiclesRepository.findAll(options);
  }

  async getVehiclesLeaderboard(options: FindOptions<Order>) {
    const vehicles = await this.vehiclesRepository.findAll(options);
    return vehicles.map((model)=>model.get())
  }
  async getVehicle(id: number): Promise<Vehicle> {
    return this.vehiclesRepository.findByPk(id);
  }

  async createVehicle(
    vehicleInput: CreateVehicleInput & { fkUserId: number },
  ): Promise<Vehicle> {
    const { fkMakeId, fkModelId, fkUserId, mileage, imageURL } = vehicleInput;
    return this.vehiclesRepository.create({
      fkMakeId,
      fkModelId,
      fkUserId,
      mileage,
      imageURL,
    });
  }
}
