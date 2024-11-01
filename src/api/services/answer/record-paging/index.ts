import { authorizationInstance } from '@/api/instance'
import { getPagingPath } from '@/api/utils/common/getPagingPath'
import { AnswerRecord, Paging, PagingRequestParams } from '@/types'

type AnswerRecordPagingResponse = {
  content: AnswerRecord[]
} & Paging

export const getAnswerRecordPaging = async (params: PagingRequestParams) => {
  const response = await authorizationInstance.get<AnswerRecordPagingResponse>(
    getPagingPath('/api/answer/record', params)
  )

  const { data } = response

  return {
    records: data.content,
    nextPageToken:
      data.page !== data.totalPages ? (data.page + 1).toString() : undefined,
  }
}
