import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'

import { Flex } from '@chakra-ui/react'
import { format } from 'date-fns'

import { Modal } from '@/types'

import { CookieCalendar } from './CookieCalendar'
import { MonthlyCookieLogList } from './MonthlyCookieLogList'
import { calendarStyles } from './styles'

interface CalendarSectionProps {
  hintDrawer: Modal
}

export const CalendarSection = ({ hintDrawer }: CalendarSectionProps) => {
  const [activeMonth, setActiveMonth] = useState(
    format(new Date(), 'yyyy-MM-01')
  )

  const getActiveMonth = (activeStartDate: Date) => {
    const newActiveMonth = format(activeStartDate, 'yyyy-MM-01')
    if (newActiveMonth !== activeMonth) {
      setActiveMonth(newActiveMonth)
    }
  }

  return (
    <Flex flexDirection="column" alignItems="center" css={calendarStyles}>
      <CookieCalendar
        activeMonth={activeMonth}
        setActiveMonth={getActiveMonth}
      />
      <MonthlyCookieLogList hintDrawer={hintDrawer} curMonth={activeMonth} />
    </Flex>
  )
}
