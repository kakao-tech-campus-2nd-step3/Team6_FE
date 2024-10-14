import { BiChevronLeft } from 'react-icons/bi'

import {
  Box,
  Center,
  Divider,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { answerQueries } from '@/api/services/answer/queries'
import { Loading } from '@/components/common/Loading'

export default function CookieLogPage() {
  const { data, status, error } = useQuery(
    answerQueries.record({ page: 0, size: 10, sort: [] })
  )
  console.log(data) // UI 추가 전, API 연결 테스트

  if (status === 'pending') return <Loading />

  if (error) return <div>{error.message}</div>

  return (
    <Flex flexDirection="column">
      <Box height={8} display="flex" flexDirection="row" width="full">
        <Center paddingX={2} _hover={{ cursor: 'pointer', color: 'black.700' }}>
          <BiChevronLeft size={20} />
        </Center>
        <Text height="100%" lineHeight="2" fontWeight="bold">
          쿠키 기록
        </Text>
      </Box>
      <Divider borderColor="brown.200" />
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
            <Center>로그 섹션</Center>
          </TabPanel>
          <TabPanel>
            <Center>캘린더 섹션</Center>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}
