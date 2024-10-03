import { IconType } from 'react-icons'
import { BiCog, BiGroup, BiLink, BiPlus } from 'react-icons/bi'

import { Box, Flex, Text } from '@chakra-ui/react'

import CardButton from '@/components/common/CardButton'

const CardData1 = {
  variant: 'orange' as const,
  orientation: 'vertical' as const,
  label: '질문 관리',
  description: '그룹 질문을 관리해보세요',
  Icon: BiCog as IconType,
}
const CardData2 = {
  variant: 'white' as const,
  orientation: 'vertical' as const,
  label: '멤버 관리',
  description: '그룹 멤버를 관리해보세요',
  Icon: BiGroup as IconType,
}
const CardData3 = {
  variant: 'white' as const,
  orientation: 'horizontal' as const,
  label: '초대하기',
  description: '새로운 멤버를 초대해보세요',
  Icon: BiLink as IconType,
}
const CardData4 = {
  variant: 'white' as const,
  orientation: 'horizontal' as const,
  label: '질문 추가',
  description: '그룹 질문을 건의해보세요',
  Icon: BiPlus as IconType,
}

export default function Management() {
  return (
    <Box p="30px">
      <Flex gap={4} marginTop="10px" marginBottom="16px">
        <CardButton buttonElement={CardData3} />
        <CardButton buttonElement={CardData4} />
      </Flex>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        p="10px"
        borderRadius="10px"
        bg="orange.100"
      >
        <Box>
          <Text fontWeight="bold">그룹 관리</Text>
          <Text fontSize="xs" color="text_detail">
            당신의 그룹을 원활하게 관리해보세요
          </Text>
        </Box>
        <Flex gap={4}>
          <CardButton buttonElement={CardData1} />
          <CardButton buttonElement={CardData2} />
        </Flex>
      </Box>
    </Box>
  )
}
