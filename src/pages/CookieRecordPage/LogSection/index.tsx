import { Flex } from '@chakra-ui/react'

import { useAnswerRecordPaging } from '@/api/services/answer/record.api'
import { convertToDailyCookies } from '@/api/utils/answer/convertToDailyCookies'
import { IntersectionObserverLoader } from '@/components/IntersectionObserverLoader'
import { DATA_ERROR_MESSAGES } from '@/constants/error-message'
import {
  SelectedAnswer,
  useSelectedAnswerStore,
} from '@/stores/selected-answer'
import { Modal } from '@/types'

import { CookieLogList } from './CookieLogList'

interface LogSectionProps {
  hintDrawer: Modal
}

export const LogSection = ({ hintDrawer }: LogSectionProps) => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useAnswerRecordPaging({ direction: 'DESC' })
  const answerRecords = data?.pages.flatMap((page) => page.records)

  if (!answerRecords.length) {
    throw new Error(DATA_ERROR_MESSAGES.ANSWER_RECORD_NOT_FOUND)
  }

  const cookieLogs = convertToDailyCookies(answerRecords)
  const setSelectedAnswer = useSelectedAnswerStore(
    (state) => state.setSelectedAnswer
  )

  const onClickCookieLog = (selectedAnswer: SelectedAnswer) => {
    hintDrawer.onOpen()
    setSelectedAnswer(selectedAnswer)
  }

  return (
    <Flex flexDirection="column" alignItems="center">
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
