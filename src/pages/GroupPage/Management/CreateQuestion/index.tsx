import { useState } from 'react'
import { BiError, BiPlus } from 'react-icons/bi'

import { Box, Flex, Text, Textarea, useDisclosure } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'

import {
  CreateGroupQuestionPayload,
  createGroupQuestion,
} from '@/api/services/question/group.api'
import { AlertModal } from '@/components/Modal/AlertModal'
import { FormConfirmModalButton, FormModal } from '@/components/Modal/FormModal'

interface GroupQuestionCreateModalProps {
  isOpen: boolean
  onClose: () => void
  groupId: number
}

export const GroupQuestionCreateModal = ({
  isOpen,
  onClose,
  groupId,
}: GroupQuestionCreateModalProps) => {
  const [questionContent, setQuestionContent] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const errorAlert = useDisclosure()

  const { mutate: createQuestion } = useMutation({
    mutationFn: (payload: CreateGroupQuestionPayload) =>
      createGroupQuestion(payload),
    onSuccess: () => {
      onClose()
      setQuestionContent('')
    },
    onError: () => {
      setErrorMessage('질문 생성에 실패하였습니다')
      onClose()
      errorAlert.onOpen()
    },
  })

  const handleCreateQuestion = () => {
    if (!questionContent) {
      setErrorMessage('질문을 입력해주세요')
      onClose()
      errorAlert.onOpen()
      return
    }

    createQuestion({ groupId, content: questionContent })
  }

  return (
    <Box>
      <FormModal
        isOpen={isOpen}
        onClose={onClose}
        icon={<BiPlus />}
        title="그룹 질문 추가 요청"
        description="그룹에 새로운 질문을 요청해보세요"
        confirmButton={
          <FormConfirmModalButton onClick={handleCreateQuestion}>
            요청하기
          </FormConfirmModalButton>
        }
      >
        <Flex padding="0 10px" flexDirection="column" gap={3}>
          <Text fontSize={14}>질문</Text>
          <Textarea
            rows={1}
            resize="none"
            whiteSpace="nowrap"
            placeholder="100자 이내 입력"
            value={questionContent}
            onChange={(e) => setQuestionContent(e.target.value)}
          />
          <Box textAlign="center">
            <Text fontSize="small" textColor="text_description">
              요청한 질문은 수정하거나 취소할 수 없습니다
            </Text>
          </Box>
        </Flex>
      </FormModal>

      <AlertModal
        isOpen={errorAlert.isOpen}
        onClose={errorAlert.onClose}
        icon={<BiError />}
        title={errorMessage}
        description=""
      />
    </Box>
  )
}
