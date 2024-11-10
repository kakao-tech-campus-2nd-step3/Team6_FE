import { useParams } from 'react-router-dom'

import { useGroupInfo } from '@/api/services/group/group.api'
import { useGroupRole } from '@/api/services/group/member.api'
import { Loading } from '@/components/Loading'
import { useMyUserIdStore } from '@/stores/my-user-id'

import ErrorPage from '../ErrorPage'
import MembersTable from './MembersTable'
import Navigate from './Navigate'

export default function GroupMembersPage() {
  const { groupId } = useParams<{ groupId: string }>()
  const myUserId = useMyUserIdStore((state) => state.myUserId)

  const { data: role, isLoading: isRoleLoading } = useGroupRole(Number(groupId))
  const { data: groupData, status: groupDataStatus } = useGroupInfo(
    Number(groupId)
  )

  if (isRoleLoading || groupDataStatus === 'pending') return <Loading />
  if (
    groupId === undefined ||
    myUserId === null ||
    !groupData ||
    role === 'MEMBER'
  )
    return <ErrorPage />

  return (
    <>
      <Navigate groupId={groupId} />
      <MembersTable
        groupId={Number(groupId)}
        myUserId={myUserId}
        groupName={groupData.groupName}
      />
    </>
  )
}
