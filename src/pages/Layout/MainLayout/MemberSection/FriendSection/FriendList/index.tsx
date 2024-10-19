import { useNavigate } from 'react-router-dom'

import { Box, Flex, Text } from '@chakra-ui/react'

import { AvatarLabelWithNavigate } from '@/components/AvatarLabel'
import { Friend } from '@/types'

interface FriendListProps {
  friends: Friend[]
}

export const FriendList = ({ friends }: FriendListProps) => {
  const navigate = useNavigate()
  return (
    <Flex flexDirection="column" alignItems="start" overflowY="scroll">
      <Text fontSize="small" color="text_description" paddingY={1} paddingX={2}>
        친한 친구 - {friends.length}
      </Text>
      <Flex flexDirection="column" width="full" maxHeight="30rem">
        {friends.map((friend) => (
          <Box
            key={friend.friendId}
            paddingY={1}
            paddingX={2}
            width="full"
            onClick={() => navigate(`/mypage/${friend.friendId}`)}
          >
            <AvatarLabelWithNavigate
              isNavigate
              avatarSrc={friend.imageUrl}
              label={friend.name}
              linkTo="/"
              tooltipLabel={`${friend.name} 페이지`}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}
