import { useEffect } from 'react'

import { useFriends } from '@/api/services/friend/useFriends'
import { PageLayout } from '@/components/PageLayout'
import { useFriendStore } from '@/stores/friends'

import { KakaoFriendList } from './KakaoFriendList'
import { SelectFreindHeader } from './SelectFriendHeader'

export const SelectFriendSection = () => {
  const { data, status, error } = useFriends()
  const setFriends = useFriendStore((state) => state.setFriends)

  useEffect(() => {
    if (data) {
      setFriends(data.friends)
    }
  }, [data, setFriends])

  if (status === 'pending') return <div>loading...</div>

  if (error) return <div>{error.message}</div>

  return (
    <PageLayout.SideSection SectionHeader={<SelectFreindHeader />}>
      <KakaoFriendList initialfriends={data.friends} />
    </PageLayout.SideSection>
  )
}
