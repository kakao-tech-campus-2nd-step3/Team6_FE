import { create } from 'zustand'

import { Friend } from '@/types'

interface ChangedFriendsProps {
  changedFriends: Map<number, boolean>
  setChangedFriends: (friend: Friend) => void
}

export const useChangedFriendsStore = create<ChangedFriendsProps>(
  (set, get) => ({
    changedFriends: new Map(),
    setChangedFriends: (friend) => {
      const updatedChangedFriends = new Map(get().changedFriends)

      if (updatedChangedFriends.has(friend.friendId)) {
        updatedChangedFriends.delete(friend.friendId)
      } else {
        updatedChangedFriends.set(friend.friendId, !friend.isFriend)
      }

      set({ changedFriends: updatedChangedFriends })
    },
  })
)
