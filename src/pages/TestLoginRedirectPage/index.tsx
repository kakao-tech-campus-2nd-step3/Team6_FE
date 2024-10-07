import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthTokenStore } from '@/stores/auth-token'

export default function TestLoginRedirectPage() {
  const navigate = useNavigate()
  const setAuthToken = useAuthTokenStore((state) => state.setAuthToken)

  useEffect(() => {
    if (import.meta.env.VITE_TEST_AUTH_TOKEN) {
      setAuthToken(import.meta.env.VITE_TEST_AUTH_TOKEN)
      navigate('/')
    }
  }, [setAuthToken, navigate])

  return <div>잘못된 접근입니다.</div>
}
