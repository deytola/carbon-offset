import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UsersService } from '../users/services/users.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthResolver } from './resolvers/auth.resolver';
import User from '../users/entities/user.entity';
import { JwtStrategy } from './strategies/passport-strategy';

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
  providers: [AuthService, UsersService, AuthResolver, JwtStrategy],
  exports: [JwtStrategy, JwtModule],
})
export class AuthModule {}
