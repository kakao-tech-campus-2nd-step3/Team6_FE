import { Text } from '@chakra-ui/react'

type CookieLogErrorFallbackProps = {
  error: Error
}

export const CookieLogErrorFallback = ({
  error,
}: CookieLogErrorFallbackProps) => {
  return (
    <Text textAlign="center" paddingTop={3} fontSize="small">
      {error.message}
    </Text>
  )
}
