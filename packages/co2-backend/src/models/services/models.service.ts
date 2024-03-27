import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import ModelEntity from '../entities/model.entity';
import { CreateModelInput } from '../../graphql';

@Injectable()
export class ModelsService {
  constructor(
    @InjectModel(ModelEntity)
    private readonly modelsRepository: typeof ModelEntity,
  ) {}
  async getModels(): Promise<ModelEntity[]> {
    return this.modelsRepository.findAll();
  }
  async getModel(id: number): Promise<ModelEntity> {
    return this.modelsRepository.findByPk(id);
  }

  async createModel(modelInput: CreateModelInput): Promise<ModelEntity> {
    const { modelName, year, mttRatio, fkMakeId } = modelInput;
    return this.modelsRepository.create({
      modelName,
      year,
      mttRatio,
      fkMakeId,
    });
  }
}
