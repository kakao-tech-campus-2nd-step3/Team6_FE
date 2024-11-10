import { Box, Flex, Heading } from '@chakra-ui/react'
import { format } from 'date-fns'

import Cookie1 from '@/assets/cookie1.svg'
import Cookie2 from '@/assets/cookie2.svg'
import Cookie3 from '@/assets/cookie3.svg'
import Cookie4 from '@/assets/cookie4.svg'
import { SelectedAnswer } from '@/stores/selected-answer'
import { DailyCookie } from '@/types'

import { CookieLogText } from './CookieLogText'

const cookieImages = [Cookie1, Cookie2, Cookie3, Cookie4]

interface CookieLogListProps {
  cookieLogs: DailyCookie[]
  onClickCookieLog: ({
    questionContent,
    createdAt,
    answerId,
    hintCount,
  }: SelectedAnswer) => void
}

export const CookieLogList = ({
  cookieLogs,
  onClickCookieLog,
}: CookieLogListProps) => {
  return (
    <div>
      {cookieLogs.map((curDay) => (
        <Flex
          key={format(curDay.createdAt, 'yyyy.MM.dd')}
          flexDirection="column"
          gap={1}
          paddingBottom={10}
        >
          <Flex justifyContent="center">
            <Heading size="sm">{format(curDay.createdAt, 'MM.dd')}</Heading>
          </Flex>
          <Flex flexDirection="column" gap={2}>
            {curDay.cookies.map((cookie, index) => (
              <Flex key={cookie.answerId} flexDirection="column">
                <CookieLogText
                  logContent={cookie.questionContent}
                  hintCount={cookie.hintCount}
                  onClick={() =>
                    onClickCookieLog({
                      questionContent: cookie.questionContent,
                      createdAt: curDay.createdAt,
                      answerId: cookie.answerId,
                      hintCount: cookie.hintCount,
                    })
                  }
                  imageSrc={cookieImages[cookie.answerId % 4]}
                />
                {index !== curDay.cookies.length - 1 && index % 5 === 4 && (
                  <Box height={5} />
                )}
              </Flex>
            ))}
          </Flex>
        </Flex>
      ))}
    </div>
  )
}
