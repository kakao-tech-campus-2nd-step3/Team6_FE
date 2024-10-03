import { Avatar, HStack, Text, Tooltip } from '@chakra-ui/react'

import { useSeletedGroupStore } from '@/stores/selected-group'
import { Group } from '@/types'

interface GroupListItemProps {
  group: Group
  selectedGroup: number | 'ALL'
}

export const GroupListItem = ({ group, selectedGroup }: GroupListItemProps) => {
  const setSeletedGroupId = useSeletedGroupStore((state) => state.setGroupId)

  return (
    <HStack
      paddingY={1.5}
      paddingX={2}
      width="full"
      _hover={{ background: 'brown.50', cursor: 'pointer' }}
      borderRight={selectedGroup === group.groupdId ? 3 : 0}
      background={selectedGroup === group.groupdId ? 'brown.50' : ''}
      borderRightColor="brown.400"
      borderRightStyle="solid"
      onClick={() => setSeletedGroupId(group.groupdId)}
    >
      <Tooltip
        label={`${group.groupName} 페이지`}
        aria-label="그룹 페이지로 이동하기"
        placement="top"
      >
        <Avatar width={7} height={7} src={group.groupdImageUrl} />
      </Tooltip>
      <Text>{group.groupName}</Text>
    </HStack>
  )
}
