import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Make from '../entities/make.entity';
import { CreateMakeInput } from '../../graphql';

@Injectable()
export class MakesService {
  constructor(
    @InjectModel(Make)
    private readonly makesRepository: typeof Make,
  ) {}

  async getMakes(): Promise<Make[]> {
    return this.makesRepository.findAll();
  }

  async getMake(id: number): Promise<Make> {
    return this.makesRepository.findByPk(id);
  }

  async createMake(makeInput: CreateMakeInput): Promise<Make> {
    const { name, originCountry } = makeInput;
    return this.makesRepository.create({ name, originCountry });
  }
}
