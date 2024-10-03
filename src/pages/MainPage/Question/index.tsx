import { Text } from '@chakra-ui/react'

type QuestionProps = {
  questionText: string
}

const Question = ({ questionText }: QuestionProps) => {
  return (
    <Text fontWeight="600" fontSize="4xl" color="text" mb={24}>
      {questionText}
    </Text>
  )
}

export default Question
