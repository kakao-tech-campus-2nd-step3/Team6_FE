import { authorizationInstance } from '@/api/instance'

type AnswerQuestionParam = {
  friendId: number
}

export const answerRandomQuestion = async ({
  friendId,
}: AnswerQuestionParam) => {
  const response = await authorizationInstance.post('/api/answer/common', {
    friendId,
  })

  return response.data
}
