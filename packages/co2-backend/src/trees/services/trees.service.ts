import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Tree from '../entities/trees.entities';
import { CreateTreeInput } from '../../graphql';
@Injectable()
export class TreesService {
  constructor(
    @InjectModel(Tree)
    private readonly treeRepository: typeof Tree,
  ) {}

  async getAllTrees() {
    return this.treeRepository.findAll();
  }

  async getTree(id: number) {
    return this.treeRepository.findByPk(id);
  }

  async createTree(treeInput: CreateTreeInput) {
    const { species, age } = treeInput;
    return this.treeRepository.create({ species, age });
  }
}
