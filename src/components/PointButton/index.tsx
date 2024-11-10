import { Link } from 'react-router-dom'

import { Button, Text } from '@chakra-ui/react'

interface PointButtonProps {
  point: number
}

export const PointButton = ({ point }: PointButtonProps) => {
  return (
    <Link to="/point">
      <Button
        color="primary_background"
        bg="#ea780c"
        display="flex"
        flexDirection="row"
        fontSize="xs"
        alignItems="center"
        padding="4px 7px"
        borderRadius="20px"
        minHeight="5px"
        height="auto"
        _hover={{ bg: 'orange.600', boxShadow: 'md' }}
      >
        <Text
          width="13px"
          height="13px"
          textAlign="center"
          lineHeight="1.05"
          borderRadius="20px"
          border="1px solid white"
          marginRight="3px"
        >
          P
        </Text>
        <Text fontWeight="bold" marginRight="6px">
          포인트
        </Text>
        <Text>{point}</Text>
      </Button>
    </Link>
  )
}
