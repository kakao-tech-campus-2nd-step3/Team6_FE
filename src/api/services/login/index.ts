import { useQuery } from '@tanstack/react-query'

import { fetchInstance } from '@/api/instance'

type KakaoLoginParam = {
  code: string
}

const kakaoLogin = async ({ code }: KakaoLoginParam) => {
  try {
    const response = await fetchInstance.get(`/api/user/callback?code=${code}`)

    const accessToken = response.headers.authorization

    return { accessToken }
  } catch (error) {
    throw new Error('gg')
  }
}

export const useKakaoLogin = ({ code }: KakaoLoginParam) => {
  return useQuery({
    queryKey: ['login', code],
    queryFn: () => kakaoLogin({ code }),
  })
}
