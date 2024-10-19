import { useMutation } from '@tanstack/react-query'

import { answerRandomQuestion } from '.'

type AnswerQuestionParam = {
  friendId: number
}

export const useAnswerQuestion = ({ friendId }: AnswerQuestionParam) => {
  return useMutation({
    mutationFn: () => answerRandomQuestion({ friendId }),
  })
}
