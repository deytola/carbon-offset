import { Resolver } from '@nestjs/graphql';
import { TreesService } from '../services/trees.service';
import Tree from '../entities/trees.entities';
import { Query, Args, Mutation } from '@nestjs/graphql';
import { CreateTreeInput } from '../../graphql';

@Resolver()
export class TreesResolver {
  constructor(private readonly treesService: TreesService) {}

  @Query(() => [Tree])
  async trees() {
    return this.treesService.getAllTrees();
  }
  @Query(() => Tree)
  async tree(id: number) {
    return this.treesService.getTree(id);
  }

  @Mutation(() => Tree)
  async createTree(
    @Args('treeInput') treeInput: CreateTreeInput,
  ): Promise<Tree> {
    return this.treesService.createTree(treeInput);
  }
}
