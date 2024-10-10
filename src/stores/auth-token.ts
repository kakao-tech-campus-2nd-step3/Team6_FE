import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthTokenProps {
  authToken: string | null
  setAuthToken: (authToken: string) => void
  clearAuthToken: () => void
  isLoggedIn: () => boolean
}

export const useAuthTokenStore = create(
  persist<AuthTokenProps>(
    (set, get) => ({
      authToken: null,
      setAuthToken: (authToken) => {
        set({ authToken })
      },
      clearAuthToken: () => {
        set({ authToken: null })
      },
      isLoggedIn: () => !!get().authToken,
    }),
    {
      name: 'auth-token',
    }
  )
)
