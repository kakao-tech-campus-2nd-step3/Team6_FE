import { BiLockAlt, BiLockOpenAlt } from 'react-icons/bi'

import { Flex } from '@chakra-ui/react'

interface HintIconProps {
  hintCount: 0 | 1 | 2 | 3
}

export const HintIcon = ({ hintCount }: HintIconProps) => {
  return (
    <Flex>
      {Array.from({ length: 3 }, (_, index) =>
        index < hintCount ? (
          <BiLockOpenAlt key={index} color="primary" />
        ) : (
          <BiLockAlt key={index} color="black.400" />
        )
      )}
    </Flex>
  )
}
