// components/Answer.tsx
import { Box } from '@chakra-ui/react'

import { ChatBox } from '@/components/ChatBox'
import { ChatItem } from '@/types'

interface AnswerProps {
  dummyDataList: ChatItem[]
}

const Answer: React.FC<AnswerProps> = ({ dummyDataList }: AnswerProps) => {
  return (
    <Box overflowY="auto">
      {dummyDataList.map((item) => (
        <ChatBox key={item.chatId} chatItem={item} />
      ))}
    </Box>
  )
}

export default Answer
