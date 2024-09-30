import { Avatar, HStack, Text, Tooltip } from '@chakra-ui/react'

import { Group } from '@/types'

interface GroupListItemProps {
  group: Group
}

export const GroupListItem = ({ group }: GroupListItemProps) => {
  return (
    <HStack
      paddingY={1.5}
      paddingX={2}
      width="full"
      _hover={{ background: 'brown.50', cursor: 'pointer' }}
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
