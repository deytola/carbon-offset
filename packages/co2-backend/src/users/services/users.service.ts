import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from '../entities/user.entity';
import { CreateUserInput } from '../../graphql';
import { FindOptions } from 'sequelize';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async getUser(id: number): Promise<User> {
    return this.userRepository.findByPk(id);
  }
  async getUserByOptions(options: FindOptions<User>): Promise<User> {
    return this.userRepository.findOne(options);
  }

  async createUser(userInput: CreateUserInput): Promise<User> {
    const { firstName, lastName, email, password } = userInput;
    const existingUser = await this.getUserByOptions({
      where: { email },
    });
    if (!existingUser) {
      const hashedPassword: string = await bcrypt.hash(password, 12);
      return await this.userRepository.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
    } else {
      throw new BadRequestException('User email already exists');
    }
  }
}
