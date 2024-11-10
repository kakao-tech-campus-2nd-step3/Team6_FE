import { useCallback, useEffect, useState } from 'react'

export function useProfileRandom<T>(profiles: T[]) {
  const [remain, setRemain] = useState<T[]>(profiles ?? [])
  const [picked, setPicked] = useState<T[]>([])

  const pickRandomProfiles = useCallback((arr: T[]) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 5)
  }, [])

  const reloadRandomProfiles = useCallback(() => {
    if (remain.length >= 5) {
      const randomProfiles = pickRandomProfiles(remain)
      setPicked(randomProfiles)

      const remainProfiles = remain.filter(
        (profile) => !randomProfiles.includes(profile)
      )
      setRemain(remainProfiles)
      return
    }

    const combined = [...remain, ...picked]
    const randomProfiles = pickRandomProfiles(combined)
    setPicked(randomProfiles)

    const remainProfiles = combined.filter(
      (profile) => !randomProfiles.includes(profile)
    )
    setRemain(remainProfiles)
  }, [remain, picked, pickRandomProfiles])

  useEffect(() => {
    if (remain.length > 0 && picked.length === 0) {
      reloadRandomProfiles()
    }
  }, [remain, picked, reloadRandomProfiles])

  return {
    pickedProfiles: picked,
    reloadRandomProfiles,
  }
}
