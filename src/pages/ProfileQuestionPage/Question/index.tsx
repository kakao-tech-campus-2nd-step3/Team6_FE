import { useEffect, useState } from 'react'

import { Box } from '@chakra-ui/react'

import { ChatBox } from '@/components/ChatBox'
import { useSelectedQuestionStore } from '@/stores/selected-question'
import { ChatItem } from '@/types'

import formatDate from '../Answer/formatDate'

export default function Question() {
  const questionId = useSelectedQuestionStore((state) => state.questionId)
  const questionCreatedAt = useSelectedQuestionStore(
    (state) => state.questionCreatedAt
  )
  const questionContent = useSelectedQuestionStore(
    (state) => state.questionContent
  )

  const [question, setQuestion] = useState<ChatItem | null>(null)

  useEffect(() => {
    if (questionId && questionContent) {
      setQuestion({
        chatId: questionId,
        direction: 'left',
        createdAt: formatDate(questionCreatedAt as string),
        content: questionContent,
        deleteBtn: false,
      })
    } else {
      setQuestion(null)
    }
  }, [questionId, questionContent, questionCreatedAt])

  return (
    <Box padding="3px 0">{question && <ChatBox chatItem={question} />}</Box>
  )
}
