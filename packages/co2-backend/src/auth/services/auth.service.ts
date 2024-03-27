import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../../users/services/users.service';
import { UserLogin } from '../../graphql';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(userLogin: UserLogin): Promise<{ token: string; user: User }> {
    const savedUser = await this.userService.getUserByOptions({
      where: {
        email: userLogin.email,
      },
    });
    if (!savedUser) {
      throw new BadRequestException('Invalid credentials');
    }
    if (!(await bcrypt.compare(userLogin.password, savedUser.password))) {
      throw new BadRequestException('Invalid credentials');
    }
    await savedUser.save();
    delete savedUser.password;
    return {
      token: this.jwtService.sign({
        ...savedUser,
      }),
      user: savedUser,
    };
  }
}
