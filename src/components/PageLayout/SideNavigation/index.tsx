import { BiBell, BiLogOut, BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { Box, Flex } from '@chakra-ui/react'

import { useAuthTokenStore } from '@/stores/auth-token'
import { useMyUserIdStore } from '@/stores/my-user-id'

export const SideNavigation = () => {
  const clearAuthToken = useAuthTokenStore((state) => state.clearAuthToken)
  const clearMyUserID = useMyUserIdStore((state) => state.clearMyUserId)

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
      <Box
        color="brown.400"
        _hover={{ cursor: 'pointer', color: 'brown.500' }}
        onClick={() => {
          clearAuthToken()
          clearMyUserID()
        }}
      >
        <BiLogOut size={26} />
      </Box>
      <Link to="/cookie-record">
        <Box _hover={{ cursor: 'pointer', color: 'brown.500' }}>
          <BiBell size={26} />
        </Box>
      </Link>
      <Link to="/mypage">
        <Box _hover={{ cursor: 'pointer', color: 'brown.500' }}>
          <BiUserCircle size={26} />
        </Box>
      </Link>
    </Flex>
  )
}
