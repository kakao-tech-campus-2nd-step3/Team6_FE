import { create } from 'zustand'

interface MembersLengthProps {
  membersLength: number
  setMembersLength: (membersLength: number) => void
}

export const useMembersLengthStore = create<MembersLengthProps>((set) => ({
  membersLength: 0,
  setMembersLength: (membersLength) => {
    set({ membersLength })
  },
}))
