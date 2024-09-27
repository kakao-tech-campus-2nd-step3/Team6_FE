import { Box, SimpleGrid } from '@chakra-ui/react'

import Buttons from './etcButtons'
import ProfileButton from './profileButton'
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

      {/* 첫 번째 줄 프로필 3개 */}
      <SimpleGrid columns={3} spacing={16} mb={20}>
        {all.slice(0, 3).map((profile) => (
          <ProfileButton
            profile={{ name: profile.userName, img: profile.imageUrl }}
            key={profile.userId}
          />
        ))}
      </SimpleGrid>

      {/* 두 번째 줄 프로필 2개 */}
      <SimpleGrid columns={2} mb={16}>
        {all.slice(3, 5).map((profile) => (
          <ProfileButton
            profile={{ name: profile.userName, img: profile.imageUrl }}
            key={profile.userId}
          />
        ))}
      </SimpleGrid>

      <Buttons />
    </Box>
  )
}

export default MainPage
