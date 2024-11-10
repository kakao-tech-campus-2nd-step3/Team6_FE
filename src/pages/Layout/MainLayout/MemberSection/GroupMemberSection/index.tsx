import { BiSolidGroup } from 'react-icons/bi'

import { Box, Flex } from '@chakra-ui/react'

import { useGrupMemberPagingSuspense } from '@/api/services/group/member.api'
import { AvatarLabelWithNavigate } from '@/components/AvatarLabelWithNavigate'
import { PageLayout } from '@/components/PageLayout'
import { DATA_ERROR_MESSAGES } from '@/constants/error-message'
import { useMembersLengthStore } from '@/stores/members-length'

interface GroupMemberSectionProps {
  groupId: number
}

export const GroupMemberSection = ({ groupId }: GroupMemberSectionProps) => {
  const { data } = useGrupMemberPagingSuspense({ groupId })
  const members = data?.pages.flatMap((page) => page.records)
  const membersLength = (data?.pages[0]?.records?.length ?? 0) - 1

  const setMembersLength = useMembersLengthStore(
    (state) => state.setMembersLength
  )

  setMembersLength(membersLength)

  if (!members) throw Error(DATA_ERROR_MESSAGES.MEMBER_NOT_FOUND)

  return (
    <PageLayout.SideSection SectionHeader={<GroupMemberHeader />}>
      <Flex flexDirection="column" width="full" maxHeight="30rem">
        {members.map((member) => (
          <Box
            key={member.userId}
            paddingY={1}
            paddingX={2}
            width="full"
            _hover={{ cursor: 'pointer', background: 'brown.50' }}
          >
            <AvatarLabelWithNavigate
              avatarSrc={member.memberImageUrl}
              label={member.userName}
              linkTo={`/mypage/${member.userId}`}
            />
          </Box>
        ))}
      </Flex>
    </PageLayout.SideSection>
  )
}

export const GroupMemberHeader = () => {
  return (
    <PageLayout.SideSection.SectionHeader
      Icon={BiSolidGroup}
      title="그룹 멤버"
    />
  )
}

export const GroupMemberSkeleton = () => {
  return (
    <PageLayout.SideSection SectionHeader={<GroupMemberHeader />}>
      <div />
    </PageLayout.SideSection>
  )
}
