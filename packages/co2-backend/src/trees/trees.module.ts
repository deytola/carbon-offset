import { Module } from '@nestjs/common';
import { TreesResolver } from './resolvers/trees.resolver';
import { TreesService } from './services/trees.service';
import { SequelizeModule } from '@nestjs/sequelize';
import Tree from './entities/tree.entity';

@Module({
  imports: [SequelizeModule.forFeature([Tree])],
  providers: [TreesResolver, TreesService],
})
export class TreesModule {}
