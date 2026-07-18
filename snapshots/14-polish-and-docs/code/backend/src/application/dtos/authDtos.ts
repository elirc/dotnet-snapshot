import type { UserRole } from '../../domain/user';

export type LoginRequest = {
  email: string;
  password: string;
};

export type CurrentUserDto = {
  id: string;
  email: string;
  displayName: string;
  role: UserRole;
};

export type LoginResponse = {
  token: string;
  user: CurrentUserDto;
};
