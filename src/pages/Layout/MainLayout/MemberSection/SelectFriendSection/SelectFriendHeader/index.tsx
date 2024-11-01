import { BiCheckCircle, BiUserCheck } from 'react-icons/bi'

import { Box, Text, useDisclosure } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { addFriends } from '@/api/services/friend'
import { friendsQueries } from '@/api/services/friend/useFriends'
import { AlertModal } from '@/components/Modal/AlertModal'
import { PageLayout } from '@/components/PageLayout'
import { useFriendStore } from '@/stores/friends'
import { useMemberTypeStore } from '@/stores/member-type'
import { Friend } from '@/types'

interface SelectFreindHeaderProps {
  initialfriends?: Friend[]
}

export const SelectFreindHeader = ({
  initialfriends,
}: SelectFreindHeaderProps) => {
  const queryClient = useQueryClient()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const setMemberType = useMemberTypeStore((state) => state.setMemberType)
  const friendList = useFriendStore((state) => state.friendList())

  const { mutate } = useMutation({
    mutationFn: () => addFriends({ friends: convertFriendsToIds(friendList) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: friendsQueries.all() })
      onOpen()
    },
  })

  const onClickAddFriends = () => {
    if (isFriendListUpdated(initialfriends, friendList)) {
      setMemberType('FRIEND')
      return
    }

    mutate()
  }

  return (
    <div>
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
      <AlertModal
        isOpen={isOpen}
        onClose={() => {
          onClose()
          setMemberType('FRIEND')
        }}
        icon={<BiCheckCircle />}
        title="친구 설정이 완료되었습니다."
        description=""
      />
    </div>
  )
}

export const SelectFreindHeaderSkeleton = () => {
  return (
    <PageLayout.SideSection.SectionHeader
      Icon={BiUserCheck}
      title="친구 설정"
      Extentions={
        <Text fontSize="small" color="black.800" fontWeight="bold">
          설정 완료
        </Text>
      }
    />
  )
}

const convertFriendsToIds = (friendList: Friend[]) => {
  return friendList.map((friend) => ({
    id: friend.friendId,
  }))
}

const isFriendListUpdated = (
  initialfriends: Friend[] | undefined,
  friendList: Friend[]
) => {
  if (!initialfriends) return false

  return JSON.stringify(initialfriends) === JSON.stringify(friendList)
}
