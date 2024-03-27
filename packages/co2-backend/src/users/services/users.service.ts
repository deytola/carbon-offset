import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from '../entities/user.entity';
import { CreateUserInput } from '../../graphql';
import { NonNullFindOptions } from '@sequelize/core';
import { FindOptions } from 'sequelize';
import { JwtService } from '@nestjs/jwt';
import * as O from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/function';

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

  async createUser(
    userInput: CreateUserInput,
  ): Promise<{ token: string; user: Partial<User> }> {
    const { firstName, lastName, email, password } = userInput;
    const existingUser = await this.getUserByOptions({
      where: { email },
    });
    if (!existingUser) {
      const savedUser = await this.userRepository.create({
        firstName,
        lastName,
        email,
        password,
      });
      // const userWithoutPassword: O.Option<User> = pipe(
      //   savedUser,
      //   (user) => {
      //     delete user.password;
      //     return user;
      //   },
      //   O.getOrElse(() => savedUser),
      // );
      return {
        token: this.jwtService.sign({
          ...savedUser,
        }),
        user: savedUser,
      };
    } else {
      throw new BadRequestException('User email already exists');
    }
  }
}
