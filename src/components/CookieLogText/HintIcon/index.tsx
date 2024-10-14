import { BiLockAlt, BiLockOpenAlt } from 'react-icons/bi'

import { Box, Flex } from '@chakra-ui/react'

interface HintIconProps {
  hintCount: 0 | 1 | 2 | 3
}

export const HintIcon = ({ hintCount }: HintIconProps) => {
  return (
    <Flex>
      {Array.from({ length: 3 }, (_, index) =>
        index < hintCount ? (
          <Box key={index} color="primary">
            <BiLockOpenAlt />
          </Box>
        ) : (
          <Box key={index} color="black.600">
            <BiLockAlt />
          </Box>
        )
      )}
    </Flex>
  )
}
