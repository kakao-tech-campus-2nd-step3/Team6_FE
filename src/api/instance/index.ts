import { QueryClient } from '@tanstack/react-query'
import axios, { AxiosRequestConfig } from 'axios'

import { useAuthTokenStore } from '@/stores/auth-token'

import { authErrorInterceptor } from './auth-error-interceptor'

const BASE_URL = import.meta.env.VITE_BASE_URL

const initInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    ...config,
    headers: {
      Accept: 'application/json',
      ...config.headers,
    },
  })

  return instance
}

export const fetchInstance = initInstance({})

export const authorizationInstance = initInstance({})

authorizationInstance.interceptors.request.use(
  (request) => {
    const { authToken } = useAuthTokenStore.getState()

    if (authToken) {
      request.headers.Authorization = `Bearer ${authToken}`
    }

    return request
  },
  (error) => error
)

authorizationInstance.interceptors.response.use(
  (response) => response,
  authErrorInterceptor
)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000 * 60,
      throwOnError: true,
    },
  },
})
