import { Divider, Flex } from '@chakra-ui/react'

import { GroupHeader } from './GroupHeader'
import { GroupList } from './GroupList'

export const GroupSection = () => {
  return (
    <Flex
      flexDirection="column"
      background="white"
      width="200px"
      height="full"
      gap={1}
    >
      <GroupHeader />
      <Divider />
      <GroupList groups={mockGroupList} />
    </Flex>
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
