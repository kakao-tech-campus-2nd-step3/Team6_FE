import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { DATA_ERROR_MESSAGES } from '@/constants/error-message'
import { PagingRequestParams } from '@/types'

import { getAnswerRecordPaging } from './index'

interface AnswerRecordPagingProps extends PagingRequestParams {
  initPageToken?: string
}

export const useAnswerRecordPaging = ({
  size = 10,
  sort,
  initPageToken,
}: AnswerRecordPagingProps) => {
  const {
    data,
    status,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery({
    queryKey: ['answer', 'record', initPageToken],
    queryFn: ({ pageParam = initPageToken }) =>
      getAnswerRecordPaging({ page: pageParam, size, sort }),
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  })

  const answerRecords = data?.pages.flatMap((page) => page.records)

  if (!answerRecords.length)
    throw new Error(DATA_ERROR_MESSAGES.ANSWER_RECORD_NOT_FOUND)

  return {
    answerRecords,
    status,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }
}
