import { useNavigate, useParams } from 'react-router-dom'

import { Box, Button, Text } from '@chakra-ui/react'

export default function Navigate() {
  const navigate = useNavigate()
  const { groupId } = useParams()

  return (
    <Box height="32px" display="flex" flexDirection="row">
      <Button
        onClick={() => navigate(`/group/${groupId}`)}
        height="100%"
        bg="none"
        _hover={{ bg: 'none' }}
      >
        {'<'}
      </Button>
      <Text height="100%" lineHeight="2" fontWeight="bold">
        그룹 페이지
      </Text>
    </Box>
  )
}
