import { Flex, Heading } from '@chakra-ui/react'
import { format } from 'date-fns'

import { useAnswerRecordPaging } from '@/api/services/answer/record-paging'
import { CookieLogText } from '@/components/CookieLogText'
import { convertToDailyCookies } from '@/utils/answer/convertToDailyCookies'

export const LogSection = () => {
  const { answerRecords } = useAnswerRecordPaging({})
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
      <div>test</div>
    </Flex>
  )
}
