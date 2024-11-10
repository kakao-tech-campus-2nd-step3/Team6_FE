import { useQuery } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'
import { appendParamsToUrl } from '@/api/utils/common/appendParamsToUrl'
import { Question } from '@/types'

export type RandomQuestionResponse = {
  questions: Question[]
}

type RandomQuestionRequestionParams = {
  size: number
}

const getRandomQuestion = async (params: RandomQuestionRequestionParams) => {
  const response = await authorizationInstance.get<RandomQuestionResponse>(
    appendParamsToUrl('/api/common/question/random', params)
  )

  return response.data.questions
}

export const useRandomQuestion = ({ size }: RandomQuestionRequestionParams) => {
  return useQuery({
    queryKey: ['question', 'common', 'random'],
    queryFn: () => getRandomQuestion({ size }),
  })
}

type GroupRandomQuestionRequestParams = {
  groupId: number
}

type GroupRandomQuestionResponse = {
  questions: Question[]
}

const getGroupRandomQuestion = async ({
  groupId,
}: GroupRandomQuestionRequestParams) => {
  const response = await authorizationInstance.get<GroupRandomQuestionResponse>(
    `/api/group/${groupId}/question/random`
  )

  return response.data.questions
}

export const useGroupRandomQuestion = ({
  groupId,
}: GroupRandomQuestionRequestParams) => {
  return useQuery({
    queryKey: ['question', 'common', 'random', 'group', groupId],
    queryFn: () => getGroupRandomQuestion({ groupId }),
  })
}
