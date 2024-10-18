import { fetchInstance } from '@/api/instance'
import { API_ERROR_MESSAGES } from '@/constants/error-message'
import { MyPageItem } from '@/types'

export const getMyPage = async (userId: string) => {
  try {
    const response = await fetchInstance.get<MyPageItem>(
      `/api/profile/${userId}`
    )

    return response.data
  } catch (error) {
    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }
}
