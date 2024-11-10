import { useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'
import { appendParamsToUrl } from '@/api/utils/common/appendParamsToUrl'
import { AnswerRecord, PagingRequestParams, PagingResponse } from '@/types'

type AnswerRecordPagingResponse = PagingResponse<AnswerRecord[]>

type AnswerRecordRequsetParams = {
  date?: string
  direction?: 'ASC' | 'DESC'
} & PagingRequestParams

const getAnswerRecordPaging = async (params: AnswerRecordRequsetParams) => {
  const response = await authorizationInstance.get<AnswerRecordPagingResponse>(
    appendParamsToUrl('/api/answer/record', params)
  )

  const { data } = response

  return {
    records: data.content,
    nextPageToken:
      data.page !== data.totalPages - 1
        ? (data.page + 1).toString()
        : undefined,
  }
}

interface AnswerRecordPagingProps extends PagingRequestParams {
  initPageToken?: string
  date?: string
  direction?: 'ASC' | 'DESC'
}

export const useAnswerRecordPaging = ({
  size = 10,
  sort,
  initPageToken,
  date,
  direction = 'ASC',
}: AnswerRecordPagingProps) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['answer', 'record', initPageToken, date],
    queryFn: ({ pageParam = initPageToken }) =>
      getAnswerRecordPaging({ page: pageParam, size, sort, date, direction }),
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  })
}

type AnswerDaysRequestPrams = {
  date: string
}

type AnswerDaysResponse = {
  days: number[]
}

const getAnswerDays = async ({ date }: AnswerDaysRequestPrams) => {
  const response = await authorizationInstance.get<AnswerDaysResponse>(
    appendParamsToUrl('/api/answer/record/days', { date })
  )

  return response.data.days
}

export const useAnswerDays = ({ date }: AnswerDaysRequestPrams) => {
  return useQuery({
    queryKey: ['answer', 'record', 'days', date],
    queryFn: () => getAnswerDays({ date }),
  })
}
