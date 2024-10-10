import { IconType } from 'react-icons'
import { BiListUl, BiSolidMessageRounded } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { Box, Flex, Text } from '@chakra-ui/react'

import CardButton from '@/components/common/CardButton'

const CardData1 = {
  variant: 'orange' as const,
  orientation: 'vertical' as const,
  label: '프로필 Q&A',
  description: '프로필 답변을 확인해보세요',
  Icon: BiSolidMessageRounded as IconType,
}
const CardData2 = {
  variant: 'white' as const,
  orientation: 'vertical' as const,
  label: '쿠키 로그',
  description: '지목된 질문을 확인해보세요',
  Icon: BiListUl as IconType,
}

export default function OvenMenu() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      margin="30px"
      p="10px"
      borderRadius="10px"
      bg="orange.100"
    >
      <Box>
        <Text fontWeight="bold">나의 오븐</Text>
        <Text fontSize="xs" color="text_description">
          질문과 답변을 확인해보세요
        </Text>
      </Box>
      <Flex gap={4}>
        <Link to="/profile-question">
          <CardButton buttonElement={CardData1} />
        </Link>
        <CardButton buttonElement={CardData2} />
      </Flex>
    </Box>
  )
}
