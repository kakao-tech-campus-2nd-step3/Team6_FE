import { Link } from 'react-router-dom'

import { Box, Button, Flex } from '@chakra-ui/react'

import { ChatItem } from '@/types'

import Answer from './Answer'
import Question from './Question'
import WriteReply from './WriteReply'

export default function ProfileQuestionPage() {
  return (
    <Flex
      overflowY="hidden"
      position="relative"
      height="100%"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box
        bg="brown.200"
        zIndex="1000"
        width="784px"
        borderTopRightRadius="20px"
      >
        <Flex justifyContent="end" padding="10px">
          <Link to="/mypage">
            <Button
              bg="none"
              _hover={{ background: 'none' }}
              fontSize="large"
              padding="0"
            >
              ×
            </Button>
          </Link>
        </Flex>
        <Question dummyData={dummyData1} />
      </Box>

      {/* 이 영역만 스크롤 */}
      <Answer dummyDataList={dummyDataList} />

      <WriteReply />
    </Flex>
  )
}

// API로 데이터 값 받아올 때 direction 지정해서 받아올 것
const dummyData1: ChatItem = {
  chatId: 1,
  direction: 'left' as const,
  createdAt: '2024-10-19',
  content: '내 MBTI 뭐게',
}

const dummyDataList: ChatItem[] = [
  {
    chatId: 1,
    direction: 'right' as const,
    createdAt: '2024-10-20',
    content: '채팅 컴포넌트 시험 중입니다.',
  },
  {
    chatId: 2,
    direction: 'right' as const,
    createdAt: '2024-10-21',
    content:
      '채팅창의 height가 자유롭게 조절 가능한지 시험 중입니다. 말을 길게 썼을 때는 채팅창이 세로로 길어집니다.',
  },
  {
    chatId: 3,
    direction: 'right' as const,
    createdAt: '2024-10-20',
    content: '채팅 컴포넌트 시험 중입니다.',
  },
  {
    chatId: 4,
    direction: 'right' as const,
    createdAt: '2024-10-21',
    content:
      '채팅창의 height가 자유롭게 조절 가능한지 시험 중입니다. 말을 길게 썼을 때는 채팅창이 세로로 길어집니다.',
  },
  {
    chatId: 5,
    direction: 'right' as const,
    createdAt: '2024-10-20',
    content: '채팅 컴포넌트 시험 중입니다.',
  },
  {
    chatId: 6,
    direction: 'right' as const,
    createdAt: '2024-10-21',
    content:
      '채팅창의 height가 자유롭게 조절 가능한지 시험 중입니다. 말을 길게 썼을 때는 채팅창이 세로로 길어집니다.',
  },
]
