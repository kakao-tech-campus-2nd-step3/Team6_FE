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

  let questionText = ''

  if (data) {
    const { questions } = data
    if (questionIndex < questions.length) {
      questionText = questions[questionIndex].content
    }
  }

  return (
    <Text fontWeight="600" fontSize="4xl" color="text" mb={24}>
      {questionText}
    </Text>
  )
}

export default Question
