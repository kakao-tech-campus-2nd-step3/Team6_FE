import { Box } from '@chakra-ui/react'

import Buttons from './etcButtons'
import ProfileGrid from './progileGrid'
import Question from './question'

const MainPage = () => {
  const all = [
    { userId: 1, userName: '홍길동', imageUrl: '/image.png' },
    { userId: 2, userName: '곽희주', imageUrl: '/image.png' },
    { userId: 3, userName: '김다운', imageUrl: '/image.png' },
    { userId: 4, userName: '이형진', imageUrl: '/image.png' },
    { userId: 5, userName: '신승욱', imageUrl: '/image.png' },
  ]

  const questionText = '가장 MZ스러운 사람'

  return (
    <Box
      bg="secondary_background"
      p={24}
      borderRadius="20px"
      textAlign="center"
    >
      <Question questionText={questionText} />

      <ProfileGrid profiles={all.slice(0, 3)} />
      <ProfileGrid profiles={all.slice(3, 5)} />

      <Buttons />
    </Box>
  )
}

export default MainPage
