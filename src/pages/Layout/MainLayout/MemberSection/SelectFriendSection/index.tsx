import { useEffect, useState } from 'react'

import { useFriends } from '@/api/services/friend/useFriends'
import { PageLayout } from '@/components/PageLayout'
import { Friend } from '@/types'

import { KakaoFriendList } from './KakaoFriendList'
import { SelectFreindHeader } from './SelectFriendHeader'

export const SelectFriendSection = () => {
  const { data, status, error } = useFriends()
  const [friends, setFriends] = useState<Friend[]>([])

  useEffect(() => {
    if (data) {
      setFriends(data.friends)
    }
  }, [data])

  if (status === 'pending') return <div>loading...</div>

  if (error) return <div>{error.message}</div>

  return (
    <PageLayout.SideSection SectionHeader={<SelectFreindHeader />}>
      <KakaoFriendList friends={friends} setFriends={(f) => setFriends(f)} />
    </PageLayout.SideSection>
  )
}
