import { PageLayout } from '@/components/PageLayout'

import { KakaoFriendList } from './KakaoFriendList'
import { SelectFreindHeader } from './SelectFriendHeader'

export const SelectFriendSection = () => {
  return (
    <PageLayout.SideSection SectionHeader={<SelectFreindHeader />}>
      <KakaoFriendList friends={mockFriendList} />
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
  {
    friendId: 4,
    name: '권다운',
    imageUrl: '',
    isFriend: false,
  },
  {
    friendId: 5,
    name: '신형진',
    imageUrl: '',
    isFriend: false,
  },
  {
    friendId: 6,
    name: '김건',
    imageUrl: '',
    isFriend: false,
  },
  {
    friendId: 7,
    name: '유승욱',
    imageUrl: '',
    isFriend: false,
  },
]
