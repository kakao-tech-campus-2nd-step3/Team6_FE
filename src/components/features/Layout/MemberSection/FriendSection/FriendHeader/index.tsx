import { BiHeart, BiUser } from 'react-icons/bi'

import { Box, Flex, HStack, Text } from '@chakra-ui/react'

import { useMemberTypeStore } from '@/stores/member-type'

export const FriendHeader = () => {
  const setMemberType = useMemberTypeStore((state) => state.setMemberType)

  return (
    <Flex alignItems="center" justifyContent="space-between" paddingRight={3}>
      <HStack padding={2} paddingY={1}>
        <BiUser size={20} />
        <Text fontWeight="bold">친구 목록</Text>
      </HStack>
      <Box
        color="black.600"
        _hover={{ color: 'text', cursor: 'pointer' }}
        onClick={() => setMemberType('KAKAO')}
      >
        <BiHeart size={20} />
      </Box>
    </Flex>
  )
}
