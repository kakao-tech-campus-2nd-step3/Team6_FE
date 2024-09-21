import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'

import theme from '@/styles/theme'

import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
)
