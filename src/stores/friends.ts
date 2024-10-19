import { create } from 'zustand'

import { Friend } from '@/types'

interface FriendsProps {
  friends: Friend[]
  setFriends: (friends: Friend[]) => void
  toggleIsFriend: (friendId: number) => void
  friendList: () => Friend[]
  recommendList: () => Friend[]
}

export const useFriendStore = create<FriendsProps>((set, get) => ({
  friends: [],
  setFriends: (friends) => {
    set({ friends })
  },
  toggleIsFriend: (friendId: number) => {
    const updatedFriends = get().friends.map((friend) =>
      friend.friendId === friendId
        ? { ...friend, isFriend: !friend.isFriend }
        : friend
    )

    set({ friends: updatedFriends })
  },
  friendList: () => get().friends.filter((friend) => friend.isFriend),
  recommendList: () => get().friends.filter((friend) => !friend.isFriend),
}))
