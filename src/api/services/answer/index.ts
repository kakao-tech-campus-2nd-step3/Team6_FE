import { useMutation, useQuery } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'
import { API_ERROR_MESSAGES } from '@/constants/error-message'

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

const fetchProfiles = async () => {
  try {
    const response = await authorizationInstance.get('/api/answer/refresh')
    return response.data
  } catch (error) {
    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }
}

export const useRefreshProfiles = () => {
  return useQuery({
    queryKey: ['refreshProfiles'],
    queryFn: fetchProfiles,
  })
}
