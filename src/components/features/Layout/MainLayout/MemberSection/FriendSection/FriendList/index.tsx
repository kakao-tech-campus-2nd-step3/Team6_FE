import { Box, Flex, Text } from '@chakra-ui/react'

import { AvatarLabelWithNavigate } from '@/components/features/Layout/MainLayout/AvatarLabel'
import { Friend } from '@/types'

interface FriendListProps {
  friends: Friend[]
}

export const FriendList = ({ friends }: FriendListProps) => {
  return (
    <Flex flexDirection="column" alignItems="start" overflowY="scroll">
      <Text fontSize="small" color="text_description" paddingY={1} paddingX={2}>
        친한 친구 - {friends.length}
      </Text>
      <Flex flexDirection="column" width="full" maxHeight="30rem">
        {friends.map((friend) => (
          <Box key={friend.friendId} paddingY={1} paddingX={2} width="full">
            <AvatarLabelWithNavigate
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
