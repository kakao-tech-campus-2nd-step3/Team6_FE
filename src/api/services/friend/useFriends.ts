import { useQuery } from '@tanstack/react-query'

import { getFriends } from './index'

export const useFriends = () => {
  return useQuery({
    queryKey: ['friends', 'all'],
    queryFn: () => getFriends(),
  })
}

export const useMyFriends = () => {
  return useQuery({
    queryKey: ['friends', 'my'],
    queryFn: () => getFriends(),
    select: (data) => {
      return data.friends.filter((friend) => friend.isFriend)
    },
  })
}
