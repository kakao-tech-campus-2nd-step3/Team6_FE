import { Box } from '@chakra-ui/react'

import { useRandomQuestion, useRefreshProfiles } from '@/api/services/whokie'
import { Loading } from '@/components/Loading'

import ProfileGrid from './ProfileGrid'
import Question from './Question'
import Buttons from './SkipReloadButton'

const MainPage = () => {
  const {
    data: all,
    isLoading: profilesLoading,
    refetch: refreshProfiles,
  } = useRefreshProfiles()

  const { data: questionData, isLoading: questionLoading } = useRandomQuestion()

  if (questionLoading || profilesLoading) {
    return <Loading />
  }

  let questionText = ''
  questionText = questionData.questions[0].content
  const allDummy = [
    // 데이터 추가 후 수정하기
    { userId: 1, userName: '홍길동', imageUrl: '/image.png' },
    { userId: 2, userName: '곽희주', imageUrl: '/image.png' },
    { userId: 3, userName: '김다운', imageUrl: '/image.png' },
    { userId: 4, userName: '이형진', imageUrl: '/image.png' },
    { userId: 5, userName: '신승욱', imageUrl: '/image.png' },
  ]

  const profiles = all.length > 0 ? all : allDummy

  return (
    <Box
      bg="secondary_background"
      p={24}
      borderRadius="20px"
      textAlign="center"
    >
      <Question questionText={questionText} />
      <>
        <ProfileGrid profiles={profiles.slice(0, 3)} />
        <ProfileGrid profiles={profiles.slice(3, 5)} />
      </>
      <Buttons onReload={refreshProfiles} />
    </Box>
  )
}

export default MainPage
