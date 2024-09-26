import { BiHeart, BiUser } from 'react-icons/bi'

import { Box, Flex, HStack, Text } from '@chakra-ui/react'

import { useMemberTypeStore } from '@/stores/member-type'

export const MemberHeader = () => {
  const memberType = useMemberTypeStore((state) => state.memberType)
  const setMemberType = useMemberTypeStore((state) => state.setMemberType)

  return (
    <Flex alignItems="center" justifyContent="space-between" paddingRight={3}>
      <HStack padding={2} paddingY={1}>
        <BiUser size={20} />
        <Text fontWeight={600}>친구 목록</Text>
      </HStack>
      {memberType === 'FRIEND' && (
        <Box
          color="black.600"
          _hover={{ color: 'text', cursor: 'pointer' }}
          onClick={() => setMemberType('ALL')}
        >
          <BiHeart size={20} />
        </Box>
      )}
      {memberType === 'ALL' && (
        <Box
          _hover={{ color: 'black.800', cursor: 'pointer' }}
          onClick={() => setMemberType('FRIEND')}
        >
          <Text fontSize="small" fontWeight="bold">
            설정 완료
          </Text>
        </Box>
      )}
    </Flex>
  )
}
