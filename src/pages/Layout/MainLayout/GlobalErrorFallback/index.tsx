import { FallbackProps } from 'react-error-boundary'
import { useNavigate } from 'react-router-dom'

import { Button, Flex, Heading, Text } from '@chakra-ui/react'

import { PageLayout } from '@/components/PageLayout'

import { GroupSectionSkeleton } from '../GroupSection'
import { FriendSectionSkeleton } from '../MemberSection/FriendSection'

export const GlobalErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
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
          🚨 {error.message}
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
          <Button colorScheme="primary" onClick={() => resetErrorBoundary()}>
            다시시도
          </Button>
        </Flex>
      </Flex>
    </PageLayout>
  )
}
