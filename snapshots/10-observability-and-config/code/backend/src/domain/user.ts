export type UserRole = 'Admin' | 'Engineer' | 'SupportAnalyst' | 'Viewer';

export type AppUser = {
  id: string;
  email: string;
  displayName: string;
  role: UserRole;
  passwordHash: string;
  isActive: boolean;
};
