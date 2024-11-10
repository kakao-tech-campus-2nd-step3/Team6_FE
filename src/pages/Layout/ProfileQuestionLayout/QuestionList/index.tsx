import { useEffect, useRef, useState } from 'react'
import { BiError, BiTrash } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'

import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/api/instance'
import {
  DeleteProfileQuestionRequest,
  deleteProfileQuestion,
  useGetProfileQuestion,
} from '@/api/services/profile/profile-question.api'
import { ActiveBrownBox } from '@/components/ActiveBrownBox'
import { Loading } from '@/components/Loading'
import { AlertModal } from '@/components/Modal/AlertModal'
import { ConfirmModal } from '@/components/Modal/ConfirmModal'
import ErrorPage from '@/pages/ErrorPage'
import { useSelectedQuestionStore } from '@/stores/selected-question'

interface QuestionListProps {
  isMyPage: boolean
}

export const QuestionList = ({ isMyPage }: QuestionListProps) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(
    null
  )
  const [contextMenuPosition, setContextMenuPosition] = useState<{
    x: number
    y: number
  } | null>(null)
  const contextMenuRef = useRef<HTMLDivElement | null>(null)
  const deleteAlert = useDisclosure()
  const errorAlert = useDisclosure()

  const questionId = useSelectedQuestionStore((state) => state.questionId)
  const setSelectedQuestion = useSelectedQuestionStore(
    (state) => state.setQuestionId
  )
  const setQuestionContent = useSelectedQuestionStore(
    (state) => state.setQuestionContent
  )
  const setQuestionCreatedAt = useSelectedQuestionStore(
    (state) => state.setQuestionCreatedAt
  )

  const location = useLocation()
  const userId: string = location.state?.userId.toString()

  const {
    data: questions,
    isLoading,
    error,
  } = useGetProfileQuestion(userId || '')

  const isFirstRender = useRef(true)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(e.target as Node)
      ) {
        setContextMenuPosition(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    // 첫 렌더링 시 초기 store 지정
    if (isFirstRender.current && questions && questions.length > 0) {
      setSelectedQuestion(questions[0].profileQuestionId)
      setQuestionContent(questions[0].profileQuestionContent)
      setQuestionCreatedAt(questions[0].createdAt)

      isFirstRender.current = false
    } else if (isFirstRender.current && questions?.length === 0) {
      setSelectedQuestion(undefined)
      setQuestionContent(undefined)
      setQuestionCreatedAt(undefined)
    }
  }, [
    questions,
    questionId,
    setSelectedQuestion,
    setQuestionContent,
    setQuestionCreatedAt,
  ])

  const { mutate: deleteQuestion } = useMutation<
    void,
    Error,
    DeleteProfileQuestionRequest
  >({
    mutationFn: ({ deleteQuestionId }: DeleteProfileQuestionRequest) =>
      deleteProfileQuestion({ deleteQuestionId }),
    onSuccess: () => {
      deleteAlert.onClose()
      queryClient.refetchQueries({
        queryKey: ['profileQuestion', userId],
      })
      queryClient.invalidateQueries({ queryKey: ['deleteProfileQuestion'] })
      setSelectedQuestionId(null)
    },
    onError: () => {
      deleteAlert.onClose()
      errorAlert.onOpen()
    },
  })

  if (isLoading) return <Loading />
  if (error) return <ErrorPage />
  if (!Array.isArray(questions) || questions.length === 0)
    return (
      <Box textAlign="center" paddingTop={3}>
        생성된 질문이 없습니다!
      </Box>
    )

  const handleContextMenu = (
    e: React.MouseEvent,
    question: { profileQuestionId: number }
  ) => {
    e.preventDefault()
    setSelectedQuestionId(question.profileQuestionId)
    setContextMenuPosition({ x: e.clientX, y: e.clientY })
  }

  const onClickDeleteBtn = () => {
    deleteAlert.onOpen()
    setContextMenuPosition(null)
  }

  const handleDelete = () => {
    if (selectedQuestionId !== undefined && selectedQuestionId !== null) {
      deleteQuestion({ deleteQuestionId: selectedQuestionId })
    }
  }

  const adjustedXPosition = contextMenuPosition
    ? contextMenuPosition.x - contextMenuPosition.x * 0.6
    : 0

  return (
    <Flex
      flexDirection="column"
      alignItems="start"
      overflowY="scroll"
      maxHeight="32rem"
      gap={2}
    >
      <Flex flexDirection="column" width="full">
        {questions?.map((question) => (
          <Box
            key={question.profileQuestionId}
            width="full"
            onContextMenu={
              isMyPage ? (e) => handleContextMenu(e, question) : undefined
            }
          >
            <ActiveBrownBox
              key={question.profileQuestionId}
              isActive={questionId === question.profileQuestionId}
              onClick={() => {
                setSelectedQuestion(question.profileQuestionId)
                setQuestionContent(question.profileQuestionContent)
                setQuestionCreatedAt(question.createdAt)
              }}
            >
              {question.profileQuestionContent}
            </ActiveBrownBox>
          </Box>
        ))}
      </Flex>
      {/* 우클릭 컨텍스트 메뉴 */}
      {contextMenuPosition && (
        <Box
          ref={contextMenuRef}
          position="absolute"
          zIndex="10000"
          top={`${contextMenuPosition.y - 100}px`}
          left={`${adjustedXPosition}`}
          bg="white"
          boxShadow="md"
          padding="0.5rem"
          borderRadius="md"
          width="90px"
          textAlign="center"
          _hover={{ bg: 'secondary_background' }}
        >
          <Text
            cursor="pointer"
            onClick={onClickDeleteBtn}
            color="text_secondary"
          >
            삭제하기
          </Text>
        </Box>
      )}
      <ConfirmModal
        isOpen={deleteAlert.isOpen}
        onClose={deleteAlert.onClose}
        icon={<BiTrash />}
        title="프로필 질문을 삭제하시겠어요?"
        description="삭제한 질문은 복구할 수 없습니다"
        confirmButton={
          <Button
            colorScheme="primary"
            fontSize="small"
            height="fit-content"
            paddingY="0.6rem"
            onClick={handleDelete}
          >
            삭제하기
          </Button>
        }
      />
      <AlertModal
        isOpen={errorAlert.isOpen}
        onClose={errorAlert.onClose}
        icon={<BiError />}
        title="삭제에 실패하였습니다"
        description=""
      />
    </Flex>
  )
}
