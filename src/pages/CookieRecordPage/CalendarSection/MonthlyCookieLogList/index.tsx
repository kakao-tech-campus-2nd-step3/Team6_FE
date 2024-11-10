import { Flex, Text } from '@chakra-ui/react'
import { format } from 'date-fns'

import { useAnswerRecordPaging } from '@/api/services/answer/record.api'
import { convertToDailyCookies } from '@/api/utils/answer/convertToDailyCookies'
import { IntersectionObserverLoader } from '@/components/IntersectionObserverLoader'
import {
  SelectedAnswer,
  useSelectedAnswerStore,
} from '@/stores/selected-answer'
import { Modal } from '@/types'

import { CookieLogList } from '../../LogSection/CookieLogList'

interface MonthlyCookieLogListProps {
  hintDrawer: Modal
  curMonth: string
}

export const MonthlyCookieLogList = ({
  hintDrawer,
  curMonth,
}: MonthlyCookieLogListProps) => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useAnswerRecordPaging({ size: 20, date: curMonth })

  const answerRecords = data?.pages.flatMap((page) => page.records)

  const setSelectedAnswer = useSelectedAnswerStore(
    (state) => state.setSelectedAnswer
  )

  const onClickCookieLog = (selectedAnswer: SelectedAnswer) => {
    hintDrawer.onOpen()
    setSelectedAnswer(selectedAnswer)
  }

  if (!answerRecords.length) {
    return (
      <Text paddingTop={6}>
        {format(curMonth, 'M')}월 쿠키 기록이 없습니다.
      </Text>
    )
  }

  const cookieLogs = convertToDailyCookies(answerRecords)

  return (
    <Flex paddingTop={10} flexDirection="column" alignItems="center">
      <CookieLogList
        cookieLogs={cookieLogs}
        onClickCookieLog={onClickCookieLog}
      />
      {hasNextPage && (
        <IntersectionObserverLoader
          callback={() => {
            if (!isFetchingNextPage) {
              fetchNextPage()
            }
          }}
        />
      )}
    </Flex>
  )
}
