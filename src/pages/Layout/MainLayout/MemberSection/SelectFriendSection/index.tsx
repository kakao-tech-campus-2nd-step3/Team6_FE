import { useEffect } from 'react'

import { Button, Center, Flex, Text } from '@chakra-ui/react'

import { useFriendsAndMyFriends } from '@/api/services/friend/useFriends'
import { PageLayout } from '@/components/PageLayout'
import { useFriendStore } from '@/stores/friends'

import { MemberList } from './MemberList'
import {
  SelectFreindHeader,
  SelectFreindHeaderSkeleton,
} from './SelectFriendHeader'

export const SelectFriendSection = () => {
  const { friends, myFriends } = useFriendsAndMyFriends()

  const setFriends = useFriendStore((state) => state.setFriends)
  const friendList = useFriendStore((state) => state.friendList())
  const recommendList = useFriendStore((state) => state.recommendList())

  useEffect(() => {
    if (friends) {
      setFriends(friends)
    }
  }, [friends, setFriends])

  return (
    <PageLayout.SideSection
      SectionHeader={<SelectFreindHeader initialfriends={myFriends} />}
    >
      <Flex
        flexDirection="column"
        paddingLeft={2}
        paddingRight={3}
        gap={4}
        overflowY="scroll"
      >
        <Flex flexDirection="column">
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="small" color="text_description" paddingY={1}>
              친한 친구 - {friendList.length}
            </Text>
            <Button
              variant="link"
              fontSize="small"
              colorScheme="primary"
              onClick={() => setFriends(friends)}
            >
              초기화
            </Button>
          </Flex>
          <MemberList members={friendList} isFriend />
        </Flex>
        <Flex flexDirection="column">
          <Text fontSize="small" color="text_description" paddingY={1}>
            추천 친구 - {recommendList.length}
          </Text>
          <MemberList members={recommendList} isFriend={false} />
        </Flex>
      </Flex>
    </PageLayout.SideSection>
  )
}

export const SelectFreindSectionSkeleton = () => {
  return (
    <PageLayout.SideSection SectionHeader={<SelectFreindHeaderSkeleton />}>
      <Center paddingTop={2}>loading...</Center>
    </PageLayout.SideSection>
  )
}
