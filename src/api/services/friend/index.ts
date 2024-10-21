import { authorizationInstance } from '@/api/instance'

export const fetchKakaoFriends = async () => {
  const response = await authorizationInstance.get('/api/friend')

  return response.data.friends
}
