import { FallbackProps } from 'react-error-boundary'

import { Text } from '@chakra-ui/react'

import { DATA_ERROR_MESSAGES } from '@/constants/error-message'

export const CookieRecordErrorFallback = ({ error }: FallbackProps) => {
  if (error.message !== DATA_ERROR_MESSAGES.ANSWER_RECORD_NOT_FOUND) {
    throw error
  }

  return (
    <Text textAlign="center" paddingTop={3} fontSize="small">
      {error.message}
    </Text>
  )
}
