import { Button, Flex, Text } from '@chakra-ui/react'

import { Friend } from '@/types'

import { KakaoFriendListItem } from './KakaoFriendListItem'

interface KakaoFriendListProps {
  friends: Friend[]
  setFriends: (friends: Friend[]) => void
}

export const KakaoFriendList = ({
  friends,
  setFriends,
}: KakaoFriendListProps) => {
  const friendList = friends.filter((friend) => friend.isFriend)
  const recommendList = friends.filter((friend) => !friend.isFriend)

  const toggleIsFriend = (friendId: number) => {
    const updatedFriends = friends.map((friend) =>
      friend.friendId === friendId
        ? { ...friend, isFriend: !friend.isFriend }
        : friend
    )

    setFriends(updatedFriends)
  }

  return (
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
          <Button variant="link" fontSize="small" colorScheme="primary">
            초기화
          </Button>
        </Flex>
        <KakaoFriendListItem
          friends={friendList}
          toggleIsFriend={toggleIsFriend}
          isFriend
        />
      </Flex>
      <Flex flexDirection="column">
        <Text fontSize="small" color="text_description" paddingY={1}>
          추천 친구 - {recommendList.length}
        </Text>
        <KakaoFriendListItem
          friends={recommendList}
          toggleIsFriend={toggleIsFriend}
          isFriend={false}
        />
      </Flex>
    </Flex>
  )
}
