import { useQuery } from '@tanstack/react-query'

import { fetchKakaoFriends } from '.'

export const useKakaoFriends = () => {
  return useQuery({
    queryKey: ['kakaoFriends'],
    queryFn: fetchKakaoFriends,
  })
}
