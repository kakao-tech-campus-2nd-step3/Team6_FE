import { useEffect, useState } from 'react'
import { BiChevronsRight, BiGroup } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/api/instance'
import {
  AnswerGroupQuestionParams,
  answerGroupQuestion,
} from '@/api/services/answer/question.api'
import { useGroupRandomQuestion } from '@/api/services/question/random.api'
import { pointQuries } from '@/api/services/user/point.api'
import { Loading } from '@/components/Loading'
import { useProfileRandom } from '@/hooks/useProfileRandom'
import { Member } from '@/types'

import ProfileGrid from './ProfileGrid'

interface GroupMainSectionProps {
  groupId: number
  members: Member[]
  onFinsihGame: () => void
  onClickProfile: () => void
}

const QUESTION_SIZE = 5

export const GroupMainSection = ({
  groupId,
  members,
  onFinsihGame,
  onClickProfile,
}: GroupMainSectionProps) => {
  const {
    data: questions,
    status,
    refetch,
  } = useGroupRandomQuestion({ groupId })
  const { mutate: answerQuestion } = useMutation({
    mutationFn: (params: AnswerGroupQuestionParams) =>
      answerGroupQuestion(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: pointQuries.all() })
    },
  })
  const { pickedProfiles, reloadRandomProfiles } = useProfileRandom(members)

  const [questionSize, setQuestionSize] = useState(QUESTION_SIZE)
  const [questionIndex, setQuestionIndex] = useState(0)

  useEffect(() => {
    if (questionIndex === questionSize) {
      onFinsihGame()
      refetch()
    }
  }, [questionIndex, onFinsihGame, refetch, questionSize])

  useEffect(() => {
    if (questions?.length && questions.length < QUESTION_SIZE) {
      setQuestionSize(questions.length)
    }
  }, [questions])

  if (status === 'pending') return <Loading />

  if (!questions?.length)
    return (
      <Flex
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        gap={5}
      >
        <Heading size="lg">그룹 질문이 없습니다😢</Heading>
        <Heading size="md">그룹 페이지에서 질문을 추가해보세요!</Heading>
        <Link to={`/group/${groupId}`}>
          <Button colorScheme="primary" width="full" height="2.5rem">
            그룹 페이지로 이동하기
          </Button>
        </Link>
      </Flex>
    )

  const handleQuestionSkip = () => {
    reloadRandomProfiles()
    setQuestionIndex((prev) => prev + 1)
  }

  const handleProfileSelect = (pickedId: number) => {
    handleQuestionSkip()
    answerQuestion({
      groupId,
      questionId: questions[questionIndex].questionId,
      pickedId,
    })
    onClickProfile()
  }

  if (questionIndex === questionSize) return <Loading />

  return (
    <Flex
      height="100%"
      flexDirection="column"
      justifyContent="space-between"
      textAlign="center"
      padding="70px 0"
    >
      <Text fontWeight="600" fontSize="4xl" color="text" paddingX={16}>
        {questions[questionIndex].content}
      </Text>
      <Flex direction="column" align="center">
        <ProfileGrid
          profiles={pickedProfiles.slice(0, 3)}
          onClickProfile={handleProfileSelect}
        />
        <ProfileGrid
          profiles={pickedProfiles.slice(3, 5)}
          onClickProfile={handleProfileSelect}
        />
        <Flex justify="space-between" gap={52}>
          <Button
            leftIcon={<BiGroup />}
            bg="brown.50"
            color="brown.600"
            _hover={{ bg: 'brown.50', color: 'black.900' }}
            onClick={reloadRandomProfiles}
          >
            Reload
          </Button>
          <Button
            rightIcon={<BiChevronsRight />}
            bg="brown.50"
            color="brown.600"
            _hover={{ bg: 'brown.50', color: 'black.900' }}
            onClick={handleQuestionSkip}
          >
            Skip
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
