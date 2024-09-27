import { Divider, Flex } from '@chakra-ui/react'

import { FriendHeader } from './FriendHeader'
import { FriendList } from './FriendList'

export const FriendSection = () => {
  return (
    <Flex flexDirection="column" gap={1}>
      <FriendHeader />
      <Divider />
      <FriendList friends={mockFriendList} />
    </Flex>
  )
}

const mockFriendList = [
  {
    friendId: 1,
    name: '김아진',
    imageUrl: '',
    isFriend: true,
  },
  {
    friendId: 2,
    name: '안희정',
    imageUrl: '',
    isFriend: true,
  },
  {
    friendId: 3,
    name: '정솔빈',
    imageUrl: '',
    isFriend: true,
  },
]
