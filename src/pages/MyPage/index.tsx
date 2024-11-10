import { useParams } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { useMyPage } from '@/api/services/profile/my-page.api'
import { pointQuries } from '@/api/services/user/point.api'
import { Loading } from '@/components/Loading'
import { useMyUserIdStore } from '@/stores/my-user-id'

import ErrorPage from '../ErrorPage'
import Navigate from './Navigate'
import OvenMenu from './OvenMenu'
import Profile from './Profile'
import Ranking from './Ranking'

export default function MyPage() {
  const { userId } = useParams<{ userId: string }>()
  const myUserId = useMyUserIdStore((state) => state.myUserId)

  const {
    data: profile,
    isLoading: isLoadingProfile,
    isError: profileError,
  } = useMyPage(userId || '')

  const isMyPage = Number(userId) === myUserId

  const {
    data: point,
    isLoading: isLoadingPoints,
    error: pointsError,
  } = useQuery(pointQuries.point())

  if (isLoadingProfile || (isMyPage && isLoadingPoints)) return <Loading />
  if (profileError || (isMyPage && pointsError)) return <ErrorPage />
  if (!profile) return <ErrorPage />
  if (!userId) return <ErrorPage />

  return (
    <div>
      <Navigate />
      {isMyPage && point !== undefined ? (
        <Profile
          profile={profile}
          pointAmount={point}
          isMyPage={isMyPage}
          userId={Number(userId)}
        />
      ) : (
        <Profile
          profile={profile}
          isMyPage={isMyPage}
          userId={Number(userId)}
        />
      )}
      <Ranking userId={userId} />
      <OvenMenu userId={userId} isMyPage={isMyPage} />
    </div>
  )
}
