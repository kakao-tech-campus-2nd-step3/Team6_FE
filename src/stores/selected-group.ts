import { create } from 'zustand'

interface SelectedGroupProps {
  groupId?: number
  setGroupId: (groupId?: number) => void
}

export const useSeletedGroupStore = create<SelectedGroupProps>((set) => ({
  groupId: undefined,
  setGroupId: (groupId) => {
    set({ groupId })
  },
}))
