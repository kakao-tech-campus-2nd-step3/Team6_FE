import { authorizationInstance } from '@/api/instance'
import { API_ERROR_MESSAGES } from '@/constants/error-message'
import { AnswerRecord, Paging } from '@/types'

type AnswerRecordPagingRequestParams = {
  page: number
  size: number
  sort?: string[]
}

type AnswerRecordPagingResponse = {
  content: AnswerRecord[]
} & Paging

export const getAnswerRecordPaging = async (
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
