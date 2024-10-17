import { authorizationInstance } from '@/api/instance'
import { API_ERROR_MESSAGES } from '@/constants/error-message'
import { Question } from '@/types'

export type RandomQuestionResponse = {
  questions: Question[]
}

export const fetchRandomQuestion =
  async (): Promise<RandomQuestionResponse> => {
    try {
      const response = await authorizationInstance.get<RandomQuestionResponse>(
        '/api/common/question/random'
      )
      return response.data
    } catch (error) {
      throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
    }
  }
