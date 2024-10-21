import { queryOptions, useSuspenseQueries } from '@tanstack/react-query'

import { getFriends } from './index'

export const friendsQueries = {
  all: () => ['friends'],
  friends: () =>
    queryOptions({
      queryKey: [...friendsQueries.all()],
      queryFn: () => getFriends(),
    }),
  myFriends: () =>
    queryOptions({
      queryKey: [...friendsQueries.all(), 'my'],
      queryFn: () => getFriends(),
      select: (data) => {
        return data.friends.filter((friend) => friend.isFriend)
      },
    }),
}

export const useFriendsAndMyFriends = () => {
  const result = useSuspenseQueries({
    queries: [friendsQueries.friends(), friendsQueries.myFriends()],
  })

  const { friends } = result[0].data
  const myFriends = result[1].data

  return { friends, myFriends }
}
