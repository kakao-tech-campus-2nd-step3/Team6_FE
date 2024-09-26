import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface MemberTypeProps {
  memberType: 'FRIEND' | 'ALL' | 'GROUP'
  setMemberType: (memberType: 'FRIEND' | 'ALL' | 'GROUP') => void
}

export const useMemberTypeStore = create(
  persist<MemberTypeProps>(
    (set) => ({
      memberType: 'FRIEND',
      setMemberType: (memberType) => {
        set({ memberType })
      },
    }),
    {
      name: 'member-type',
    }
  )
)
