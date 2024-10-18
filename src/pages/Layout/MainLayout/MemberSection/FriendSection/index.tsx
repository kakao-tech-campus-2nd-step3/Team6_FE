import { useMyFriends } from '@/api/services/friend/useFriends'
import { PageLayout } from '@/components/PageLayout'

import { FriendHeader } from './FriendHeader'
import { FriendList } from './FriendList'

export const FriendSection = () => {
  const { data: friends, status, error } = useMyFriends()

  if (status === 'pending') return <div>loading...</div>

  if (error) return <div>{error.message}</div>

  return (
    <PageLayout.SideSection SectionHeader={<FriendHeader />}>
      <FriendList friends={friends} />
    </PageLayout.SideSection>
  )
}
