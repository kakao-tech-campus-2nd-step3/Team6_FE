import { BiChevronLeft } from 'react-icons/bi'

import { Box, Center, Divider, Flex, Text } from '@chakra-ui/react'

export const CookieLogHeader = () => {
  return (
    <Flex flexDirection="column">
      <Box height={8} display="flex" flexDirection="row" width="full">
        <Center paddingX={2} _hover={{ cursor: 'pointer', color: 'black.700' }}>
          <BiChevronLeft size={20} />
        </Center>
        <Text height="100%" lineHeight="2" fontWeight="bold">
          쿠키 기록
        </Text>
      </Box>
      <Divider borderColor="brown.200" />
    </Flex>
  )
}
