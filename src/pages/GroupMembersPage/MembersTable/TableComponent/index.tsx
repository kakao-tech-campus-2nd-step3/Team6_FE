import {
  Box,
  Radio,
  RadioGroup,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { MemberTable } from '@/types'

type TableComponentProps = {
  members: MemberTable[]
  columns: ColumnDef<MemberTable>[]
  borderColor: string
  leaderChangeBtn: boolean
  selectBtn: number | null
  setSelectBtn: (index: number | null) => void
  setChangeSelectId: (id: number | null) => void
  setChangeSelectName: (name: string) => void
}

export default function TableComponent({
  members,
  columns,
  borderColor,
  leaderChangeBtn,
  selectBtn,
  setSelectBtn,
  setChangeSelectId,
  setChangeSelectName,
}: TableComponentProps) {
  const table = useReactTable({
    data: members,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table
      borderRadius="20px"
      borderStyle="hidden"
      boxShadow={`0 0 0 1px ${borderColor}`}
      bg="white"
    >
      <Thead top={0} borderBottom={`1px solid ${borderColor}`}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr borderTop="1px solid gray" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Th
                key={header.id}
                colSpan={header.colSpan}
                fontSize="large"
                textAlign="center"
                borderBottom={`1px solid ${borderColor}`}
              >
                {header.isPlaceholder ? null : (
                  <Box>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Box>
                )}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody>
        {table.getRowModel().rows.map((row) => (
          <Tr key={row.id} position="relative">
            {row.getVisibleCells().map((cell) => (
              <Td
                textAlign="center"
                borderBottom={`1px solid ${borderColor}`}
                padding="0"
                key={cell.id}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            ))}
            {leaderChangeBtn && (
              <Td padding="0">
                <RadioGroup
                  margin="auto"
                  marginRight={2}
                  name="changeLeader"
                  value={selectBtn !== null ? String(selectBtn) : ''}
                  onChange={() => {
                    setSelectBtn(row.original.id)
                    setChangeSelectId(row.original.userId)
                    setChangeSelectName(row.original.userName)
                  }}
                >
                  <Radio
                    value={String(row.original.id)}
                    colorScheme="brown"
                    variant="outline"
                    sx={{ borderColor: 'brown.400' }}
                    isChecked={row.original.id === selectBtn}
                  />
                </RadioGroup>
              </Td>
            )}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
