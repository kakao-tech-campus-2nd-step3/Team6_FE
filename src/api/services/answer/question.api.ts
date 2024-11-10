import { authorizationInstance } from '@/api/instance'

export type AnswerQuestionParam = {
  questionId: number
  pickedId: number
}

export const answerRandomQuestion = async ({
  questionId,
  pickedId,
}: AnswerQuestionParam) => {
  await authorizationInstance.post('/api/answer/common', {
    questionId,
    pickedId,
  })
}

export type AnswerGroupQuestionParams = {
  groupId: number
} & AnswerQuestionParam

export const answerGroupQuestion = async ({
  groupId,
  questionId,
  pickedId,
}: AnswerGroupQuestionParams) => {
  await authorizationInstance.post('/api/answer/group', {
    groupId,
    questionId,
    pickedId,
  })
}
