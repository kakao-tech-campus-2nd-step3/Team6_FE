import { create } from 'zustand'

import { AnswerRecord } from '@/types'

export type SelectedAnswer = Pick<
  AnswerRecord,
  'questionContent' | 'createdAt' | 'answerId' | 'hintCount'
>

interface SelectedAnswerProps {
  selectedAnswer?: SelectedAnswer
  setSelectedAnswer: (selectedAnswer?: SelectedAnswer) => void
}

export const useSelectedAnswerStore = create<SelectedAnswerProps>((set) => ({
  selectedAnswer: undefined,
  setSelectedAnswer: (selectedAnswer) => {
    set({ selectedAnswer })
  },
}))
