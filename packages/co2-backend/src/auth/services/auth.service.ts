import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../../users/services/users.service';
import { SignInInput } from '../../graphql';
import { SignInResponse } from '../auth-types';
import User from '../../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async signIn(signInInput: SignInInput): Promise<SignInResponse> {
    const savedUser = await this.userService.getUserByOptions({
      where: {
        email: signInInput.email,
      },
    });
    if (!savedUser) {
      throw new BadRequestException('Invalid login credentials');
    }
    if (!(await bcrypt.compare(signInInput.password, savedUser.password))) {
      throw new BadRequestException('Invalid login credentials');
    }
    const userWithoutPassword: Partial<User> = Object.assign({
      ...savedUser.get(),
      password: undefined,
    });
    return {
      token: this.jwtService.sign({
        user: userWithoutPassword,
      }),
      user: userWithoutPassword,
    };
  }
}
