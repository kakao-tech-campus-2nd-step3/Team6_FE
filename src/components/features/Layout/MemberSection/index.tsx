import { Box } from '@chakra-ui/react'

import { useMemberTypeStore } from '@/stores/member-type'

import { FriendSection } from './FriendSection'
import { SelectFriendSection } from './SelectFriendSection'

export const MemberSection = () => {
  const memberType = useMemberTypeStore((state) => state.memberType)

  return (
    <Box background="white" width="200px" height="full" color="text">
      {memberType === 'FRIEND' && <FriendSection />}
      {memberType === 'KAKAO' && <SelectFriendSection />}
    </Box>
  )
}
