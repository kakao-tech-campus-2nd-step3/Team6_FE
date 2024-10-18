import { authorizationInstance } from '@/api/instance'
import { API_ERROR_MESSAGES } from '@/constants/error-message'

type AnswerQuestionParam = {
  friendId: number
}

export const answerRandomQuestion = async ({
  friendId,
}: AnswerQuestionParam) => {
  try {
    const response = await authorizationInstance.post('/api/answer/common', {
      friendId,
    })
    return response.data
  } catch (error) {
    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }
}
