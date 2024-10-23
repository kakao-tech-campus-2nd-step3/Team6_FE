import { FallbackProps } from 'react-error-boundary'
import { Link } from 'react-router-dom'

import { Button } from '@chakra-ui/react'

export const ResetButton = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <Button colorScheme="primary" onClick={() => resetErrorBoundary()}>
      다시시도
    </Button>
  )
}

export const LoginButton = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <Link to="/login">
      <Button colorScheme="primary" onClick={() => resetErrorBoundary()}>
        로그인하기
      </Button>
    </Link>
  )
}
