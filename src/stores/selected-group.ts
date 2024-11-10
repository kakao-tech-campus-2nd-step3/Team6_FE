import { create } from 'zustand'

import { Group } from '@/types'

interface SelectedGroupProps {
  selectedGroup?: Pick<Group, 'groupId' | 'groupName'>
  setSelectedGroup: (
    selectedGroup?: Pick<Group, 'groupId' | 'groupName'>
  ) => void
}

export const useSelectedGroupStore = create<SelectedGroupProps>((set) => ({
  selectedGroup: undefined,
  setSelectedGroup: (selectedGroup) => {
    set({ selectedGroup })
  },
}))
