import { Center } from '@chakra-ui/react'

import { useMyFriends } from '@/api/services/friend/useFriends'

import { FriendList } from './FriendList'

export const FriendSection = () => {
  const { data: friends, status, error } = useMyFriends()

  if (status === 'pending') {
    return <Center paddingTop={2}>loading...</Center>
  }

  if (error) {
    return <Center paddingTop={2}>{error.message}</Center>
  }

  return <FriendList friends={friends} />
}
