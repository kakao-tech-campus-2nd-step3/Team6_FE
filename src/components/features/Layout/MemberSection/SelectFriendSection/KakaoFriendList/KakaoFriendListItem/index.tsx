import { BiCircle, BiSolidCheckCircle } from 'react-icons/bi'

import { Avatar, Box, Flex, HStack, Text } from '@chakra-ui/react'

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
        >
          <HStack paddingY={1.5}>
            <Avatar width={7} height={7} src={friend.imageUrl} />
            <Text>{friend.name}</Text>
          </HStack>
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
