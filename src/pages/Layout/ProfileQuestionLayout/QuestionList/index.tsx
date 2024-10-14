import { useEffect } from 'react'

import { Flex } from '@chakra-ui/react'

import { ActiveBrownBox } from '@/components/ActiveBrownBox'
import { useSeletedQuestionStore } from '@/stores/selected-question'
import { QuestionItem } from '@/types'

interface QuestionListProps {
  questions: QuestionItem[]
}

export const QuestionList = ({ questions }: QuestionListProps) => {
  const questionId = useSeletedQuestionStore((state) => state.questionId)
  const setSeletedQuestion = useSeletedQuestionStore(
    (state) => state.setQuestionId
  )

  useEffect(() => {
    if (questions.length > 0) {
      setSeletedQuestion(questions[0].profileQuestionId)
    }
  }, [setSeletedQuestion, questions])

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
          <ActiveBrownBox
            key={question.profileQuestionId}
            isActive={questionId === question.profileQuestionId}
            onClick={() => setSeletedQuestion(question.profileQuestionId)}
          >
            {question.profileQuestionContent}
          </ActiveBrownBox>
        ))}
      </Flex>
    </Flex>
  )
}
