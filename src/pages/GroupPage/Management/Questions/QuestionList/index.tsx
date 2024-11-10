import { Box, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'

import { Loading } from '@/components/Loading'

export interface Question {
  questionId: number
  questionContent: string
  status: 'READY' | 'APPROVED' | 'REJECTED'
}

interface QuestionListProps {
  questions: Question[]
  isLoading: boolean
  isError: boolean
  onStatusChange: (questionId: number, approve: boolean) => void
}

export const QuestionList = ({
  isLoading,
  isError,
  questions,
  onStatusChange,
}: QuestionListProps) => {
  if (isLoading) return <Loading />
  if (isError) return <Text>질문을 불러오는 데 실패했습니다.</Text>
  if (questions.length === 0) return <Text>질문이 없습니다.</Text>

  return (
    <Box maxHeight="400px" overflowY="scroll">
      <Stack spacing="15px">
        {questions.map((question) => (
          <Box
            key={question.questionId}
            p="10px"
            bg="white"
            borderRadius="8px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="16px" flex="1">
              {question.questionContent}
            </Text>
            <RadioGroup
              onChange={(value) => {
                const approve = value === 'APPROVED'
                onStatusChange(question.questionId, approve)
              }}
              value={question.status}
            >
              <Stack direction="row">
                <Radio value="APPROVED" colorScheme="green" />
                <Radio value="REJECTED" colorScheme="red" />
              </Stack>
            </RadioGroup>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
