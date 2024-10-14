import {
  Center,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { answerQueries } from '@/api/services/answer/queries'
import { Loading } from '@/components/Loading'
import { AnswerRecord } from '@/types'
import { convertToDailyCookies } from '@/utils/answer/convertToDailyCookies'

import { CookieLogHeader } from './CookieLogHeader'
import { LogSection } from './LogSection'

export default function CookieLogPage() {
  const { data, status, error } = useQuery(
    answerQueries.record({ page: 0, size: 10, sort: [] })
  )
  console.log(data) // 백엔드에서 mock data 추가 후 변경
  const mockCookieLogs = convertToDailyCookies(mockData)

  if (status === 'pending') return <Loading />

  if (error) return <div>{error.message}</div>

  return (
    <Flex flexDirection="column">
      <CookieLogHeader />
      <Tabs
        variant="soft-rounded"
        colorScheme="secondary"
        size="sm"
        paddingTop={4}
      >
        <Flex justifyContent="center">
          <TabList
            background="white"
            width="fit-content"
            padding={1}
            rounded="full"
          >
            <Tab>로그</Tab>
            <Tab>캘린더</Tab>
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <LogSection cookieLogs={mockCookieLogs} />
          </TabPanel>
          <TabPanel>
            <Center>캘린더 섹션</Center>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

const mockData: AnswerRecord[] = [
  {
    answerId: 0,
    questionId: 0,
    questionContent: '대충 예시 질문1',
    hintCount: 0,
    createdAt: new Date('2024-10-14T10:00:00Z'),
  },
  {
    answerId: 1,
    questionId: 1,
    questionContent: '대충 예시 질문2',
    hintCount: 2,
    createdAt: new Date('2024-10-14T12:00:00Z'),
  },
  {
    answerId: 2,
    questionId: 0,
    questionContent: '대충 예시 질문1',
    hintCount: 1,
    createdAt: new Date('2024-10-15T10:00:00Z'),
  },
]
