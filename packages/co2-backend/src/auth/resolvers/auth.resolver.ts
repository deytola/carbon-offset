import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from '../services/auth.service';
import { SignInResponse } from '../auth-types';
import { SignInInput } from '../../graphql';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => SignInResponse)
  async signIn(
    @Args('signInInput') signInInput: SignInInput,
  ): Promise<SignInResponse> {
    return this.authService.signIn(signInInput);
  }
}
