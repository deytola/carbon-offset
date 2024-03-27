import { Module } from '@nestjs/common';
import { MakesService } from './services/makes.service';
import { MakesResolver } from './resolvers/makes.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import Make from './entities/make.entity';

@Module({
  imports: [SequelizeModule.forFeature([Make])],
  providers: [MakesService, MakesResolver],
})
export class MakesModule {}
