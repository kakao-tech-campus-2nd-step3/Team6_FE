import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/api/instance'
import { Routes } from '@/routes'
import theme from '@/styles/theme'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Routes />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
