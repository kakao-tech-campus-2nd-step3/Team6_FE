import { authorizationInstance } from '@/api/instance'
import { getPagingPath } from '@/api/utils/common/getPagingPath'
import { Group, Paging, PagingRequestParams } from '@/types'

type GroupResponse = {
  content: Omit<Group, 'groupDescription'>[]
} & Paging

export const getGroupPaging = async (params: PagingRequestParams) => {
  const { data } = await authorizationInstance.get<GroupResponse>(
    getPagingPath('/api/group/my', params)
  )

  return {
    groups: data.content,
    nextPageToken:
      data.page !== data.totalPages ? (data.page + 1).toString() : undefined,
  }
}
