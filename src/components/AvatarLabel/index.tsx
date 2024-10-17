import { Link } from 'react-router-dom'

import {
  Avatar,
  Box,
  HStack,
  StackProps,
  Text,
  Tooltip,
} from '@chakra-ui/react'

interface AvatarLabelProps extends StackProps {
  avatarSrc?: string
  label: string
  isNavigate: false
  tooltipLabel?: never
  linkTo?: never
}

interface AvatarLabelWithNavigateProps extends StackProps {
  avatarSrc?: string
  label: string
  isNavigate: true
  tooltipLabel: string
  linkTo: string
}

export const AvatarLabelWithNavigate = ({
  avatarSrc,
  label,
  isNavigate,
  tooltipLabel,
  linkTo,
}: AvatarLabelProps | AvatarLabelWithNavigateProps) => {
  return (
    <HStack gap={1.5}>
      {isNavigate ? (
        <Tooltip
          label={tooltipLabel}
          aria-label={`${tooltipLabel}로 이동하기`}
          placement="top"
        >
          <Link to={linkTo}>
            <Box
              border="2px"
              rounded="full"
              color="transparent"
              _hover={{ color: 'brown.400' }}
              marginLeft="-2px"
            >
              <Avatar width={7} height={7} src={avatarSrc} />
            </Box>
          </Link>
        </Tooltip>
      ) : (
        <Avatar width={7} height={7} src={avatarSrc} />
      )}
      <Text>{label}</Text>
    </HStack>
  )
}
