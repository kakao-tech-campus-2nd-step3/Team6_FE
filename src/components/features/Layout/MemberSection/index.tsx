import { Box, Divider, Flex } from '@chakra-ui/react'

import { useMemberTypeStore } from '@/stores/member-type'

import { FriendList } from './FriendList'
import { MemberHeader } from './MemberHeader'
import { MemberList } from './MemberList'

export const MemberSection = () => {
  const memberType = useMemberTypeStore((state) => state.memberType)

  return (
    <Box background="white" width="200px" height="full" color="text">
      <Flex flexDirection="column" gap={1}>
        <MemberHeader />
        <Divider />
        {memberType === 'FRIEND' && <FriendList friends={mockMembersData} />}
        {memberType === 'ALL' && <MemberList friends={mockMembersData} />}
      </Flex>
    </Box>
  )
}

const mockMembersData = [
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
