import { Navigate, Outlet } from 'react-router-dom'

import { useAuthTokenStore } from '@/stores/auth-token'

export const ProtectedRoute = () => {
  const isLoggedIn = useAuthTokenStore((state) => state.isLoggedIn())

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />
}
