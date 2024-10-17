import { useEffect, useState } from 'react'

import { Text } from '@chakra-ui/react'

import {
  RandomQuestionResponse,
  useRandomQuestion,
} from '@/api/services/question'

type QuestionProps = {
  questionIndex: number
}

const Question = ({ questionIndex }: QuestionProps) => {
  const { data }: { data: RandomQuestionResponse | undefined } =
    useRandomQuestion()

  const [questionText, setquestionText] = useState('')

  useEffect(() => {
    if (data) {
      const { questions } = data
      if (questionIndex < questions.length) {
        setquestionText(questions[questionIndex].content)
      }
    }
  }, [data, questionIndex])

  return (
    <Text fontWeight="600" fontSize="4xl" color="text" mb={24}>
      {questionText}
    </Text>
  )
}

export default Question
