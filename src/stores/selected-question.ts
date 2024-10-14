import { create } from 'zustand'

interface SelectedQuestionProps {
  questionId: number | undefined
  setQuestionId: (questionId: number | undefined) => void
}

export const useSeletedQuestionStore = create<SelectedQuestionProps>((set) => ({
  questionId: undefined,
  setQuestionId: (questionId) => {
    set({ questionId })
  },
}))
