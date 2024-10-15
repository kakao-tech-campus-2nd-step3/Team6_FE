import { useMutation, useQuery } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'
import { API_ERROR_MESSAGES } from '@/constants/error-message'

// 랜덤 공통 질문 조회
const fetchRandomQuestion = async () => {
  try {
    const response = await authorizationInstance.get(
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

// 랜덤 공통 질문 답하기
type AnswerQuestionParam = {
  friendId: number
}

const answerRandomQuestion = async ({ friendId }: AnswerQuestionParam) => {
  try {
    const response = await authorizationInstance.post('/api/answer/common', {
      friendId,
    })
    return response.data
  } catch (error) {
    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }
}

export const useAnswerQuestion = ({ friendId }: AnswerQuestionParam) => {
  return useMutation({
    mutationFn: () => answerRandomQuestion({ friendId }),
  })
}

// 카카오톡 친구 불러오기
const fetchKakaoFriends = async () => {
  try {
    const response = await authorizationInstance.get('/api/friend')
    return response.data
  } catch (error) {
    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }
}

export const useKakaoFriends = () => {
  return useQuery({
    queryKey: ['kakaoFriends'],
    queryFn: fetchKakaoFriends,
  })
}
