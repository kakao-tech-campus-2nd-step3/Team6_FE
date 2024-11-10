import { SimpleGrid } from '@chakra-ui/react'

import { Member } from '@/types'

import { ProfileButton } from './ProfileButton'

type ProfileGridProps = {
  profiles: Member[]
  onClickProfile: (profileId: number) => void
}

const ProfileGrid = ({ profiles, onClickProfile }: ProfileGridProps) => {
  const columns = profiles.length === 3 ? 3 : 2

  return (
    <SimpleGrid columns={columns} spacing={16} mb={columns === 2 ? 16 : 20}>
      {profiles.map((profile) => (
        <ProfileButton
          profile={profile}
          key={profile.userId}
          onClick={() => onClickProfile(profile.userId)}
        />
      ))}
    </SimpleGrid>
  )
}

export default ProfileGrid
