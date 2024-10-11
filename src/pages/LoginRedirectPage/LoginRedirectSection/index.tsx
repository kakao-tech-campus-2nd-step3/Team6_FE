import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useKakaoLogin } from '@/api/services/login'
import { Loading } from '@/components/common/Loading'
import { useAuthTokenStore } from '@/stores/auth-token'

interface LoginRedirectSectionProps {
  code: string
}

export const LoginRedirectSection = ({ code }: LoginRedirectSectionProps) => {
  const navigate = useNavigate()

  const { data, status, error } = useKakaoLogin({ code })
  const setAuthToken = useAuthTokenStore((state) => state.setAuthToken)

  useEffect(() => {
    if (data) {
      setAuthToken(data.accessToken)
      navigate('/')
    }
  }, [data, setAuthToken, navigate])

  if (status === 'pending') return <Loading />

  if (error) return <div>{error.message}</div>

  return <Loading />
}
