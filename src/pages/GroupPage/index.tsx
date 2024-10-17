import { Box, Text } from '@chakra-ui/react'

import { RankingGraph } from '@/components/RankingGraph'

import Management from './Management'
import Navigate from './Navigate'
import Profile from './Profile'

const dummyRankData = [
  {
    imageSrc:
      'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
    title: '김아진',
    subtitle: '코드를 가장 많이 참고했던 사람',
    amount: 100,
    ranking: 1 as const,
  },
  {
    imageSrc:
      'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
    title: '안희정',
    subtitle: '아이디어를 가장 많이 내는 사람',
    amount: 80,
    ranking: 2 as const,
  },
  {
    imageSrc:
      'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
    title: '정솔빈',
    subtitle: '카테캠이 끝나고도 같이 프로젝트를 해보고싶은 사람',
    amount: 60,
    ranking: 3 as const,
  },
]

const userRole = 'leader' // "leader" or "member"

export default function GroupPage() {
  return (
    <div>
      <Navigate />
      <Profile role={userRole} />
      <Box p="0 30px">
        <Text fontSize="md" fontWeight="bold" mb="2">
          랭킹
        </Text>
        <Text fontSize="xs" color="text_description">
          쿠키를 가장 많이 주고 받은 멤버를 확인해보세요
        </Text>
        <RankingGraph rank={dummyRankData} />
      </Box>
      <Management role={userRole} />
    </div>
  )
}
