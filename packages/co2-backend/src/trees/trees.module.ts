import { Module } from '@nestjs/common';
import { TreesResolver } from './resolvers/trees.resolver';
import { TreesService } from './services/trees.service';
import { SequelizeModule } from '@nestjs/sequelize';
import Tree from './entities/trees.entities';

@Module({
  imports: [SequelizeModule.forFeature([Tree])],
  providers: [TreesResolver, TreesService],
})
export class TreesModule {}
