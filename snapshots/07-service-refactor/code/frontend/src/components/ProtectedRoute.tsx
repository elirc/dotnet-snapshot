import { Navigate, Outlet } from 'react-router-dom';
import { useSyncExternalStore } from 'react';
import { authStore } from '../app/authStore';

export function ProtectedRoute() {
  const session = useSyncExternalStore(authStore.subscribe, authStore.getSnapshot);
  if (!session.token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
