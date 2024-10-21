import { PageLayout } from '@/components/PageLayout'

import { FriendHeader } from './FriendHeader'
import { FriendList } from './FriendList'

export const FriendSection = () => {
  return (
    <PageLayout.SideSection SectionHeader={<FriendHeader />}>
      <FriendList friends={mockFriendList} />
    </PageLayout.SideSection>
  )
}

export const FriendSectionSkeleton = () => {
  return (
    <PageLayout.SideSection SectionHeader={<FriendHeader />}>
      <div />
    </PageLayout.SideSection>
  )
}

const mockFriendList = [
  {
    friendId: 1,
    name: '김아진',
    imageUrl: '',
    isFriend: true,
  },
  {
    friendId: 2,
    name: '안희정',
    imageUrl: '',
    isFriend: true,
  },
  {
    friendId: 3,
    name: '정솔빈',
    imageUrl: '',
    isFriend: true,
  },
]
