import { css } from '@emotion/react'

import { colors } from '@/styles/colors'

export const calendarStyles = css`
  .react-calendar {
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    background-color: white;
  }

  .react-calendar__viewContainer,
  .react-calendar__navigation__label {
    pointer-events: none;
  }

  .react-calendar__navigation__arrow {
    border-radius: 100%;
  }

  .react-calendar__navigation button:focus {
    background-color: white;
  }

  .react-calendar button:hover {
    background: ${colors.brown[100]};
  }

  .react-calendar__month-view {
    abbr {
      color: ${colors.brown[600]};
    }
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${colors.black[800]};
  }

  .react-calendar__tile--now {
    background: ${colors.brown[200]};
  }

  .react-calendar__month-view__days__day,
  .react-calendar__month-view__days__day--weekend {
    min-height: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.3rem 0;
    background: white;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${colors.brown[300]};
  }

  .react-calendar__tile abbr {
    padding: 0.1rem;
  }
`
