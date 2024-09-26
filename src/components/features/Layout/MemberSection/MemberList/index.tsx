import { BiCircle, BiSolidCheckCircle } from 'react-icons/bi'

import { Avatar, Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'

import { Friend } from '@/types'

interface MemberListProps {
  friends: Friend[]
}

export const MemberList = ({ friends }: MemberListProps) => {
  return (
    <Flex
      flexDirection="column"
      paddingLeft={2}
      paddingRight={3}
      gap={4}
      overflowY="scroll"
      css={hideScrollbar}
    >
      <Flex flexDirection="column">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="small" color="text_detail" paddingY={1}>
            친한 친구 - {friends.length}
          </Text>
          <Button variant="link" fontSize="small" colorScheme="primary">
            초기화
          </Button>
        </Flex>
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
              <Box _hover={{ color: 'black.800', cursor: 'pointer' }}>
                <BiSolidCheckCircle size={24} />
              </Box>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <Text fontSize="small" color="text_detail" paddingY={1}>
          추천 친구 - {friends.length}
        </Text>
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
              <Box
                color="black.300"
                _hover={{ color: 'black.400', cursor: 'pointer' }}
              >
                <BiCircle size={24} />
              </Box>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

const hideScrollbar = css({
  '&::-webkit-scrollbar': { display: 'none' },
})
