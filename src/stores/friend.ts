import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FriendProps {
  friendType: 'FRIEND' | 'ALL' | 'GROUP'
  setFriendType: (friendType: 'FRIEND' | 'ALL' | 'GROUP') => void
}

export const useFriendStore = create(
  persist<FriendProps>(
    (set) => ({
      friendType: 'FRIEND',
      setFriendType: (friendType) => {
        set({ friendType })
      },
    }),
    {
      name: 'friend',
    }
  )
)
