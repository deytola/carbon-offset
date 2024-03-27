import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateMakeInput } from '../../graphql';
import { MakesService } from '../services/makes.service';
import Make from '../entities/make.entity';

@Resolver()
export class MakesResolver {
  constructor(private readonly makesService: MakesService) {}

  @Query(() => [Make])
  async makes(): Promise<Make[]> {
    return this.makesService.getMakes();
  }

  @Query(() => Make)
  async make(@Args('id') id: number): Promise<Make> {
    return this.makesService.getMake(id);
  }

  @Mutation(() => Make)
  async createMake(
    @Args('makeInput') makeInput: CreateMakeInput,
  ): Promise<Make> {
    return this.makesService.createMake(makeInput);
  }
}
