import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'

import App from './App'
import './index.css'
import theme from './styles/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
)
