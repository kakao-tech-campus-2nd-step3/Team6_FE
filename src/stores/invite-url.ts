import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface InviteUrlProps {
  inviteUrl: string
  setInviteUrl: (inviteUrl: string) => void
  clearInviteUrl: () => void
}

export const useInviteUrl = create(
  persist<InviteUrlProps>(
    (set) => ({
      inviteUrl: '/',
      setInviteUrl: (inviteUrl) => {
        set({ inviteUrl })
      },
      clearInviteUrl: () => {
        set({ inviteUrl: '/' })
      },
    }),
    {
      name: 'invite-url',
    }
  )
)
