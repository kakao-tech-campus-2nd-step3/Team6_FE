import { queryOptions } from '@tanstack/react-query'

import { getAnswerRecordPaging } from './index'

interface AnswerRecordProps {
  page: number
  size: number
  sort?: string[]
}

export const answerQueries = {
  all: () => ['answer'],
  record: ({ page, size, sort }: AnswerRecordProps) =>
    queryOptions({
      queryKey: [...answerQueries.all()],
      queryFn: () => getAnswerRecordPaging({ page, size, sort }),
    }),
}
