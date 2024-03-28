import User from '../users/entities/user.entity';
export class SignInResponse {
  token: string;
  user: Partial<User>;
}
