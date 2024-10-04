import { Box, Button, Text } from '@chakra-ui/react'

export default function Navigate() {
  return (
    <Box height="32px" display="flex" flexDirection="row">
      <Button height="100%" bg="none" _hover={{ bg: 'none' }}>
        {'<'}
      </Button>
      <Text height="100%" lineHeight="2" fontWeight="bold">
        그룹 페이지
      </Text>
    </Box>
  )
}
