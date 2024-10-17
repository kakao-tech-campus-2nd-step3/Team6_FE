import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'
import {
  API_ERROR_MESSAGES,
  DATA_ERROR_MESSAGES,
} from '@/constants/error-message'
import { AnswerRecord, Paging } from '@/types'

type AnswerRecordPagingRequestParams = {
  size?: number
  page?: string
  sort?: string[]
}

type AnswerRecordPagingResponse = {
  content: AnswerRecord[]
} & Paging

const getAnswerRecordPaging = async (
  params: AnswerRecordPagingRequestParams
) => {
  try {
    const response =
      await authorizationInstance.get<AnswerRecordPagingResponse>(
        getAnswerRecordPagingPath(params)
      )

    const { data } = response

    return {
      records: data.content,
      nextPageToken:
        data.page !== data.totalPages - 1
          ? (data.page + 1).toString()
          : undefined,
      totalElements: data.totalElements,
      totalPages: data.totalPages,
    }
  } catch (error) {
    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }
}

interface AnswerRecordPagingProps extends AnswerRecordPagingRequestParams {
  initPageToken?: string
}

export const useAnswerRecordPaging = ({
  size = 10,
  sort,
  initPageToken,
}: AnswerRecordPagingProps) => {
  const { data, status, error, fetchNextPage, hasNextPage } =
    useSuspenseInfiniteQuery({
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
  }
}

const getAnswerRecordPagingPath = ({
  page,
  size,
  sort,
}: AnswerRecordPagingRequestParams) => {
  const params = new URLSearchParams()

  if (size) {
    params.append('size', size.toString())
  }

  if (page) {
    params.append('page', page.toString())
  }

  if (sort) {
    sort.forEach((sortField) => params.append('sort', sortField))
  }

  return `/api/answer/record?${params}`
}
