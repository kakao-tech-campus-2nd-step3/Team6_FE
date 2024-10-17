import { authorizationInstance } from '@/api/instance'
import { API_ERROR_MESSAGES } from '@/constants/error-message'

export const fetchKakaoFriends = async () => {
  try {
    const response = await authorizationInstance.get('/api/friend')
    return response.data.friends
  } catch (error) {
    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }
}
