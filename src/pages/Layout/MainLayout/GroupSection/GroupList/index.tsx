import { BiQuestionMark } from 'react-icons/bi'

import { Center, Flex, HStack, Text } from '@chakra-ui/react'

import { ActiveBrownBox } from '@/components/ActiveBrownBox'
import { AvatarLabelWithNavigate } from '@/components/AvatarLabel'
import { useSeletedGroupStore } from '@/stores/selected-group'
import { Group } from '@/types'

interface GroupListProps {
  groups: Group[]
}

export const GroupList = ({ groups }: GroupListProps) => {
  const groupId = useSeletedGroupStore((state) => state.groupId)
  const setSeletedGroup = useSeletedGroupStore((state) => state.setGroupId)

  return (
    <Flex
      flexDirection="column"
      alignItems="start"
      overflowY="scroll"
      maxHeight="32rem"
      gap={2}
    >
      <Flex flexDirection="column" width="full">
        <Text
          fontSize="small"
          color="text_description"
          paddingY={1}
          paddingX={2}
        >
          모든 친구에게
        </Text>
        <ActiveBrownBox
          isActive={groupId === 'ALL'}
          onClick={() => setSeletedGroup('ALL')}
        >
          <HStack>
            <Center background="primary" width={7} height={7} rounded="full">
              <BiQuestionMark size={20} color="white" />
            </Center>
            <Text>ALL</Text>
          </HStack>
        </ActiveBrownBox>
      </Flex>
      <Flex flexDirection="column" width="full">
        <Text
          fontSize="small"
          color="text_description"
          paddingY={1}
          paddingX={2}
        >
          그룹 친구에게
        </Text>
        {groups.map((group) => (
          <ActiveBrownBox
            key={group.groupdId}
            isActive={groupId === group.groupdId}
            onClick={() => setSeletedGroup(group.groupdId)}
          >
            <AvatarLabelWithNavigate
              isNavigate
              avatarSrc={group.groupdImageUrl}
              label={group.groupName}
              tooltipLabel={`${group.groupName} 페이지`}
              linkTo="/"
            />
          </ActiveBrownBox>
        ))}
      </Flex>
    </Flex>
  )
}
