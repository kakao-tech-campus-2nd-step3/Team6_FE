import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { BiSolidCircle } from 'react-icons/bi'

import { Box, Flex } from '@chakra-ui/react'
import { format, formatDate } from 'date-fns'

import { useAnswerDays } from '@/api/services/answer/record.api'

interface CookieCalendarProps {
  activeMonth: string
  setActiveMonth: (activeStartDate: Date) => void
}

export const CookieCalendar = ({
  activeMonth,
  setActiveMonth,
}: CookieCalendarProps) => {
  const { data: days, status } = useAnswerDays({ date: activeMonth })

  if (status === 'pending') return <CalendarSkeleton />

  const cookieDays =
    days?.map((day) => {
      const monthYear = activeMonth.slice(0, 7)
      return `${monthYear}-${String(day).padStart(2, '0')}`
    }) ?? []

  return (
    <Calendar
      value={activeMonth}
      formatDay={(_, date) => formatDate(date, 'dd')}
      next2Label={null}
      prev2Label={null}
      showNeighboringMonth={false}
      tileContent={({ date }) => MarkedCircle({ cookieDays, date })}
      onActiveStartDateChange={({ activeStartDate }) => {
        if (activeStartDate) setActiveMonth(activeStartDate)
      }}
    />
  )
}

const MarkedCircle = ({
  cookieDays,
  date,
}: {
  cookieDays: string[]
  date: Date
}) => {
  if (!cookieDays.length) return <p />

  const formattedDate = format(date, 'yyyy-MM-dd')

  const cookieDaysSet = new Set(
    cookieDays.map((day) => format(day, 'yyyy-MM-dd'))
  )

  if (cookieDaysSet.has(formattedDate)) {
    return (
      <Flex height="fit-content" justifyContent="center" color="primary">
        <BiSolidCircle size={10} />
      </Flex>
    )
  }

  return <p />
}

export const CalendarSkeleton = () => {
  return (
    <Box
      width="350px"
      height="324px"
      background="white"
      borderRadius="0.5rem"
    />
  )
}
