import { extendTheme } from '@chakra-ui/react'

import { fontWeights, fonts } from './font'

const theme = extendTheme({
  colors: {
    orange: {
      50: '#FFF7ED',
      300: '#FFE7CC',
      400: '#FECC88',
      500: '#FFBB55',
      600: '#FFAA21',
    },
    brown: {
      50: '#FBF8F5',
      300: '#EDE5DA',
      400: '#DCC7AC',
      500: '#B2967E',
      600: '#917A68',
    },
    black: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EFEFEF',
      300: '#E2E2E2',
      400: '#BFBFBF',
      500: '#A0A0A0',
      600: '#777777',
      700: '#636363',
      800: '#444444',
      900: '#232527',
    },

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
      primary: 'orange.600',
      primary_background: 'orange.50',
      secondary: 'brown.400',
      secondary_background: 'brown.50',
      destructive: '#FC2724',
      kakao: '#FEE500',
      text: 'black.900',
      text_secondary: 'black.800',
      text_detail: 'black.600',
    },
  },
  fontWeights,
  fonts,
})

export default theme
