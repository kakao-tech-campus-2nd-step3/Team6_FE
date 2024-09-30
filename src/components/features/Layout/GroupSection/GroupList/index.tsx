import { BiQuestionMark } from 'react-icons/bi'

import { Center, Flex, HStack, Text } from '@chakra-ui/react'

import { Group } from '@/types'

import { GroupListItem } from './GroupListItem'

interface GroupListProps {
  groups: Group[]
}

export const GroupList = ({ groups }: GroupListProps) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="start"
      overflowY="scroll"
      maxHeight="32rem"
      gap={2}
    >
      <Flex flexDirection="column" width="full">
        <Text fontSize="small" color="text_detail" paddingY={1} paddingX={2}>
          모든 친구에게
        </Text>
        <HStack
          paddingY={1.5}
          paddingX={2}
          width="full"
          _hover={{ background: 'brown.50', cursor: 'pointer' }}
        >
          <Center background="primary" width={7} height={7} rounded="full">
            <BiQuestionMark size={20} color="white" />
          </Center>
          <Text>ALL</Text>
        </HStack>
      </Flex>
      <Flex flexDirection="column" width="full">
        <Text fontSize="small" color="text_detail" paddingY={1} paddingX={2}>
          그룹 친구에게
        </Text>
        {groups.map((group) => (
          <GroupListItem key={group.groupdId} group={group} />
        ))}
      </Flex>
    </Flex>
  )
}
