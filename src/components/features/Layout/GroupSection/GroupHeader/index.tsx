import { BiDonateHeart } from 'react-icons/bi'

import { Flex, HStack, Text } from '@chakra-ui/react'

export const GroupHeader = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" paddingRight={3}>
      <HStack padding={2} paddingY={1}>
        <BiDonateHeart size={20} />
        <Text fontWeight="bold">쿠키 주기</Text>
      </HStack>
    </Flex>
  )
}
