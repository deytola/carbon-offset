import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import User from '../entities/user.entity';
import { UsersService } from '../services/users.service';
import { CreateUserInput } from '../../graphql';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Query(() => User)
  async user(@Args('id') id: number): Promise<User> {
    return this.usersService.getUser(id);
  }

  @Mutation(() => User)
  async createUser(
    @Args('userInput') userInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.createUser(userInput);
  }
}
