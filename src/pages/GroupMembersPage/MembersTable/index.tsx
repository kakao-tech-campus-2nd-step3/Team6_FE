import { useEffect, useState } from 'react'

import { Box, Image, useTheme } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'

import { membersManageQuries } from '@/api/services/group/member.api'
import { useMyPage } from '@/api/services/profile/my-page.api'
import { Loading } from '@/components/Loading'
import ErrorPage from '@/pages/ErrorPage'
import { Member, MemberTable } from '@/types'

import ExpelBtn from '../ExpelBtn'
import LeaderChangeBtn from '../LeaderChangeBtn'
import Pagination from '../Pagination'
import Title from '../Title'
import TableComponent from './TableComponent'

type MembersTableProps = {
  groupId: number
  myUserId: number
  groupName: string
}

export default function MembersTable({
  groupId,
  myUserId,
  groupName,
}: MembersTableProps) {
  const theme = useTheme()
  const borderColor = theme.colors.black[300]
  const [page, setPage] = useState<number>(0)
  const [leaderChangeBtn, setLeaderChangeBtn] = useState(false)
  const [selectBtn, setSelectBtn] = useState<number | null>(null)
  const [changeSelectId, setChangeSelectId] = useState<number | null>(null)
  const [changeSelectName, setChangeSelectName] = useState<string>('')
  const [tableList, setTableList] = useState<MemberTable[]>()

  const {
    data: profile,
    status: profileStatus,
    isError: isProfileError,
  } = useMyPage(myUserId.toString())

  const {
    data: memberList,
    status: memberStatus,
    isError: isMemberError,
  } = useQuery(membersManageQuries.groupMembers(groupId, page))

  const members = memberList?.members
  const totalPages = memberList?.totalPages
  const totalElements = memberList?.totalElements

  useEffect(() => {
    if (members && members.length > 0) {
      const transformedData = transformMembersToMemberTable(members, page)
      setTableList(transformedData)
    }
  }, [members, page, setTableList])

  const transformMembersToMemberTable = (
    membersData: Member[],
    pageData: number
  ): MemberTable[] => {
    return membersData.map((member, index) => ({
      id: index + 1 + pageData * 5,
      memberImageUrl: member.memberImageUrl || '',
      userName: member.userName,
      joinedAt: member.joinedAt,
      isExpel: '내보내기',
      userId: member.userId,
      role: member.role,
    }))
  }

  if (memberStatus === 'pending' || profileStatus === 'pending')
    return <Loading />
  if (isProfileError || isMemberError) return <ErrorPage />
  if (!profile) return <ErrorPage />
  if (!members || !totalPages) return '멤버가 없어요!'

  const userName = profile.name

  const columns: ColumnDef<MemberTable>[] = [
    {
      header: '',
      accessorKey: 'id',
      cell: ({ row, table }) => (
        <Box>
          {table.getSortedRowModel().flatRows.indexOf(row) + 1 + page * 5}
        </Box>
      ),
    },
    {
      header: '프로필',
      accessorKey: 'memberImageUrl',
      cell: ({ row }) => {
        const imageUrl = row.getValue<string>('memberImageUrl')
        return (
          <Box>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="Profile"
                margin="auto"
                width="40px"
                height="40px"
                borderRadius="50%"
              />
            ) : (
              'No Image'
            )}
          </Box>
        )
      },
    },
    {
      header: '이름',
      accessorKey: 'userName',
    },
    {
      header: '가입일',
      accessorKey: 'joinedAt',
    },
    {
      header: '내보내기',
      accessorKey: 'isExpel',
      cell: ({ row }) => (
        <ExpelBtn
          groupId={groupId}
          userId={row.original.userId}
          userName={row.original.userName}
          userRole={row.original.role}
        />
      ),
    },
  ]

  return (
    <Box>
      <Title groupName={groupName} totalElements={totalElements} />
      <Box padding="0 40px">
        <LeaderChangeBtn
          groupId={groupId}
          leaderChangeBtn={leaderChangeBtn}
          setLeaderChangeBtn={setLeaderChangeBtn}
          leader={{ userId: myUserId, userName }}
          changeSelectId={changeSelectId}
          changeSelectName={changeSelectName}
        />
        {members && tableList && (
          <TableComponent
            members={tableList}
            columns={columns}
            borderColor={borderColor}
            leaderChangeBtn={leaderChangeBtn}
            selectBtn={selectBtn}
            setSelectBtn={setSelectBtn}
            setChangeSelectId={setChangeSelectId}
            setChangeSelectName={setChangeSelectName}
          />
        )}
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </Box>
    </Box>
  )
}
