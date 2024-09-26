import { Outlet } from 'react-router-dom'

import { Box, Flex, HStack } from '@chakra-ui/react'

import { Footer } from './Footer'
import { GroupSection } from './GroupSection'
import { MemberSection } from './MemberSection'
import { SideNavigation } from './SideNavigation'

export const Layout = () => {
  return (
    <Flex background="brown.600" height="100vh" flexDirection="column">
      <Flex flex="1" justifyContent="center" alignItems="center">
        <HStack
          background="brown.50"
          width="1024px"
          height="560px"
          rounded="24px"
          overflow="hidden"
          marginTop={6}
          gap={0}
          boxShadow="6px 6px 20px rgba(0, 0, 0, 0.25)"
        >
          <SideNavigation />
          <GroupSection />
          <Box flex="1" height="full">
            <Outlet />
          </Box>
          <MemberSection />
        </HStack>
      </Flex>
      <Footer />
    </Flex>
  )
}
