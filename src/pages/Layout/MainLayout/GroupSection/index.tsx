import { BiDonateHeart } from 'react-icons/bi'

import { PageLayout } from '@/components/PageLayout'

import { GroupList } from './GroupList'

export const GroupSection = () => {
  return (
    <PageLayout.SideSection
      SectionHeader={
        <PageLayout.SideSection.SectionHeader
          Icon={BiDonateHeart}
          title="쿠키 주기"
        />
      }
    >
      <GroupList groups={mockGroupList} />
    </PageLayout.SideSection>
  )
}

export const GroupSectionSkeleton = () => {
  return (
    <PageLayout.SideSection
      SectionHeader={
        <PageLayout.SideSection.SectionHeader
          Icon={BiDonateHeart}
          title="쿠키 주기"
        />
      }
    >
      <div />
    </PageLayout.SideSection>
  )
}

const mockGroupList = [
  {
    groupdId: 1,
    groupName: '최우수수수퍼노바',
    groupdImageUrl: '',
    groupDescription: '안녕하세요',
    groupMemberCount: 10,
  },
  {
    groupdId: 2,
    groupName: '일이삼사오육칠팔구십',
    groupdImageUrl: '',
    groupDescription: '안녕하세요',
    groupMemberCount: 10,
  },
  {
    groupdId: 3,
    groupName: '카테캠 2기',
    groupdImageUrl: '',
    groupDescription: '안녕하세요',
    groupMemberCount: 10,
  },
]
