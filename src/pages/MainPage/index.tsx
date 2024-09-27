import { Box, SimpleGrid } from '@chakra-ui/react'

import Buttons from './etcButtons'
import ProfileButton from './profileButton'
import Question from './question'

const MainPage = () => {
  const all = [
    { name: '한바름', img: '/image.png' },
    { name: '곽희주', img: '/image.png' },
    { name: '김다운', img: '/image.png' },
    { name: '이형진', img: '/image.png' },
    { name: '신승욱', img: '/image.png' },
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
          <ProfileButton profile={profile} key={profile.name} />
        ))}
      </SimpleGrid>

      {/* 두 번째 줄 프로필 2개 */}
      <SimpleGrid columns={2} mb={16}>
        {all.slice(3, 5).map((profile) => (
          <ProfileButton profile={profile} key={profile.name} />
        ))}
      </SimpleGrid>

      <Buttons />
    </Box>
  )
}

export default MainPage
