import { BiBell, BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { Box, Flex } from '@chakra-ui/react'

export const SideNavigation = () => {
  return (
    <Flex
      background="brown.300"
      width="40px"
      height="full"
      flexDirection="column"
      alignItems="center"
      justifyContent="end"
      paddingY={6}
      color="brown.600"
      gap={2}
    >
      <Box _hover={{ cursor: 'pointer', color: 'brown.500' }}>
        <BiBell size={26} />
      </Box>
      <Link to="/mypage">
        <Box _hover={{ cursor: 'pointer', color: 'brown.500' }}>
          <BiUserCircle size={26} />
        </Box>
      </Link>
    </Flex>
  )
}
