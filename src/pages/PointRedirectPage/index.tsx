import { useLocation } from 'react-router-dom'

import { PointRedirectSection } from './PointRedirectSection'

export default function PointRedirectPage() {
  const location = useLocation()
  const pgToken = new URLSearchParams(location.search).get('pg_token')

  if (!pgToken) {
    return <div>잘못된 접근입니다.</div>
  }

  return <PointRedirectSection pgToken={pgToken} />
}
