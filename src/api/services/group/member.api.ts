import {
  queryOptions,
  useInfiniteQuery,
  useQuery,
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'
import { appendParamsToUrl } from '@/api/utils/common/appendParamsToUrl'
import { GroupRole, Member, PagingRequestParams, PagingResponse } from '@/types'

type GroupMembersRequestParams = {
  groupId: number
} & PagingRequestParams

type GroupMembersManageResponse = {
  content: Member[]
  totalPages?: number
  totalElements?: number
}

const getGroupMembers = async (params: GroupMembersRequestParams) => {
  const response = await authorizationInstance.get<GroupMembersManageResponse>(
    appendParamsToUrl(`/api/group/${params.groupId}/member`, params)
  )

  return {
    members: response.data.content,
    totalPages: response.data.totalPages,
    totalElements: response.data.totalElements,
  }
}

export const membersManageQuries = {
  all: () => ['membersManage'],
  groupMembers: (groupId: number, page?: number) =>
    queryOptions({
      queryKey: [...membersPageQuries.all(), groupId, page],
      queryFn: () => getGroupMembers({ groupId, page: String(page), size: 5 }),
    }),
}

type GroupMembersResponse = PagingResponse<Member[]>

const getGrupMemberPaging = async ({
  page,
  size,
  sort,
  groupId,
}: GroupMembersRequestParams) => {
  const params = { page, size, sort }
  const { data } = await authorizationInstance.get<GroupMembersResponse>(
    appendParamsToUrl(`/api/group/${groupId}/member`, params)
  )

  return {
    records: data.content,
    nextPageToken:
      data.page !== data.totalPages - 1
        ? (data.page + 1).toString()
        : undefined,
  }
}

interface GroupRecordPaigngProps extends PagingRequestParams {
  initPageToken?: string
  groupId: number
}

export const useGrupMemberPagingSuspense = ({
  size = 10,
  sort,
  initPageToken,
  groupId,
}: GroupRecordPaigngProps) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['group', 'member', groupId],
    queryFn: ({ pageParam = initPageToken }) =>
      getGrupMemberPaging({ page: pageParam, size, sort, groupId }),
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  })
}

export const useGrupMemberPaging = ({
  size = 10,
  sort,
  initPageToken,
  groupId,
}: GroupRecordPaigngProps) => {
  return useInfiniteQuery({
    queryKey: ['group', 'member', groupId],
    queryFn: ({ pageParam = initPageToken }) =>
      getGrupMemberPaging({ page: pageParam, size, sort, groupId }),
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  })
}

export const membersPageQuries = {
  all: () => ['members'],
  groupMembers: (groupId: number, page?: number) =>
    queryOptions({
      queryKey: [...membersPageQuries.all(), groupId, page],
      queryFn: () => getGroupMembers({ groupId, page: String(page), size: 5 }),
    }),
}

export const joinGroupMember = async (inviteCode: string) => {
  await authorizationInstance.post('/api/group/join', { inviteCode })
}

export const exitGroupMember = async (groupId: number) => {
  await authorizationInstance.post('/api/group/exit', {
    groupId,
  })
}

type GruopRoleResponse = {
  role: GroupRole
}

const getGroupRole = async (groupId: number) => {
  const response = await authorizationInstance.get<GruopRoleResponse>(
    `/api/group/${groupId}/role`
  )

  return response.data.role
}

export const useGroupRole = (groupId: number) => {
  return useSuspenseQuery({
    queryKey: ['group', 'role', groupId],
    queryFn: () => getGroupRole(groupId),
  })
}

export type ExpelMemberRequest = {
  groupId: number
  userId: number
}

export const expelMember = async ({ groupId, userId }: ExpelMemberRequest) => {
  await authorizationInstance.post('/api/group/expel', {
    groupId,
    userId,
  })
}

type GroupMemberListRequestParams = {
  groupId: number
}

type GroupMemberListResponse = {
  members: Member[]
}

const getGroupMemberList = async ({
  groupId,
}: GroupMemberListRequestParams) => {
  const response = await authorizationInstance.get<GroupMemberListResponse>(
    `/api/group/${groupId}/member/list`
  )

  return response.data.members
}

export const useGroupMemberList = ({
  groupId,
}: GroupMemberListRequestParams) => {
  return useQuery({
    queryKey: ['group', 'member', 'list', groupId],
    queryFn: () => getGroupMemberList({ groupId }),
  })
}

export type ChangeLeaderRequest = {
  groupId: number
  pastLeaderId: number
  newLeaderId: number
}

export const changeLeader = async ({
  groupId,
  pastLeaderId,
  newLeaderId,
}: ChangeLeaderRequest) => {
  await authorizationInstance.patch('/api/group/leader', {
    groupId,
    pastLeaderId,
    newLeaderId,
  })
}
