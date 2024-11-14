import { BiBell, BiLogOut, BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { Box, Flex } from '@chakra-ui/react'

import { useAuthTokenStore } from '@/stores/auth-token'
import { useInviteUrl } from '@/stores/invite-url'
import { useUserInfoStore } from '@/stores/user-info'

export const SideNavigation = () => {
  const clearAuthToken = useAuthTokenStore((state) => state.clearAuthToken)
  const isLoggedIn = useAuthTokenStore((state) => state.isLoggedIn())
  const clearInviteUrl = useInviteUrl((state) => state.clearInviteUrl)

  const clearUserInfo = useUserInfoStore((state) => state.clearUserInfo)
  const userId = useUserInfoStore((state) => state.userInfo?.userId)

  if (!isLoggedIn) {
    return (
      <Flex
        background="brown.300"
        width="40px"
        height="full"
        flexDirection="column"
        alignItems="center"
        justifyContent="end"
        paddingY={6}
        color="brown.400"
        gap={2}
      >
        <BiLogOut size={26} />
        <BiBell size={26} />
        <BiUserCircle size={26} />
      </Flex>
    )
  }

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
          clearUserInfo()
          clearInviteUrl()
        }}
      >
        <BiLogOut size={26} />
      </Box>
      <Link to="/cookie-record">
        <Box _hover={{ cursor: 'pointer', color: 'brown.500' }}>
          <BiBell size={26} />
        </Box>
      </Link>
      <Link to={`/mypage/${userId}`}>
        <Box _hover={{ cursor: 'pointer', color: 'brown.500' }}>
          <BiUserCircle size={26} />
        </Box>
      </Link>
    </Flex>
  )
}
