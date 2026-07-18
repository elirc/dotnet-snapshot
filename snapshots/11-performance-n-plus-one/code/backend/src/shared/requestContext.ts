import type { AppUser, UserRole } from '../domain/user';

export type RequestContext = {
  user?: AppUser;
};

export function canRunIncidentInvestigation(role: UserRole) {
  return role === 'Admin' || role === 'Engineer';
}

export function canAdministerSettings(role: UserRole) {
  return role === 'Admin';
}
