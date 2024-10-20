import { Flex, Heading } from '@chakra-ui/react'
import { format } from 'date-fns'

import { useAnswerRecordPaging } from '@/api/services/answer/record-paging/useAnswerRecordPaging'
import { convertToDailyCookies } from '@/api/utils/answer/convertToDailyCookies'
import { CookieLogText } from '@/components/CookieLogText'
import { IntersectionObserverLoader } from '@/components/IntersectionObserverLoader'

export const LogSection = () => {
  const { answerRecords, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useAnswerRecordPaging({})
  const cookieLogs = convertToDailyCookies(answerRecords)

  return (
    <Flex flexDirection="column" alignItems="center">
      {cookieLogs.map((today) => (
        <Flex
          key={format(today.createdAt, 'yyyy.MM.dd')}
          flexDirection="column"
          gap={1}
          paddingBottom={10}
        >
          <Flex justifyContent="center">
            <Heading size="sm">{format(today.createdAt, 'MM.dd')}</Heading>
          </Flex>
          <Flex flexDirection="column" gap={2}>
            {today.cookies.map((cookie) => (
              <CookieLogText
                key={cookie.answerId}
                logContent={cookie.questionContent}
                hintCount={cookie.hintCount}
              />
            ))}
          </Flex>
        </Flex>
      ))}
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
