import { useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useParams, useSearchParams } from 'react-router-dom'

import { Flex, Heading } from '@chakra-ui/react'

import ErrorPage from '@/pages/ErrorPage'
import { useInviteUrl } from '@/stores/invite-url'

import { InviteCard } from './InviteCard'
import { InviteErrorFallback } from './InviteErrorFallback'

export default function InvitePage() {
  const { groupId } = useParams<{ groupId: string }>()
  const [searchParams] = useSearchParams()

  const setInviteUrl = useInviteUrl((state) => state.setInviteUrl)
  const inviteCode = searchParams.get('invite-code')

  useEffect(() => {
    if (inviteCode) {
      setInviteUrl(window.location.href)
    }
  }, [inviteCode, setInviteUrl])

  if (!inviteCode) return <ErrorPage />

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="full"
      gap={4}
    >
      <Heading color="brown.600" size="2xl" fontWeight="800">
        Whokie 초대장
      </Heading>
      <ErrorBoundary fallbackRender={InviteErrorFallback}>
        <InviteCard groupId={Number(groupId)} inviteCode={inviteCode} />
      </ErrorBoundary>
    </Flex>
  )
}
