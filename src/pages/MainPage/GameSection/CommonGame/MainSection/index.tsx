import { useEffect, useState } from 'react'
import { BiChevronsRight, BiGroup } from 'react-icons/bi'

import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/api/instance'
import {
  AnswerQuestionParam,
  answerRandomQuestion,
} from '@/api/services/answer/question.api'
import { useRandomQuestion } from '@/api/services/question/random.api'
import { pointQuries } from '@/api/services/user/point.api'
import { Loading } from '@/components/Loading'
import { useProfileRandom } from '@/hooks/useProfileRandom'
import { Friend } from '@/types'

import ProfileGrid from './ProfileGrid'

interface MainSectionProps {
  friends: Friend[]
  onFinsihGame: () => void
  onClickProfile: () => void
}

const QUESTION_SIZE = 5

export const MainSection = ({
  friends,
  onFinsihGame,
  onClickProfile,
}: MainSectionProps) => {
  const {
    data: questions,
    status,
    refetch,
  } = useRandomQuestion({
    size: QUESTION_SIZE,
  })
  const { mutate: answerQuestion } = useMutation({
    mutationFn: (params: AnswerQuestionParam) => answerRandomQuestion(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: pointQuries.all() })
    },
  })
  const { pickedProfiles, reloadRandomProfiles } = useProfileRandom(friends)

  const [questionIndex, setQuestionIndex] = useState(0)

  useEffect(() => {
    if (questionIndex === QUESTION_SIZE) {
      onFinsihGame()
      refetch()
    }
  }, [questionIndex, onFinsihGame, refetch])

  if (status === 'pending') return <Loading />

  if (!questions)
    return <Heading>질문이 없습니다 관리자에게 문의해주세요</Heading>

  const handleQuestionSkip = () => {
    reloadRandomProfiles()
    setQuestionIndex((prev) => prev + 1)
  }

  const handleProfileSelect = (pickedId: number) => {
    handleQuestionSkip()
    answerQuestion({
      questionId: questions[questionIndex].questionId,
      pickedId,
    })
    onClickProfile()
  }

  if (questionIndex === QUESTION_SIZE) return <Loading />

  return (
    <Flex
      height="full"
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
