import { Flex, Text } from '@chakra-ui/react'

import { useGroupPaging } from '@/api/services/group/useGroupPaging'
import { ActiveBrownBox } from '@/components/ActiveBrownBox'
import { AvatarLabelWithNavigate } from '@/components/AvatarLabel'
import { IntersectionObserverLoader } from '@/components/IntersectionObserverLoader'
import { DATA_ERROR_MESSAGES } from '@/constants/error-message'
import { useSeletedGroupStore } from '@/stores/selected-group'

export const GroupList = () => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useGroupPaging({})

  const groupId = useSeletedGroupStore((state) => state.groupId)
  const setSeletedGroup = useSeletedGroupStore((state) => state.setGroupId)

  const groups = data?.pages.flatMap((page) => page.groups)

  if (!groups?.length) throw new Error(DATA_ERROR_MESSAGES.GROUP_NOT_FOUND)

  return (
    <Flex flexDirection="column" width="full">
      <Text fontSize="small" color="text_description" paddingY={1} paddingX={2}>
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
      {hasNextPage && (
        <IntersectionObserverLoader
          callback={() => {
            if (!isFetchingNextPage) {
              fetchNextPage()
            }
          }}
        />
      )}
    </Flex>
  )
}
