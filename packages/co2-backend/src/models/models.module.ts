import { Module } from '@nestjs/common';
import { ModelsService } from './services/models.service';
import { ModelsResolver } from './resolvers/models.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import ModelEntity from './entities/model.entity';

@Module({
  imports: [SequelizeModule.forFeature([ModelEntity])],
  providers: [ModelsService, ModelsResolver],
})
export class ModelsModule {}
