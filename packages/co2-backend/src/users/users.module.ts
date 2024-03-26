import { Module } from '@nestjs/common';
import { UsersResolver } from './resolvers/users.resolver';
import { UsersService } from './services/users.service';
import User from './entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
