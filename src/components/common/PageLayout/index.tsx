import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import { Box, Flex, HStack } from '@chakra-ui/react'

import { Footer } from './Footer'
import { SideNavigation } from './SideNavigation'
import { SideSection } from './SideSection'

interface PageLayoutProps {
  LeftSection: ReactNode
  RightSection?: ReactNode
}

const PageLayout = ({ LeftSection, RightSection }: PageLayoutProps) => {
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
          {LeftSection}
          <Box flex="1" height="full" overflowY="scroll">
            <Outlet />
          </Box>
          {RightSection}
        </HStack>
      </Flex>
      <Footer />
    </Flex>
  )
}

PageLayout.SideSection = SideSection

export { PageLayout }
