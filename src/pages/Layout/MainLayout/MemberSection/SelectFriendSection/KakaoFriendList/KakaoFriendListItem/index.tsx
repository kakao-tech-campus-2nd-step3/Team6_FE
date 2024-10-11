import { BiCircle, BiSolidCheckCircle } from 'react-icons/bi'

import { Box, Flex } from '@chakra-ui/react'

import { AvatarLabelWithNavigate } from '@/components/common/AvatarLabel'
import { Friend } from '@/types'

interface KakaoFriendListItemProps {
  friends: Friend[]
  isFriend: boolean
}

export const KakaoFriendListItem = ({
  friends,
  isFriend,
}: KakaoFriendListItemProps) => {
  return (
    <Flex flexDirection="column" width="full" maxHeight="30rem">
      {friends.map((friend) => (
        <Flex
          key={friend.friendId}
          alignItems="center"
          justifyContent="space-between"
          paddingY={1.5}
        >
          <AvatarLabelWithNavigate
            isNavigate={false}
            avatarSrc={friend.imageUrl}
            label={friend.name}
          />
          {isFriend && (
            <Box _hover={{ color: 'black.800', cursor: 'pointer' }}>
              <BiSolidCheckCircle size={24} />
            </Box>
          )}
          {!isFriend && (
            <Box
              color="black.300"
              _hover={{ color: 'black.400', cursor: 'pointer' }}
            >
              <BiCircle size={24} />
            </Box>
          )}
        </Flex>
      ))}
    </Flex>
  )
}
