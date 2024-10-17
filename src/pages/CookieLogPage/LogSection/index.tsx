import { Flex, Heading } from '@chakra-ui/react'
import { format } from 'date-fns'

// import { useAnswerRecordPaging } from '@/api/services/answer/record-paging'
import { CookieLogText } from '@/components/CookieLogText'
import { AnswerRecord } from '@/types'
import { convertToDailyCookies } from '@/utils/answer/convertToDailyCookies'

export const LogSection = () => {
  const mockCookieLogs = convertToDailyCookies(mockData)

  /* 백엔드에서 dummy data 추가 후 변경
  const { answerRecords } = useAnswerRecordPaging({
    page: 0,
    size: 10,
  })
  const cookieLogs = convertToDailyCookies(answerRecords)
  */

  return (
    <Flex flexDirection="column" alignItems="center">
      {mockCookieLogs.map((today) => (
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
