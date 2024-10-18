import { useQuery } from '@tanstack/react-query'

import { fetchRandomQuestion } from '.'

export const useRandomQuestion = () => {
  return useQuery({
    queryKey: ['randomQuestion'],
    queryFn: fetchRandomQuestion,
  })
}
