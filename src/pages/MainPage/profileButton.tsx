import { Avatar, Button, Text, VStack } from '@chakra-ui/react'

type ProfileButtonProps = {
  profile: {
    name: string
    img: string
  }
}

const ProfileButton = ({ profile }: ProfileButtonProps) => {
  return (
    <Button variant="ghost" textAlign="center" _hover={{ bg: 'brown.50' }}>
      <VStack spacing={4}>
        <Avatar
          src={profile.img}
          size="lg"
          _hover={{
            boxShadow: '0 0 0 4px rgba(210, 180, 140, 0.5)',
          }}
        />
        <Text fontSize="sm" color="text_secondary" fontWeight="300">
          {profile.name}
        </Text>
      </VStack>
    </Button>
  )
}

export default ProfileButton
