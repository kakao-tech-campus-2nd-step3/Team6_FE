import { BiChevronsRight, BiGroup } from 'react-icons/bi'

import { Button, Flex } from '@chakra-ui/react'

const Buttons = () => {
  return (
    <Flex justify="space-between">
      <Button
        leftIcon={<BiGroup />}
        bg="brown.50"
        color="brown.600"
        _hover={{ bg: 'brown.50', color: 'black.900' }}
      >
        Reload
      </Button>
      <Button
        rightIcon={<BiChevronsRight />}
        bg="brown.50"
        color="brown.600"
        _hover={{ bg: 'brown.50', color: 'black.900' }}
      >
        Skip
      </Button>
    </Flex>
  )
}

export default Buttons
