import { Resolver } from '@nestjs/graphql';
import { TreesService } from '../../services/trees/trees.service';
import Tree from '../../models/trees.model';
import { Query } from '@nestjs/graphql';

@Resolver()
export class TreesResolver {
  constructor(private readonly treesService: TreesService) {}

  @Query(() => [Tree])
  async trees() {
    // return this.treesService.getAllTrees();
    return [
      {
        id: 1,
        species: 'hello',
        age: 1,
      },
      {
        id: 2,
        species: 'world',
        age: 2,
      },
    ];
  }

  // async getTree(id: string) {
  //   return this.treesService.getTree(id);
  // }
}
