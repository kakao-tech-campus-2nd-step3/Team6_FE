import { AxiosError } from 'axios'

import { useAuthTokenStore } from '@/stores/auth-token'

export function authErrorInterceptor(error: AxiosError) {
  const { clearAuthToken } = useAuthTokenStore.getState()

  if (error.response) {
    const { status } = error.response

    if (status === 401) {
      clearAuthToken()
    }
  }

  return Promise.reject(error)
}
