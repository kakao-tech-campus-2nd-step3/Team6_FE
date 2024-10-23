import { authorizationInstance } from '@/api/instance'
import { Question } from '@/types'

export type RandomQuestionResponse = {
  questions: Question[]
}

export const fetchRandomQuestion =
  async (): Promise<RandomQuestionResponse> => {
    const response = await authorizationInstance.get<RandomQuestionResponse>(
      '/api/common/question/random'
    )

    return response.data
  }
