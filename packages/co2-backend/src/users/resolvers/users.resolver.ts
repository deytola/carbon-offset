import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
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
  ): Promise<{ token: string; user: Partial<User> }> {
    const hashedPassword: string = await bcrypt.hash(userInput.password, 12);
    return this.usersService.createUser(
      Object.assign(userInput, { password: hashedPassword }),
    );
  }
}
