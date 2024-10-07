import { BiCookie } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

import { Box, Button, Heading, Icon, Text } from '@chakra-ui/react'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bg="primary_background"
      color="text"
    >
      <Heading
        as="h1"
        display="flex"
        alignItems="center"
        fontSize="9xl"
        fontWeight="bold"
        color="primary"
      >
        4
        <Icon as={BiCookie} boxSize="110px" />4
      </Heading>

      <Text fontSize="lg" color="text" mt="4">
        죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.
      </Text>
      <Text fontSize="sm" color="text_description" mt="2">
        존재하지 않는 주소를 입력하셨거나,
        <br />
        요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
      </Text>

      <Box mt="6">
        <Button
          colorScheme="primary"
          variant="outline"
          mr="4"
          onClick={() => navigate(-1)}
        >
          이전으로
        </Button>
        <Button colorScheme="primary" onClick={() => navigate('/')}>
          메인으로
        </Button>
      </Box>
    </Box>
  )
}
