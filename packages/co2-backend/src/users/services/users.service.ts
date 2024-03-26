import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from '../entities/user.entity';
import { CreateUserInput } from '../../graphql';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userRepository: typeof User,
  ) {}

  async getUser(id: number): Promise<User> {
    return this.userRepository.findByPk(id);
  }

  async createUser(userInput: CreateUserInput): Promise<User> {
    const { firstName, lastName, email, password } = userInput;
    return this.userRepository.create({ firstName, lastName, email, password });
  }
}
