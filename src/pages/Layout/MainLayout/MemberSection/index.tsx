import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { Center } from '@chakra-ui/react'

import { PageLayout } from '@/components/PageLayout'
import { useAuthTokenStore } from '@/stores/auth-token'
import { useMemberTypeStore } from '@/stores/member-type'

import { FriendSection, FriendSectionSkeleton } from './FriendSection'
import { FriendHeaderSkeleton } from './FriendSection/FriendHeader'
import { MemberErrorFallback } from './MemberErrorFallback'
import {
  SelectFreindSectionSkeleton,
  SelectFriendSection,
} from './SelectFriendSection'

export const MemberSection = () => {
  const memberType = useMemberTypeStore((state) => state.memberType)
  const isLoggedIn = useAuthTokenStore((state) => state.isLoggedIn())

  if (!isLoggedIn)
    return (
      <PageLayout.SideSection SectionHeader={<FriendHeaderSkeleton />}>
        <Center paddingTop={2} fontSize="small">
          로그인 후 이용해주세요.
        </Center>
      </PageLayout.SideSection>
    )

  if (memberType === 'KAKAO') {
    return (
      <ErrorBoundary FallbackComponent={MemberErrorFallback}>
        <Suspense fallback={<SelectFreindSectionSkeleton />}>
          <SelectFriendSection />
        </Suspense>
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary FallbackComponent={MemberErrorFallback}>
      <Suspense fallback={<FriendSectionSkeleton />}>
        <FriendSection />
      </Suspense>
    </ErrorBoundary>
  )
}
