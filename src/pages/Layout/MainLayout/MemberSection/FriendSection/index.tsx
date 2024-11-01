import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { useSuspenseQuery } from '@tanstack/react-query'

import { friendsQueries } from '@/api/services/friend/useFriends'
import { AvatarLabelWithNavigate } from '@/components/AvatarLabel'
import { PageLayout } from '@/components/PageLayout'

import { FriendHeader, FriendHeaderSkeleton } from './FriendHeader'

export const FriendSection = () => {
  const { data: friends } = useSuspenseQuery(friendsQueries.myFriends())

  return (
    <PageLayout.SideSection SectionHeader={<FriendHeader />}>
      <Text fontSize="small" color="text_description" paddingY={1} paddingX={2}>
        친한 친구 - {friends.length}
      </Text>
      <Flex flexDirection="column" width="full" maxHeight="30rem">
        {friends.map((friend) => (
          <Box key={friend.friendId} paddingY={1} paddingX={2} width="full">
            <AvatarLabelWithNavigate
              isNavigate
              avatarSrc={friend.imageUrl}
              label={friend.name}
              linkTo={`/mypage/${friend.friendId}`}
              tooltipLabel={`${friend.name} 페이지`}
            />
          </Box>
        ))}
      </Flex>
    </PageLayout.SideSection>
  )
}

export const FriendSectionSkeleton = () => {
  return (
    <PageLayout.SideSection SectionHeader={<FriendHeaderSkeleton />}>
      <Center>loading...</Center>
    </PageLayout.SideSection>
  )
}
