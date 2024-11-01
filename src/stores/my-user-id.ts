import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface MyUserIdProps {
  myUserId: number | null
  setMyUserId: (myUserId: number) => void
  clearMyUserId: () => void
}

export const useMyUserIdStore = create(
  persist<MyUserIdProps>(
    (set) => ({
      myUserId: null,
      setMyUserId: (myUserId) => {
        set({ myUserId })
      },
      clearMyUserId: () => {
        set({ myUserId: null })
      },
    }),
    {
      name: 'my-user-id',
    }
  )
)
