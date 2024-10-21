import { FallbackProps } from 'react-error-boundary'
import { useNavigate } from 'react-router-dom'

import { Button, Flex, Heading, Text } from '@chakra-ui/react'

import { PageLayout } from '@/components/PageLayout'

import { GroupSectionSkeleton } from '../GroupSection'
import { FriendSectionSkeleton } from '../MemberSection/FriendSection'
import { LoginButton, ResetButton } from './ErrorButton'

export const GlobalErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const { status } = error
  const { message, ErrorButton } = getErrorDetail(status)

  const navigate = useNavigate()

  return (
    <PageLayout
      LeftSection={<GroupSectionSkeleton />}
      RightSection={<FriendSectionSkeleton />}
    >
      <Flex
        height="full"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={6}
        paddingBottom={10}
      >
        <Heading color="primary">Whokie</Heading>
        <Text
          fontSize="lg"
          color="text"
          whiteSpace="pre-wrap"
          textAlign="center"
        >
          🚨 {message}
        </Text>
        <Flex gap={4}>
          <Button
            colorScheme="primary"
            variant="outline"
            onClick={() => {
              resetErrorBoundary()
              navigate(-1)
            }}
          >
            이전으로
          </Button>
          <ErrorButton error={error} resetErrorBoundary={resetErrorBoundary} />
        </Flex>
      </Flex>
    </PageLayout>
  )
}

const getErrorDetail = (status?: number) => {
  switch (status) {
    case 401:
      return {
        message: '로그인 후 이용해주세요.',
        ErrorButton: LoginButton,
      }
    case 403:
      return {
        message: '접근 권한이 없습니다.',
        ErrorButton: ResetButton,
      }
    case 404:
      return {
        message: '요청한 데이터를 찾을 수 없습니다.',
        ErrorButton: ResetButton,
      }
    default:
      return {
        message: '예기치 않은 오류가 발생했습니다.\n관리자에게 문의해주세요.',
        ErrorButton: ResetButton,
      }
  }
}
