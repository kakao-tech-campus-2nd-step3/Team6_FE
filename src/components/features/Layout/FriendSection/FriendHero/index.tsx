import { BiHeart, BiUser } from 'react-icons/bi'

import { Box, Flex, HStack, Text } from '@chakra-ui/react'

import { useFriendStore } from '@/stores/friend'

export const FriendHeader = () => {
  const friendType = useFriendStore((state) => state.friendType)
  const setFriendType = useFriendStore((state) => state.setFriendType)

  return (
    <Flex alignItems="center" justifyContent="space-between" paddingRight={3}>
      <HStack padding={2} paddingY={1}>
        <BiUser size={20} />
        <Text fontWeight={600}>친구 목록</Text>
      </HStack>
      {friendType === 'FRIEND' && (
        <Box
          color="black.600"
          _hover={{ color: 'text', cursor: 'pointer' }}
          onClick={() => setFriendType('ALL')}
        >
          <BiHeart size={20} />
        </Box>
      )}
      {friendType === 'ALL' && (
        <Box
          _hover={{ color: 'black.800', cursor: 'pointer' }}
          onClick={() => setFriendType('FRIEND')}
        >
          <Text fontSize="small" fontWeight="bold">
            설정 완료
          </Text>
        </Box>
      )}
    </Flex>
  )
}
