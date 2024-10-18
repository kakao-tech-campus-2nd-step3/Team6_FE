import { useFriends } from '@/api/services/friend/useFriends'
import { PageLayout } from '@/components/PageLayout'

import { KakaoFriendList } from './KakaoFriendList'
import { SelectFreindHeader } from './SelectFriendHeader'

export const SelectFriendSection = () => {
  const { data, status, error } = useFriends()

  if (status === 'pending') return <div>loading...</div>

  if (error) return <div>{error.message}</div>

  return (
    <PageLayout.SideSection SectionHeader={<SelectFreindHeader />}>
      <KakaoFriendList friends={data.friends} />
    </PageLayout.SideSection>
  )
}
