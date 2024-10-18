import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import {
  Center,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'

import { Loading } from '@/components/Loading'

import { CookieRecordErrorFallback } from './CookieRecordErrorFallback'
import { CookieRecordHeader } from './CookieRecordHeader'
import { LogSection } from './LogSection'

export default function CookieRecordPage() {
  return (
    <Flex flexDirection="column">
      <CookieRecordHeader />
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
        <ErrorBoundary FallbackComponent={CookieRecordErrorFallback}>
          <Suspense fallback={<Loading />}>
            <TabPanels>
              <TabPanel>
                <LogSection />
              </TabPanel>
              <TabPanel>
                <Center>캘린더 섹션</Center>
              </TabPanel>
            </TabPanels>
          </Suspense>
        </ErrorBoundary>
      </Tabs>
    </Flex>
  )
}
