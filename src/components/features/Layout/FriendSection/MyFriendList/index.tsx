import { Avatar, Flex, HStack, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'

import { Friend } from '@/types'

interface MyFriendListProps {
  friends: Friend[]
}

export const MyFriendList = ({ friends }: MyFriendListProps) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="start"
      paddingX={2}
      overflowY="scroll"
      css={hideScrollbar}
    >
      <Text fontSize="small" color="text_detail" paddingY={1}>
        친한 친구 - {friends.length}
      </Text>
      <Flex flexDirection="column" width="full" maxHeight="30rem">
        {friends.map((friend) => (
          <HStack key={friend.friendId} paddingY={1.5}>
            <Avatar width={7} height={7} src={friend.imageUrl} />
            <Text>{friend.name}</Text>
          </HStack>
        ))}
      </Flex>
    </Flex>
  )
}

const hideScrollbar = css({
  '&::-webkit-scrollbar': { display: 'none' },
})
