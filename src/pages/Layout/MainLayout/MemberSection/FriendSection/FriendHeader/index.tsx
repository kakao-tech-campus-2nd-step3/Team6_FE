import { BiHeart, BiUser } from 'react-icons/bi'

import { Box } from '@chakra-ui/react'

import { PageLayout } from '@/components/PageLayout'
import { useMemberTypeStore } from '@/stores/member-type'

export const FriendHeader = () => {
  const setMemberType = useMemberTypeStore((state) => state.setMemberType)

  return (
    <PageLayout.SideSection.SectionHeader
      Icon={BiUser}
      title="친구 목록"
      Extentions={
        <Box
          color="black.600"
          _hover={{ color: 'text', cursor: 'pointer' }}
          onClick={() => setMemberType('KAKAO')}
        >
          <BiHeart size={20} />
        </Box>
      }
    />
  )
}
