import { format } from 'date-fns'

import { AnswerRecord, CookieLog, DailyCookie } from '@/types'

export function convertToDailyCookies(
  answerRecords: AnswerRecord[]
): DailyCookie[] {
  const dailyCookiesMap: { [key: string]: DailyCookie } = {}

  answerRecords.forEach((record) => {
    const dateKey = format(record.createdAt, 'yyyy-MM-dd')

    if (!dailyCookiesMap[dateKey]) {
      dailyCookiesMap[dateKey] = {
        createdAt: record.createdAt,
        cookies: [],
      }
    }

    const cookieLog: CookieLog = {
      answerId: record.answerId,
      questionId: record.questionId,
      questionContent: record.questionContent,
      hintCount: record.hintCount,
    }

    dailyCookiesMap[dateKey].cookies.push(cookieLog)
  })

  return Object.values(dailyCookiesMap)
}
