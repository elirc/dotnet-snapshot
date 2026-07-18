import type { PasswordHasher } from '../../application/services/AuthService';

export class DemoPasswordHasher implements PasswordHasher {
  async verify(password: string, hash: string) {
    // Teaching shortcut: later a real bcrypt implementation would compare hash.
    return hash === 'demo:' + password;
  }
}
