// components/Question.tsx
import { Box } from '@chakra-ui/react'

import { ChatBox } from '@/components/common/ChatBox'
import { ChatItem } from '@/types'

interface QuestionProps {
  dummyData: ChatItem
}

export default function Question({ dummyData }: QuestionProps) {
  return (
    <Box padding="3px 0">
      <ChatBox chatItem={dummyData} />
    </Box>
  )
}
