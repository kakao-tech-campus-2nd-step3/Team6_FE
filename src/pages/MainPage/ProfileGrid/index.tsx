import { SimpleGrid } from '@chakra-ui/react'

import ProfileButton from '../ProfileButton'

type ProfileGridProps = {
  profiles: {
    userId: number
    userName: string
    imageUrl: string
  }[]
  onProfileSelect: (profileId: number) => void
}

const ProfileGrid = ({ profiles, onProfileSelect }: ProfileGridProps) => {
  const columns = profiles.length === 3 ? 3 : 2
  const marginBottom = columns === 2 ? 16 : 20
  const spacingValue = columns === 2 ? 0 : 16

  return (
    <SimpleGrid columns={columns} spacing={spacingValue} mb={marginBottom}>
      {profiles.map((profile) => (
        <ProfileButton
          profile={{ name: profile.userName, img: profile.imageUrl }}
          key={profile.userId}
          onClick={() => onProfileSelect(profile.userId)}
        />
      ))}
    </SimpleGrid>
  )
}

export default ProfileGrid
