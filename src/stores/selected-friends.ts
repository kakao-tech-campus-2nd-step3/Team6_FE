import { create } from 'zustand'

import { Friend } from '@/types'

interface ChangedFriendsProps {
  changedFriends: Set<number>
  setChangedFriends: (friend: Friend) => void
}

export const useChangedFriendsStore = create<ChangedFriendsProps>(
  (set, get) => ({
    changedFriends: new Set(),
    setChangedFriends: (friend) => {
      const updatedChangedFriends = new Set(get().changedFriends)

      if (updatedChangedFriends.has(friend.friendId)) {
        updatedChangedFriends.delete(friend.friendId)
      } else {
        updatedChangedFriends.add(friend.friendId)
      }

      set({ changedFriends: updatedChangedFriends })
    },
  })
)
