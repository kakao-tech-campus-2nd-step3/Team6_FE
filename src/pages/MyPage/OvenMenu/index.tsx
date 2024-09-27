import { IconType } from 'react-icons'
import { BiListUl, BiSolidMessageRounded } from 'react-icons/bi'

import { Box, Text } from '@chakra-ui/react'

import CardButton from '@/components/common/CardButton'

// card component dummy data
const dummyRankData1 = {
  orientation: 'vertical' as const,
  label: '프로필 Q&A',
  description: '프로필 답변을 확인해보세요',
  Icon: BiSolidMessageRounded as IconType,
}
const dummyRankData2 = {
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
      bg="orange.300"
    >
      <Box>
        <Text fontWeight="bold">나의 오븐</Text>
        <Text fontSize="xs" color="text_detail">
          질문과 답변을 확인해보세요
        </Text>
      </Box>
      <CardButton
        orientation={dummyRankData1.orientation}
        label={dummyRankData1.label}
        description={dummyRankData1.description}
        Icon={dummyRankData1.Icon}
      />
      <CardButton
        orientation={dummyRankData2.orientation}
        label={dummyRankData2.label}
        description={dummyRankData2.description}
        Icon={dummyRankData2.Icon}
      />
    </Box>
  )
}
