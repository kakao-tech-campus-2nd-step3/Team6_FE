import { BiCircle, BiSolidCheckCircle } from 'react-icons/bi'

import { Box, Flex } from '@chakra-ui/react'

import { AvatarLabelWithNavigate } from '@/components/AvatarLabel'
import { useFriendStore } from '@/stores/friends'
import { useChangedFriendsStore } from '@/stores/selected-friends'
import { Friend } from '@/types'

interface KakaoFriendListItemProps {
  friends: Friend[]
  isFriend: boolean
}

export const KakaoFriendListItem = ({
  friends,
  isFriend,
}: KakaoFriendListItemProps) => {
  const toggleIsFriend = useFriendStore((state) => state.toggleIsFriend)
  const setChangedFriends = useChangedFriendsStore(
    (state) => state.setChangedFriends
  )

  const onClickToggleButton = (friend: Friend) => {
    toggleIsFriend(friend.friendId)
    setChangedFriends(friend)
  }

  return (
    <Flex flexDirection="column" width="full" maxHeight="30rem">
      {friends.map((friend) => (
        <Flex
          key={friend.friendId}
          alignItems="center"
          justifyContent="space-between"
          paddingY={1.5}
        >
          <AvatarLabelWithNavigate
            isNavigate={false}
            avatarSrc={friend.imageUrl}
            label={friend.name}
          />
          {isFriend && (
            <Box
              _hover={{ color: 'black.800', cursor: 'pointer' }}
              onClick={() => onClickToggleButton(friend)}
            >
              <BiSolidCheckCircle size={24} />
            </Box>
          )}
          {!isFriend && (
            <Box
              color="black.300"
              _hover={{ color: 'black.400', cursor: 'pointer' }}
              onClick={() => onClickToggleButton(friend)}
            >
              <BiCircle size={24} />
            </Box>
          )}
        </Flex>
      ))}
    </Flex>
  )
}
