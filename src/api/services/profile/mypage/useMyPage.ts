import { useQuery } from '@tanstack/react-query'

import { getMyPage } from '.'

export const useMyPage = (userId: string) => {
  return useQuery({
    queryKey: ['myPage', userId],
    queryFn: () => getMyPage(userId),
  })
}
