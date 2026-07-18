import type { CurrentUserDto } from '@netaiops/shared/src/types';

type AuthState = {
  token?: string;
  user?: CurrentUserDto;
};

const key = 'netaiops.session';
let state: AuthState = JSON.parse(localStorage.getItem(key) ?? '{}');
const listeners = new Set<() => void>();

function emit() {
  localStorage.setItem(key, JSON.stringify(state));
  listeners.forEach((listener) => listener());
}

export const authStore = {
  getSnapshot: () => state,
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  setSession(next: AuthState) {
    state = next;
    emit();
  },
  clear() {
    state = {};
    localStorage.removeItem(key);
    listeners.forEach((listener) => listener());
  }
};
