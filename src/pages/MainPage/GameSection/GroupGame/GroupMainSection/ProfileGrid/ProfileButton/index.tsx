import { Avatar, Button, Text, VStack } from '@chakra-ui/react'

import { Member } from '@/types'

type ProfileButtonProps = {
  profile: Member
  onClick: () => void
}

export const ProfileButton = ({ profile, onClick }: ProfileButtonProps) => {
  return (
    <Button
      variant="ghost"
      textAlign="center"
      _hover={{ bg: 'brown.50' }}
      onClick={onClick}
    >
      <VStack spacing={4}>
        <Avatar
          src={profile.memberImageUrl}
          size="lg"
          _hover={{
            boxShadow: '0 0 0 4px rgba(210, 180, 140, 0.5)',
          }}
        />
        <Text fontSize="sm" color="text_secondary" fontWeight="300">
          {profile.userName}
        </Text>
      </VStack>
    </Button>
  )
}
