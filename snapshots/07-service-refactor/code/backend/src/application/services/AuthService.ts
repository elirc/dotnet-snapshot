import type { LoginRequest, LoginResponse } from '../dtos/authDtos';
import type { AppUser } from '../../domain/user';
import { AppError } from '../../shared/AppError';

export interface PasswordHasher {
  verify(password: string, hash: string): Promise<boolean>;
}

export interface JwtTokenFactory {
  createToken(user: AppUser): string;
  verifyToken(token: string): AppUser | undefined;
}

export class AuthService {
  constructor(
    private readonly users: AppUser[],
    private readonly passwordHasher: PasswordHasher,
    private readonly tokenFactory: JwtTokenFactory
  ) {}

  async login(request: LoginRequest): Promise<LoginResponse> {
    const user = this.users.find((candidate) => candidate.email.toLowerCase() === request.email.toLowerCase());
    if (!user || !user.isActive || !(await this.passwordHasher.verify(request.password, user.passwordHash))) {
      throw new AppError(401, 'Invalid email or password', 'invalid_credentials');
    }
    return {
      token: this.tokenFactory.createToken(user),
      user: { id: user.id, email: user.email, displayName: user.displayName, role: user.role }
    };
  }
}
