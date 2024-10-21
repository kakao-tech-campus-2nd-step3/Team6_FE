import { fetchInstance } from '@/api/instance'
import { MyPageItem } from '@/types'

export const getMyPage = async (userId: string) => {
  const response = await fetchInstance.get<MyPageItem>(`/api/profile/${userId}`)

  return response.data
}
