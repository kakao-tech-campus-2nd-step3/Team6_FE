import { useQuery } from '@tanstack/react-query'

import { fetchInstance } from '@/api/instance'
import { API_ERROR_MESSAGES } from '@/constants/errorMessage'

type KakaoLoginParam = {
  code: string
}

const kakaoLogin = async ({ code }: KakaoLoginParam) => {
  try {
    const response = await fetchInstance.get(`/api/user/callback?code=${code}`)

    const accessToken = response.headers.authorization

    return { accessToken }
  } catch (error) {
    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }
}

export const useKakaoLogin = ({ code }: KakaoLoginParam) => {
  return useQuery({
    queryKey: ['login', code],
    queryFn: () => kakaoLogin({ code }),
  })
}
