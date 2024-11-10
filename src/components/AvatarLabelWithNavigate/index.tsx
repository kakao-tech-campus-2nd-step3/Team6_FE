import { useNavigate } from 'react-router-dom'

import { Avatar, HStack, StackProps, Text } from '@chakra-ui/react'

interface AvatarLabelWithNavigateProps extends StackProps {
  avatarSrc?: string
  label: string
  linkTo?: string
}

export const AvatarLabelWithNavigate = ({
  avatarSrc,
  label,
  linkTo,
}: AvatarLabelWithNavigateProps) => {
  const navigate = useNavigate()

  if (linkTo) {
    return (
      <HStack gap={1.5} onClick={() => navigate(linkTo)}>
        <Avatar width={7} height={7} src={avatarSrc} />
        <Text>{label}</Text>
      </HStack>
    )
  }

  return (
    <HStack gap={1.5}>
      <Avatar width={7} height={7} src={avatarSrc} />
      <Text>{label}</Text>
    </HStack>
  )
}
