import { useQuery } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'
import {
  API_ERROR_MESSAGES,
  DATA_ERROR_MESSAGES,
} from '@/constants/error-message'
import { AnswerRecord, Paging } from '@/types'

type AnswerRecordPagingRequestParams = {
  page: number
  size: number
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

    return response.data
  } catch (error) {
    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR)
  }
}

export const useAnswerRecordPaging = ({
  page,
  size,
  sort,
}: AnswerRecordPagingRequestParams) => {
  const { data, status, error } = useQuery({
    queryKey: ['answer', 'record', page],
    queryFn: () => getAnswerRecordPaging({ page, size, sort }),
  })

  const answerRecords = data?.content

  if (!answerRecords)
    throw new Error(DATA_ERROR_MESSAGES.ANSWER_RECORD_NOT_FOUND)

  return {
    answerRecords,
    status,
    error,
  }
}

const getAnswerRecordPagingPath = ({
  page,
  size,
  sort,
}: AnswerRecordPagingRequestParams) => {
  const params = new URLSearchParams()

  params.append('page', page.toString())
  params.append('size', size.toString())

  if (sort) {
    sort.forEach((sortField) => params.append('sort', sortField))
  }

  return `/api/answer/record?${params}`
}
