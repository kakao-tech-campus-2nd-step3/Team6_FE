import { FallbackProps } from 'react-error-boundary'
import { BiErrorCircle } from 'react-icons/bi'

import { Box, Button, Center, Flex, useDisclosure } from '@chakra-ui/react'

import { AlertModal } from '@/components/Modal/AlertModal'
import { PageLayout } from '@/components/PageLayout'
import { API_ERROR_MESSAGES } from '@/constants/error-message'

import { SelectFreindHeader } from '../SelectFriendHeader'

export const MemberErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const { onClose } = useDisclosure()

  return (
    <PageLayout.SideSection SectionHeader={<SelectFreindHeader />}>
      {error.message === API_ERROR_MESSAGES.FRIEND_CANNOT_BE_EMPTY ? (
        <AlertModal
          isOpen
          onClose={() => {
            onClose()
            resetErrorBoundary()
          }}
          icon={<BiErrorCircle />}
          title="친구 설정에 실패했습니다."
          description="친한 친구를 1명 이상 선택해주세요."
        />
      ) : (
        <div>
          <Center fontSize="small" paddingY={2}>
            <Box color="primary" padding={1}>
              <BiErrorCircle />
            </Box>
            {error.message}
          </Center>
          <Flex justifyContent="center">
            <Button
              onClick={() => resetErrorBoundary}
              height="fit-content"
              padding={2}
              fontSize="small"
              colorScheme="primary"
              variant="outline"
            >
              다시 시도하기
            </Button>
          </Flex>
        </div>
      )}
    </PageLayout.SideSection>
  )
}
