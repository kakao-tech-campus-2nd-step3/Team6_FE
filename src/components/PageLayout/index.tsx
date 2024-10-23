import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import { Box, ColorProps, Flex, FlexProps, HStack } from '@chakra-ui/react'

import { Footer } from './Footer'
import { SideNavigation } from './SideNavigation'
import { SideSection } from './SideSection'

interface PageLayoutProps extends FlexProps {
  LeftSection: ReactNode
  children?: ReactNode
  RightSection?: ReactNode
  pageColor?: ColorProps['color']
}

const PageLayout = ({
  LeftSection,
  children,
  RightSection,
  pageColor = 'brown.50',
}: PageLayoutProps) => {
  return (
    <Flex background="brown.600" height="100vh" flexDirection="column">
      <Flex flex="1" justifyContent="center" alignItems="center">
        <HStack
          background={pageColor}
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
            {children || <Outlet />}
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
