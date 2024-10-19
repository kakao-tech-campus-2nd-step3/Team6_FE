import { useEffect } from 'react'

import { Center } from '@chakra-ui/react'

import { useFriends } from '@/api/services/friend/useFriends'
import { useFriendStore } from '@/stores/friends'

import { KakaoFriendList } from './KakaoFriendList'

export const SelectFriendSection = () => {
  const { data, status, error } = useFriends()
  const setFriends = useFriendStore((state) => state.setFriends)

  useEffect(() => {
    if (data) {
      setFriends(data.friends)
    }
  }, [data, setFriends])

  if (status === 'pending') {
    return <Center paddingTop={2}>loading...</Center>
  }

  if (error) {
    return <Center paddingTop={2}>{error.message}</Center>
  }

  return <KakaoFriendList initialfriends={data.friends} />
}
