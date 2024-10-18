import { Text } from '@chakra-ui/react'

type CookieLogErrorFallbackProps = {
  error: Error
}

export const CookieRecordErrorFallback = ({
  error,
}: CookieLogErrorFallbackProps) => {
  return (
    <Text textAlign="center" paddingTop={3} fontSize="small">
      {error.message}
    </Text>
  )
}
