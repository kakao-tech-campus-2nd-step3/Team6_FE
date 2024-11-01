import { FallbackProps } from 'react-error-boundary'
import { BiErrorCircle } from 'react-icons/bi'

import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'

import { DATA_ERROR_MESSAGES } from '@/constants/error-message'

export const GroupErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  if (error.message === DATA_ERROR_MESSAGES.GROUP_NOT_FOUND) {
    return (
      <Text
        fontSize="smaller"
        paddingX={2}
        whiteSpace="pre-wrap"
        textAlign="center"
        color="text_second"
      >
        {error.message}
      </Text>
    )
  }

  return (
    <Flex flexDirection="column">
      <Center fontSize="small" paddingY={2}>
        <Box color="primary" padding={1}>
          <BiErrorCircle />
        </Box>
        {error.message}
      </Center>
      <Flex justifyContent="center">
        <Button
          onClick={() => resetErrorBoundary()}
          height="fit-content"
          padding={2}
          fontSize="small"
          colorScheme="primary"
          variant="outline"
        >
          다시 시도하기
        </Button>
      </Flex>
    </Flex>
  )
}
