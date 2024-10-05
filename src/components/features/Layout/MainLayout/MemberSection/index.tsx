import { useMemberTypeStore } from '@/stores/member-type'

import { FriendSection } from './FriendSection'
import { SelectFriendSection } from './SelectFriendSection'

export const MemberSection = () => {
  const memberType = useMemberTypeStore((state) => state.memberType)

  return (
    <>
      {memberType === 'FRIEND' && <FriendSection />}
      {memberType === 'KAKAO' && <SelectFriendSection />}
    </>
  )
}
