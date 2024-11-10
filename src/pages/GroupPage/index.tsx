import { Suspense } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Box, Button, Card, Flex, Image, Text } from '@chakra-ui/react'

import { useGroupInfo, useGroupRanking } from '@/api/services/group/group.api'
import { useGroupRole } from '@/api/services/group/member.api'
import sadCookie from '@/assets/sadCookie.svg'
import { Cookies } from '@/components/Cookies'
import { Loading } from '@/components/Loading'
import { RankingGraph } from '@/components/RankingGraph'
import ErrorPage from '@/pages/ErrorPage'
import { colors } from '@/styles/colors'

import { ExitGroupButton } from './ExitGroupButton'
import Management from './Management'
import Navigate from './Navigate'
import Profile from './Profile'
import { useRankingData } from './Ranking'

export default function GroupPage() {
  const { groupId } = useParams<{ groupId: string }>()

  if (!groupId) return <ErrorPage />

  return (
    <div>
      <Navigate />
      <Suspense fallback={<Loading />}>
        <GroupSection groupId={Number(groupId)} />
      </Suspense>
    </div>
  )
}

interface GroupSectionProps {
  groupId: number
}

const GroupSection = ({ groupId }: GroupSectionProps) => {
  const { data: rankData } = useGroupRanking({
    groupId,
  })
  const { data: groupData } = useGroupInfo(groupId)
  const { data: role } = useGroupRole(groupId)

  const rankingData = useRankingData(rankData)

  if (!groupData || !role || !rankData) return <ErrorPage />

  const rankLength = rankingData.length === 0

  return (
    <Flex flexDirection="column">
      <Profile role={role} gprofile={groupData} />
      <Flex justifyContent="center" paddingY={3}>
        <Card
          width="full"
          marginX="23px"
          paddingY={4}
          borderRadius={10}
          shadow="none"
          border={`2.5px solid ${colors.brown[500]}`}
        >
          <Flex flexDirection="column" alignItems="center" paddingY={2} gap={4}>
            <Cookies width={16} />
            <Link to="/">
              <Button
                colorScheme="secondary"
                background="brown.500"
                fontSize="1rem"
              >
                {groupData.groupName} 멤버에게 쿠키 주기
              </Button>
            </Link>
          </Flex>
        </Card>
      </Flex>
      <Flex flexDirection="column" paddingTop={6} paddingX="30px">
        <Text fontWeight="bold" color="text">
          👑 쿠키 랭킹
        </Text>
        <Text fontSize="sm" color="text_secondary">
          가장 많이 쿠키를 주고 받은 사람 Top3
        </Text>
      </Flex>
      {rankLength ? (
        <Flex justifyContent="center" textAlign="center" margin="50px auto">
          <Image src={sadCookie} />
          <Box alignContent="center" marginLeft={10}>
            <Text color="text" fontWeight="500">
              아직
              <Text as="span" color="orange.600">
                &nbsp;랭킹
              </Text>
              이 없어요!
            </Text>
            <Text color="text_secondary" fontSize="small">
              친구와 함께 쿠키 주기에 참여해보세요
            </Text>
          </Box>
        </Flex>
      ) : (
        <Box padding="0 30px">
          <RankingGraph rank={rankingData} />
        </Box>
      )}
      {groupId && (
        <Management
          role={role}
          groupId={groupId}
          groupName={groupData.groupName}
        />
      )}
      <ExitGroupButton
        groupName={groupData.groupName}
        groupId={groupData.groupId}
        role={role}
      />
    </Flex>
  )
}
