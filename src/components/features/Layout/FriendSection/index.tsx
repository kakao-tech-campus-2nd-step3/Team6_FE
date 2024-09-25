import { Box, Divider, Flex } from '@chakra-ui/react'

import { FriendHeader } from './FriendHero'
import { MyFriendList } from './MyFriendList'

export const FriendSection = () => {
  return (
    <Box background="white" width="200px" height="full" color="text">
      <Flex flexDirection="column" gap={1}>
        <FriendHeader />
        <Divider />
        <MyFriendList friends={mockFriendsData} />
      </Flex>
    </Box>
  )
}

const mockFriendsData = [
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
