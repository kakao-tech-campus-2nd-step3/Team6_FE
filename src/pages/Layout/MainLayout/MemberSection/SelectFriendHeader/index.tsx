import { BiUserCheck } from 'react-icons/bi'

import { Box, Text } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

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

  const { mutate: onClickAddFriends } = useMutation({
    mutationFn: () => addFriends({ friends: friendsId }),
    onSuccess: () => {
      setMemberType('FRIEND')
      queryClient.invalidateQueries({ queryKey: ['friends'] })
    },
  })

  return (
    <PageLayout.SideSection.SectionHeader
      Icon={BiUserCheck}
      title="친구 설정"
      Extentions={
        <Box
          _hover={{ color: 'black.800', cursor: 'pointer' }}
          onClick={() => onClickAddFriends()}
        >
          <Text fontSize="small" fontWeight="bold">
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
