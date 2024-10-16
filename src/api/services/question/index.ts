import { useQuery } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'
import { API_ERROR_MESSAGES } from '@/constants/error-message'
import { Question } from '@/types'

type RandomQuestionResponse = {
  questions: Question[]
}

const fetchRandomQuestion = async (): Promise<RandomQuestionResponse> => {
  try {
    const response = await authorizationInstance.get<RandomQuestionResponse>(
      '/api/common/question/random'
    )
    return response.data
  } catch (error) {
    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }
}

export const useRandomQuestion = () => {
  return useQuery({
    queryKey: ['randomQuestion'],
    queryFn: fetchRandomQuestion,
  })
}
