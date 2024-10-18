import { authorizationInstance } from '@/api/instance'
import { Friend } from '@/types'

type FriendsResponse = {
  friends: Friend[]
}

export const getFriends = async () => {
  const response =
    await authorizationInstance.get<FriendsResponse>('/api/friend')

  return response.data
}
