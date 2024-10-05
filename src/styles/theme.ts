import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { fontWeights, fonts } from './font'

const theme = extendTheme({
  colors: {
    ...colors,

    // 컴포넌트 colorScheme 설정용
    primary: {
      50: '#FFF7ED',
      100: '#FFE7CC',
      500: '#FFAA21',
      600: '#F29D13',
      700: '#CF8200',
    },
    secondary: {
      50: '#FBF8F5',
      100: '#EDE5DA',
      500: '#DCC7AC',
      600: '#B2967E',
      700: '#917A68',
    },
  },
  semanticTokens: {
    colors: {
      primary: 'orange.400',
      primary_background: 'orange.50',
      secondary: 'brown.400',
      secondary_background: 'brown.50',
      destructive: '#FC2724',
      kakao: '#FEE500',
      text: 'black.900',
      text_secondary: 'black.800',
      text_description: 'black.600',
    },
  },
  fontWeights,
  fonts,
})

export default theme
