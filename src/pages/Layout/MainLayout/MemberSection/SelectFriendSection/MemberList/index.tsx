import { BiCircle, BiSolidCheckCircle } from 'react-icons/bi'

import { Box, Flex } from '@chakra-ui/react'

import { AvatarLabelWithNavigate } from '@/components/AvatarLabel'
import { useFriendStore } from '@/stores/friends'
import { Friend } from '@/types'

interface MemberListProps {
  members: Friend[]
  isFriend: boolean
}

export const MemberList = ({ members, isFriend }: MemberListProps) => {
  const toggleIsFriend = useFriendStore((state) => state.toggleIsFriend)

  return (
    <Flex flexDirection="column" width="full" maxHeight="30rem">
      {members.map((member) => (
        <Flex
          key={member.friendId}
          alignItems="center"
          justifyContent="space-between"
          paddingY={1.5}
        >
          <AvatarLabelWithNavigate
            isNavigate={false}
            avatarSrc={member.imageUrl}
            label={member.name}
          />
          {isFriend ? (
            <Box
              _hover={{ color: 'black.800', cursor: 'pointer' }}
              onClick={() => toggleIsFriend(member.friendId)}
            >
              <BiSolidCheckCircle size={24} />
            </Box>
          ) : (
            <Box
              color="black.300"
              _hover={{ color: 'black.400', cursor: 'pointer' }}
              onClick={() => toggleIsFriend(member.friendId)}
            >
              <BiCircle size={24} />
            </Box>
          )}
        </Flex>
      ))}
    </Flex>
  )
}
