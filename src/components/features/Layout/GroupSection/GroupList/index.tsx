import { Avatar, Flex, HStack, Text } from '@chakra-ui/react'

import { Group } from '@/types'

interface GroupListProps {
  groups: Group[]
}

export const GroupList = ({ groups }: GroupListProps) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="start"
      paddingX={2}
      overflowY="scroll"
      maxHeight="32rem"
      gap={2}
    >
      <Flex flexDirection="column">
        <Text fontSize="small" color="text_detail" paddingY={1}>
          모든 친구에게
        </Text>
        <HStack paddingY={1.5}>
          <Avatar width={7} height={7} />
          <Text>ALL</Text>
        </HStack>
      </Flex>
      <Flex flexDirection="column">
        <Text fontSize="small" color="text_detail" paddingY={1}>
          그룹 친구에게 - {groups.length}
        </Text>
        {groups.map((group) => (
          <HStack key={group.groupdId} paddingY={1.5}>
            <Avatar width={7} height={7} src={group.groupdImageUrl} />
            <Text>{group.groupName}</Text>
          </HStack>
        ))}
      </Flex>
    </Flex>
  )
}
