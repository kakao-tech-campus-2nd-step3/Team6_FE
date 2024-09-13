import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 0, staleTime: 1000 * 60 },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>test</div>
    </QueryClientProvider>
  )
}

export default App
