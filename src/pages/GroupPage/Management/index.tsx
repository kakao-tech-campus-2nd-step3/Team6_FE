import { BiCog, BiGroup, BiLink, BiPlus } from 'react-icons/bi'

import { Box, Flex, Text } from '@chakra-ui/react'

import CardButton, { CardButtonProps } from '@/components/common/CardButton'

const CardData1: CardButtonProps = {
  variant: 'orange',
  orientation: 'vertical',
  label: '질문 관리',
  description: '그룹 질문을 관리해보세요',
  Icon: BiCog,
}
const CardData2: CardButtonProps = {
  variant: 'white',
  orientation: 'vertical',
  label: '멤버 관리',
  description: '그룹 멤버를 관리해보세요',
  Icon: BiGroup,
}
const CardData3: CardButtonProps = {
  variant: 'white',
  orientation: 'horizontal',
  label: '초대하기',
  description: '새로운 멤버를 초대해보세요',
  Icon: BiLink,
}
const CardData4: CardButtonProps = {
  variant: 'white',
  orientation: 'horizontal',
  label: '질문 추가',
  description: '그룹 질문을 건의해보세요',
  Icon: BiPlus,
}

interface ManagementProps {
  role: 'leader' | 'member'
}

export default function Management({ role }: ManagementProps) {
  return (
    <Box p="30px">
      <Flex gap={4} marginTop="10px" marginBottom="16px">
        <CardButton buttonElement={CardData3} />
        <CardButton buttonElement={CardData4} />
      </Flex>

      {role === 'leader' && (
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
            <Text
              fontSize="xs"
              color="text_description"
              sx={{
                maxWidth: '120px',
                overflowWrap: 'break-word',
                whiteSpace: 'normal',
                lineHeight: '1.5',
              }}
            >
              당신의 그룹을 원활하게 관리해보세요
            </Text>
          </Box>
          <Flex gap={4}>
            <CardButton buttonElement={CardData1} />
            <CardButton buttonElement={CardData2} />
          </Flex>
        </Box>
      )}
    </Box>
  )
}
