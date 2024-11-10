import { useMutation } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'

type AnswerGroupQuestionParam = {
  questionId: number
  groupId: number
  pickedId: number
}

type AnswerGroupQuestionResponse = {
  message: string
}

const answerGroupQuestion = async ({
  questionId,
  groupId,
  pickedId,
}: AnswerGroupQuestionParam): Promise<AnswerGroupQuestionResponse> => {
  const response = await authorizationInstance.post('/api/answer/group', {
    questionId,
    groupId,
    pickedId,
  })

  return response.data
}

export const useAnswerGroupQuestion = () => {
  return useMutation({
    mutationFn: (params: AnswerGroupQuestionParam) =>
      answerGroupQuestion(params),
  })
}
