import { Module } from '@nestjs/common';
import { UsersResolver } from './resolvers/users/users.resolver';
import { UsersService } from './services/users/users.service';

@Module({
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
