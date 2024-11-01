import { ReactNode } from 'react'
import { IconType } from 'react-icons'

import { Box, BoxProps, Divider, Flex, HStack, Text } from '@chakra-ui/react'

interface SideSectionProps extends BoxProps {
  SectionHeader: ReactNode
  children: ReactNode
}

const SideSection = ({ SectionHeader, children }: SideSectionProps) => {
  return (
    <Box
      background="white"
      width="200px"
      height="full"
      flexDirection="column"
      gap={1}
      position="relative"
    >
      {SectionHeader}
      <Divider />
      {children}
    </Box>
  )
}

interface SectionHeaderProps {
  Icon: IconType
  title: string
  Extentions?: ReactNode
}

const SectionHeader = ({ Icon, title, Extentions }: SectionHeaderProps) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" paddingRight={3}>
      <HStack padding={2} paddingY={1}>
        <Icon size={20} />
        <Text fontWeight="bold">{title}</Text>
      </HStack>
      {Extentions}
    </Flex>
  )
}

SideSection.SectionHeader = SectionHeader

export { SideSection }
