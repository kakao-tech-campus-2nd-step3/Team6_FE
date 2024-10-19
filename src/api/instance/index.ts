import { QueryClient } from '@tanstack/react-query'
import axios, { AxiosRequestConfig } from 'axios'

import { useAuthTokenStore } from '@/stores/auth-token'

const BASE_URL = import.meta.env.VITE_BASE_URL

const initInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create({
    ...config,
    headers: {
      Accept: 'application/json',
      ...config.headers,
    },
  })

  return instance
}

export const fetchInstance = initInstance({
  baseURL: BASE_URL,
})

export const authorizationInstance = initInstance({
  baseURL: BASE_URL,
  withCredentials: true,
})

authorizationInstance.interceptors.request.use(
  (request) => {
    const { authToken } = useAuthTokenStore.getState()

    if (authToken) {
      request.headers.Authorization = `Bearer ${authToken}`
    }

    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000 * 60,
      throwOnError: true,
    },
    mutations: {
      throwOnError: true,
    },
  },
})
