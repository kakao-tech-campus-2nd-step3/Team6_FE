import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface MemberTypeProps {
  memberType: 'FRIEND' | 'KAKAO' | 'GROUP'
  setMemberType: (memberType: 'FRIEND' | 'KAKAO' | 'GROUP') => void
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
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
