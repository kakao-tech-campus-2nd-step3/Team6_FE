import { PageLayout } from '@/components/PageLayout'
import { useMemberTypeStore } from '@/stores/member-type'

import { FriendHeader } from './FriendHeader'
import { FriendSection } from './FriendSection'
import { SelectFreindHeader } from './SelectFriendHeader'
import { SelectFriendSection } from './SelectFriendSection'

export const MemberSection = () => {
  const memberType = useMemberTypeStore((state) => state.memberType)

  return (
    <>
      {memberType === 'FRIEND' && (
        <PageLayout.SideSection SectionHeader={<FriendHeader />}>
          <FriendSection />
        </PageLayout.SideSection>
      )}
      {memberType === 'KAKAO' && (
        <PageLayout.SideSection SectionHeader={<SelectFreindHeader />}>
          <SelectFriendSection />
        </PageLayout.SideSection>
      )}
    </>
  )
}
