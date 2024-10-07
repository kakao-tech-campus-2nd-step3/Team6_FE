import { QueryClient } from '@tanstack/react-query'
import axios, { AxiosRequestConfig } from 'axios'

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

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000 * 60,
    },
  },
})
