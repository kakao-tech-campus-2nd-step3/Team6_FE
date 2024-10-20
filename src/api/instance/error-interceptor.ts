import { AxiosError } from 'axios'

import { API_ERROR_MESSAGES } from '@/constants/error-message'

export function errorInterceptor(error: AxiosError) {
  if (error.response) {
    const { status } = error.response

    if (status === 404) {
      throw new Error(API_ERROR_MESSAGES.NOT_FOUND_ERROR)
    }

    if (status === 500) {
      throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
    }
  }

  return Promise.reject(error)
}
