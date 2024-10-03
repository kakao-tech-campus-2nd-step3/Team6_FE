import { useEffect, useRef, useState } from 'react'

import { Box, Button, Flex } from '@chakra-ui/react'

import { ChatBox } from '@/components/common/ChatBox'

export default function ProfileQuestion() {
  const fixedBoxRef = useRef<HTMLDivElement>(null)
  const [fixedBoxHeight, setFixedBoxHeight] = useState<number>(0)

  useEffect(() => {
    if (fixedBoxRef.current) {
      setFixedBoxHeight(fixedBoxRef.current.offsetHeight)
    }
  }, [])

  return (
    <Box overflowY="hidden" position="relative">
      <Box
        ref={fixedBoxRef}
        position="fixed"
        bg="brown.300"
        zIndex="1000"
        width="784px"
        borderTopRightRadius="20px"
      >
        <Flex justifyContent="end" padding="10px">
          <Button
            bg="none"
            _hover={{ background: 'none' }}
            fontSize="large"
            padding="0"
          >
            ×
          </Button>
        </Flex>
        <Box padding="5px 0">
          <ChatBox chatItem={dummyData1} />
        </Box>
      </Box>

      {/* 이 영역만 스크롤 */}
      <Box paddingTop={`${fixedBoxHeight}px`} height="100%" overflowY="auto">
        <ChatBox chatItem={dummyData2} />
        <ChatBox chatItem={dummyData3} />
        <ChatBox chatItem={dummyData3} />
        <ChatBox chatItem={dummyData3} />
        <ChatBox chatItem={dummyData3} />
        <ChatBox chatItem={dummyData3} />
        <ChatBox chatItem={dummyData3} />
      </Box>
    </Box>
  )
}

const dummyData1 = {
  direction: 'left' as const,
  createdAt: '2024-10-19',
  content:
    '내 MBTI 뭐게 채팅창의 height가 자유롭게 조절 가능한지 시험 중입니다. 말을 길게 썼을 때는 채팅창이 세로로 길어집니다.',
}

const dummyData2 = {
  direction: 'right' as const,
  createdAt: '2024-10-20',
  content: '채팅 컴포넌트 시험 중입니다.',
}

const dummyData3 = {
  direction: 'right' as const,
  createdAt: '2024-10-21',
  content:
    '채팅창의 height가 자유롭게 조절 가능한지 시험 중입니다. 말을 길게 썼을 때는 채팅창이 세로로 길어집니다.',
}
