import { useQueries } from '@tanstack/react-query'

import { getMyPage } from '@/api/services/profile/my-page.api'
import { GroupRankingItem, RankItem } from '@/types'

export function useRankingData(rankData: GroupRankingItem[]) {
  const profileQueries = useQueries({
    queries: rankData.map((item) => ({
      queryKey: ['myPage', item.userId],
      queryFn: () => getMyPage(item.userId.toString()),
    })),
  })

  const rankingData: RankItem[] = rankData.map((item, index) => {
    const profileData = profileQueries[index]?.data
    const userName = profileData?.name || ''
    const description = profileData?.description || '한 줄 소개가 없습니다'
    const imageUrl = profileData?.imageUrl

    return {
      rank: item.rank,
      count: item.count,
      title: userName,
      subtitle: description,
      imageSrc: imageUrl,
    }
  })

  return rankingData
}
