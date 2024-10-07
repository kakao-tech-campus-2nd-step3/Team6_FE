import { useNavigate } from 'react-router-dom'

import { useKakaoLogin } from '@/api/services/login'
import { useAuthTokenStore } from '@/stores/auth-token'

interface LoginRedirectSectionProps {
  code: string
}

export const LoginRedirectSection = ({ code }: LoginRedirectSectionProps) => {
  const navigate = useNavigate()

  const { data, status, error } = useKakaoLogin({ code })
  const setAuthToken = useAuthTokenStore((state) => state.setAuthToken)

  if (status === 'pending') return <div>loading...</div>

  if (error) return <div>{error.message}</div>

  if (data) {
    setAuthToken(data.accessToken)
    navigate('/')
  }

  return <div>loading...</div>
}
