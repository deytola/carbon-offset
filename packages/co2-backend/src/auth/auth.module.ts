import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UsersService } from '../users/services/users.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SequelizeModule } from '@nestjs/sequelize';
import User from '../users/entities/user.entity';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: `${process.env.JWT_SECRET}`,
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule,
    SequelizeModule.forFeature([User]),
  ],
  providers: [AuthService, UsersService],
})
export class AuthModule {}
