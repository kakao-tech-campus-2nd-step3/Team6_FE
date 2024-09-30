import { create } from 'zustand'

interface SelectedGroupProps {
  groupId: number | 'ALL'
  setGroupId: (groupId: number | 'ALL') => void
}

export const useSeletedGroupStore = create<SelectedGroupProps>((set) => ({
  groupId: 'ALL',
  setGroupId: (groupId) => {
    set({ groupId })
  },
}))
