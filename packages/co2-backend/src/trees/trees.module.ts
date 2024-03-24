import { Module } from '@nestjs/common';
import { TreesResolver } from './resolvers/trees/trees.resolver';
import { TreesService } from './services/trees/trees.service';

@Module({
  providers: [TreesResolver, TreesService],
})
export class TreesModule {}
