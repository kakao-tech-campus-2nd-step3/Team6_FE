import { BiHeart, BiUser } from 'react-icons/bi'

import { Box, Flex, HStack, Text } from '@chakra-ui/react'

export const FriendHeader = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" paddingRight={3}>
      <HStack padding={2} paddingY={1}>
        <BiUser size={20} />
        <Text fontWeight={600}>친구 목록</Text>
      </HStack>
      <Box color="black.500" _hover={{ color: 'text', cursor: 'pointer' }}>
        <BiHeart size={20} />
      </Box>
    </Flex>
  )
}
