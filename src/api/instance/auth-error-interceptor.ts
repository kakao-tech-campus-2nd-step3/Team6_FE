import { AxiosError } from 'axios'

import { API_ERROR_MESSAGES } from '@/constants/error-message'

export function authErrorInterceptor(error: AxiosError) {
  if (error.response) {
    const { status } = error.response

    if (status === 401) {
      throw new Error(API_ERROR_MESSAGES.AUTH_ERROR)
    }

    if (status === 403) {
      throw new Error(API_ERROR_MESSAGES.FORBIDDEN_ERROR)
    }
  }

  return Promise.reject(error)
}
