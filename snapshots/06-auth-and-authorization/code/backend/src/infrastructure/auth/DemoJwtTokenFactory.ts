import type { JwtTokenFactory } from '../../application/services/AuthService';
import type { AppUser } from '../../domain/user';

export class DemoJwtTokenFactory implements JwtTokenFactory {
  constructor(private readonly users: AppUser[]) {}

  createToken(user: AppUser) {
    return Buffer.from(JSON.stringify({ sub: user.id, role: user.role, exp: Date.now() + 1000 * 60 * 60 })).toString('base64url');
  }

  verifyToken(token: string) {
    try {
      const payload = JSON.parse(Buffer.from(token, 'base64url').toString('utf8'));
      return this.users.find((user) => user.id === payload.sub && user.isActive);
    } catch {
      return undefined;
    }
  }
}
