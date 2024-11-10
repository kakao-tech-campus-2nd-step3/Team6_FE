import { useQuery } from '@tanstack/react-query'

import { authorizationInstance, fetchInstance } from '@/api/instance'
import { MyPageItem, UserRankingItem } from '@/types'

export const getMyPage = async (userId: string) => {
  const response = await fetchInstance.get<MyPageItem>(`/api/profile/${userId}`)

  return response.data
}

export const useMyPage = (userId: string) => {
  return useQuery({
    queryKey: ['myPage', userId],
    queryFn: () => getMyPage(userId),
  })
}

type UploadProfileBgRequest = {
  image: File
}
export const uploadProfileBg = async ({ image }: UploadProfileBgRequest) => {
  const formData = new FormData()
  formData.append('image', image)

  await authorizationInstance.patch('/api/profile/bg/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export type MyRankingResponse = {
  ranks: UserRankingItem[]
}

const getMyRanking = async (userId: string) => {
  const response = await fetchInstance.get<MyRankingResponse>(
    `/api/ranking/${userId}`
  )

  return response.data.ranks
}

export const useMyRanking = (userId: string) => {
  return useQuery({
    queryKey: ['myRanking', userId],
    queryFn: () => getMyRanking(userId),
  })
}

export type PatchProfileDescriptionRequest = {
  description: string
}

export const patchProfileDescription = async ({
  description,
}: PatchProfileDescriptionRequest) => {
  await authorizationInstance.patch('/api/profile/modify', {
    description,
  })
}
