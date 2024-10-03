import { Avatar, HStack, Text, Tooltip } from '@chakra-ui/react'

import { ActiveBrownBox } from '@/components/features/Layout/ActiveBrownBox'
import { useSeletedGroupStore } from '@/stores/selected-group'
import { Group } from '@/types'

interface GroupListItemProps {
  group: Group
  selectedGroup: number | 'ALL'
}

export const GroupListItem = ({ group, selectedGroup }: GroupListItemProps) => {
  const setSeletedGroupId = useSeletedGroupStore((state) => state.setGroupId)

  return (
    <ActiveBrownBox
      isActive={selectedGroup === group.groupdId}
      onClick={() => setSeletedGroupId(group.groupdId)}
    >
      <HStack>
        <Tooltip
          label={`${group.groupName} 페이지`}
          aria-label="그룹 페이지로 이동하기"
          placement="top"
        >
          <Avatar width={7} height={7} src={group.groupdImageUrl} />
        </Tooltip>
        <Text>{group.groupName}</Text>
      </HStack>
    </ActiveBrownBox>
  )
}
