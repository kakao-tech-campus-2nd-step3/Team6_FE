import { AxiosError } from 'axios'

import { authorizationInstance } from '@/api/instance'
import { API_ERROR_MESSAGES } from '@/constants/error-message'
import { Friend } from '@/types'

type FriendsResponse = {
  friends: Friend[]
}

export const getFriends = async () => {
  try {
    const response =
      await authorizationInstance.get<FriendsResponse>('/api/friend')

    return response.data
  } catch (error) {
    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }
}

type FriendId = {
  id: number
}

type AddFriendRequestBody = {
  friends: FriendId[]
}

export const addFriends = async (friends: AddFriendRequestBody) => {
  try {
    await authorizationInstance.post('/api/friend', friends)
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.status === 400) {
        throw new Error(API_ERROR_MESSAGES.FRIEND_CANNOT_BE_EMPTY)
      }
    }

    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }
}

export const fetchKakaoFriends = async () => {
  try {
    const response = await authorizationInstance.get('/api/friend')

    return response.data.friends
  } catch (error) {
    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }
}
