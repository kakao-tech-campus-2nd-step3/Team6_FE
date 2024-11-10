import { useNavigate } from 'react-router-dom'

import { Box, Button, Text } from '@chakra-ui/react'

export default function Navigate() {
  const navigate = useNavigate()

  return (
    <Box height="32px" display="flex" flexDirection="row">
      <Button
        onClick={() => navigate('/')}
        height="100%"
        bg="none"
        _hover={{ bg: 'none' }}
      >
        {'<'}
      </Button>
      <Text height="100%" lineHeight="2" fontWeight="bold">
        메인 페이지
      </Text>
    </Box>
  )
}
