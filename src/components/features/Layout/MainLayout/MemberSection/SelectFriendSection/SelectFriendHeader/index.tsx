import { BiUserCheck } from 'react-icons/bi'

import { Box, Text } from '@chakra-ui/react'

import { PageLayout } from '@/components/common/PageLayout'
import { useMemberTypeStore } from '@/stores/member-type'

export const SelectFreindHeader = () => {
  const setMemberType = useMemberTypeStore((state) => state.setMemberType)

  return (
    <PageLayout.SideSection.SectionHeader
      Icon={BiUserCheck}
      title="친구 설정"
      Extentions={
        <Box
          _hover={{ color: 'black.800', cursor: 'pointer' }}
          onClick={() => setMemberType('FRIEND')}
        >
          <Text fontSize="small" fontWeight="bold">
            설정 완료
          </Text>
        </Box>
      }
    />
  )
}
