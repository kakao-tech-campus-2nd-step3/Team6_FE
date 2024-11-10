import { useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'
import { appendParamsToUrl } from '@/api/utils/common/appendParamsToUrl'
import { PagingRequestParams } from '@/types'

interface Question {
  questionId: number
  questionContent: string
  status: 'READY' | 'APPROVED' | 'REJECTED'
}

export type GroupQuestionResponse = {
  page: number
  totalPages: number
  content: Question[]
  size: number
  totalElements: number
  questions: {
    questionId: number
    content: string
    users: {
      groupMemberId: number
      userId: number
      userName: string
      imageUrl: string
    }[]
  }[]
}

export type CreateGroupQuestionPayload = {
  groupId: number
  content: string
}

export const createGroupQuestion = async (
  data: CreateGroupQuestionPayload
): Promise<string> => {
  const response = await authorizationInstance.post('/api/group/question', data)
  return response.data.message
}

const getGroupQuestions = async (
  groupId: string,
  status: 'READY' | 'APPROVED' | 'REJECTED',
  page: number,
  size: number
) => {
  const response = await authorizationInstance.get(
    `/api/group/${groupId}/question`,
    {
      params: { status, page, size },
    }
  )
  return response.data
}

type GroupQuestionParams = {
  groupId: string
  status: 'READY' | 'APPROVED' | 'REJECTED'
} & PagingRequestParams

const getQuestionPaging = async (
  groupId: number,
  params: GroupQuestionParams
) => {
  const response = await authorizationInstance.get<GroupQuestionResponse>(
    appendParamsToUrl(`/api/group/${groupId}/question`, params)
  )
  const { data } = response
  return {
    data,
    nextPageToken:
      data.page !== data.totalPages - 1
        ? (data.page + 1).toString()
        : undefined,
  }
}

interface GroupQuestionPagingProps extends PagingRequestParams {
  initPageToken?: string
  groupId: string
  status: 'READY' | 'APPROVED' | 'REJECTED'
}
export const useQuestionPaging = ({
  size = 10,
  sort,
  groupId,
  status,
  initPageToken,
}: GroupQuestionPagingProps) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['question', initPageToken],
    queryFn: ({ pageParam = initPageToken }) =>
      getQuestionPaging(Number(pageParam), { size, sort, groupId, status }),
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  })
}

export const useGroupQuestion = ({ groupId, status }: GroupQuestionParams) => {
  return useQuery<GroupQuestionResponse>({
    queryKey: ['groupQuestions', groupId, status],
    queryFn: () => getGroupQuestions(groupId, status, 0, 10),
    enabled: !!groupId,
    staleTime: 0,
  })
}
