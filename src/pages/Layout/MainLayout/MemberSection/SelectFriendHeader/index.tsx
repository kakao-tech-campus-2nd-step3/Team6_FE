import { BiUserCheck } from 'react-icons/bi'

import { Box, Text } from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query'

import { addFriends } from '@/api/services/friend'
import { PageLayout } from '@/components/PageLayout'
import { useFriendStore } from '@/stores/friends'
import { useMemberTypeStore } from '@/stores/member-type'
import { Friend } from '@/types'

export const SelectFreindHeader = () => {
  const queryClient = useQueryClient()

  const setMemberType = useMemberTypeStore((state) => state.setMemberType)

  const friendList = useFriendStore((state) => state.friendList())
  const friendsId = convertFriendToId(friendList)

  const onClickAddFriends = () => {
    addFriends({ friends: friendsId })
    queryClient.invalidateQueries({ queryKey: ['friends'] })
  }

  return (
    <PageLayout.SideSection.SectionHeader
      Icon={BiUserCheck}
      title="친구 설정"
      Extentions={
        <Box
          _hover={{ color: 'black.800', cursor: 'pointer' }}
          onClick={() => setMemberType('FRIEND')}
        >
          <Text
            fontSize="small"
            fontWeight="bold"
            onClick={() => onClickAddFriends()}
          >
            설정 완료
          </Text>
        </Box>
      }
    />
  )
}

const convertFriendToId = (friendList: Friend[]) => {
  return friendList.map((friend) => ({
    id: friend.friendId,
  }))
}
