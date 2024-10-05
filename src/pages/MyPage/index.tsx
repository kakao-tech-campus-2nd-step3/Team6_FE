import { Box } from '@chakra-ui/react'

import { RankingGraph } from '@/components/common/RankingGraph'

import Navigate from './Navigate'
import OvenMenu from './OvenMenu'
import Profile from './Profile'

// ranking Component dummy data
const dummyRankData = [
  {
    imageSrc:
      'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
    title: '경북대 컴퓨터학부 21',
    subtitle: '코드를 가장 많이 참고했던 사람',
    amount: 100,
    ranking: 1 as const,
  },
  {
    imageSrc:
      'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
    title: '메이플랜드 소통방',
    subtitle: '아이디어를 가장 많이 내는 사람',
    amount: 80,
    ranking: 2 as const,
  },
  {
    imageSrc:
      'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
    title: '카테캠 2기 쿠키즈',
    subtitle: '카테캠이 끝나고도 같이 프로젝트를 해보고싶은 사람',
    amount: 60,
    ranking: 3 as const,
  },
]

export default function MyPage() {
  return (
    <div>
      <Navigate />
      <Profile />
      <Box p="0 30px">
        <RankingGraph rank={dummyRankData} />
      </Box>
      <OvenMenu />
    </div>
  )
}
