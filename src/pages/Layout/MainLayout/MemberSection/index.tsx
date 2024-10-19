import { Center, Text } from '@chakra-ui/react'

import { PageLayout } from '@/components/PageLayout'
import { useAuthTokenStore } from '@/stores/auth-token'
import { useMemberTypeStore } from '@/stores/member-type'

import { FriendHeader } from './FriendHeader'
import { FriendSection } from './FriendSection'
import { SelectFreindHeader } from './SelectFriendHeader'
import { SelectFriendSection } from './SelectFriendSection'

export const MemberSection = () => {
  const memberType = useMemberTypeStore((state) => state.memberType)
  const isLoggedIn = useAuthTokenStore((state) => state.isLoggedIn())

  if (!isLoggedIn)
    return (
      <PageLayout.SideSection SectionHeader={<FriendHeader />}>
        <Center paddingTop={2}>
          <Text fontSize="small">로그인 후 이용해주세요.</Text>
        </Center>
      </PageLayout.SideSection>
    )

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
