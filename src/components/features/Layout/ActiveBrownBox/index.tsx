import { ReactNode } from 'react'

import { Box, BoxProps } from '@chakra-ui/react'
import { css } from '@emotion/react'

import { colors } from '@/styles/colors'

interface ActiveBrownBoxProps extends BoxProps {
  isActive?: boolean
  children: ReactNode
  onClick?: () => void
}

export const ActiveBrownBox = ({
  isActive = false,
  children,
  onClick,
}: ActiveBrownBoxProps) => {
  return (
    <Box
      paddingY={1.5}
      paddingX={2}
      width="full"
      css={dynamicStyle(isActive)}
      borderRight={isActive ? 3 : 0}
      background={isActive ? 'brown.50' : ''}
      borderRightColor="brown.400"
      borderRightStyle="solid"
      onClick={onClick}
    >
      {children}
    </Box>
  )
}

const dynamicStyle = (isActive: boolean) => {
  if (isActive) {
    return css({
      '&:hover': {
        cursor: 'pointer',
      },
      background: colors.brown[100],
    })
  }

  return css({
    '&:hover': {
      cursor: 'pointer',
      background: colors.brown[50],
    },
  })
}
