import { Box } from '@chakra-ui/react'

import { useRandomQuestion } from '@/api/services/whokie'
import { Loading } from '@/components/Loading'

import ProfileGrid from './ProfileGrid'
import Question from './Question'
import Buttons from './SkipReloadButton'

const MainPage = () => {
  const all = [
    { userId: 1, userName: '홍길동', imageUrl: '/image.png' },
    { userId: 2, userName: '곽희주', imageUrl: '/image.png' },
    { userId: 3, userName: '김다운', imageUrl: '/image.png' },
    { userId: 4, userName: '이형진', imageUrl: '/image.png' },
    { userId: 5, userName: '신승욱', imageUrl: '/image.png' },
  ]

  const { data: questionData, isLoading: questionLoading } = useRandomQuestion()

  if (questionLoading) {
    return <Loading />
  }

  let questionText = ''
  questionText = questionData.questions[0].content

  console.log(questionText) // api 연결 테스트

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
