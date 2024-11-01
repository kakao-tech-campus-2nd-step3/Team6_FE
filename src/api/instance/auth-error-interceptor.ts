import { AxiosError } from 'axios'

import { useAuthTokenStore } from '@/stores/auth-token'
import { useMyUserIdStore } from '@/stores/my-user-id'

export function authErrorInterceptor(error: AxiosError) {
  const { clearAuthToken } = useAuthTokenStore.getState()
  const { clearMyUserId } = useMyUserIdStore.getState()

  if (error.response) {
    const { status } = error.response

    if (status === 401) {
      clearAuthToken()
      clearMyUserId()
    }
  }

  return Promise.reject(error)
}
