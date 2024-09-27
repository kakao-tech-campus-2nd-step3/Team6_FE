import { BiUserCheck } from 'react-icons/bi'

import { Box, Flex, HStack, Text } from '@chakra-ui/react'

import { useMemberTypeStore } from '@/stores/member-type'

export const SelectFreindHeader = () => {
  const setMemberType = useMemberTypeStore((state) => state.setMemberType)

  return (
    <Flex alignItems="center" justifyContent="space-between" paddingRight={3}>
      <HStack padding={2} paddingY={1}>
        <BiUserCheck size={20} />
        <Text fontWeight="bold">친구 설정</Text>
      </HStack>
      <Box
        _hover={{ color: 'black.800', cursor: 'pointer' }}
        onClick={() => setMemberType('FRIEND')}
      >
        <Text fontSize="small" fontWeight="bold">
          설정 완료
        </Text>
      </Box>
    </Flex>
  )
}
