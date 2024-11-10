import { Suspense, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ErrorBoundary } from 'react-error-boundary'

import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from '@chakra-ui/react'

import { Loading } from '@/components/Loading'

import { CalendarSection } from './CalendarSection'
import { CalendarSkeleton } from './CalendarSection/CookieCalendar'
import { CookieRecordErrorFallback } from './CookieRecordErrorFallback'
import { CookieRecordHeader } from './CookieRecordHeader'
import { HintDrawer } from './HintDrawer'
import { LogSection } from './LogSection'
import {
  cookieLogTypes,
  useCookieLogSearchParams,
} from './hooks/useCookieLogSearchParams'

export default function CookieRecordPage() {
  const { setSearchParamType, getCurrentType } = useCookieLogSearchParams()
  const [tabIndex, setTabIndex] = useState(0)

  useEffect(() => {
    const currentType = getCurrentType()
    setTabIndex(cookieLogTypes.indexOf(currentType))
  }, [getCurrentType])

  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null)
  const hintDrawer = useDisclosure()
  const hintModal = useDisclosure()

  useEffect(() => {
    setPortalNode(document.getElementById('page-layout'))
  }, [])

  useEffect(() => {
    const element = document.getElementById('hint-drawer')

    const listener = (event: MouseEvent) => {
      if (
        !hintModal.isOpen &&
        element &&
        !element.contains(event.target as Node)
      ) {
        hintDrawer.onClose()
      }
    }

    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [hintDrawer, hintModal])

  return (
    <Flex flexDirection="column">
      <CookieRecordHeader />
      {portalNode &&
        createPortal(
          <HintDrawer isOpen={hintDrawer.isOpen} modal={hintModal} />,
          portalNode
        )}
      <Tabs
        variant="soft-rounded"
        colorScheme="secondary"
        size="sm"
        paddingTop={4}
        index={tabIndex}
        onChange={(index) => setTabIndex(index)}
      >
        <Flex justifyContent="center">
          <TabList
            background="white"
            width="fit-content"
            padding={1}
            rounded="full"
          >
            <Tab onClick={() => setSearchParamType('log')}>로그</Tab>
            <Tab onClick={() => setSearchParamType('calendar')}>캘린더</Tab>
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <ErrorBoundary FallbackComponent={CookieRecordErrorFallback}>
              <Suspense fallback={<Loading />}>
                <LogSection hintDrawer={hintDrawer} />
              </Suspense>
            </ErrorBoundary>
          </TabPanel>
          <TabPanel>
            <ErrorBoundary FallbackComponent={CookieRecordErrorFallback}>
              <Suspense
                fallback={
                  <Flex justifyContent="center">
                    <CalendarSkeleton />
                  </Flex>
                }
              >
                <CalendarSection hintDrawer={hintDrawer} />
              </Suspense>
            </ErrorBoundary>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}
