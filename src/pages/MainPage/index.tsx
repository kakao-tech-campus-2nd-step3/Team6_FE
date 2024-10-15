import { useState } from 'react'

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

  const [questionIndex, setquestionIndex] = useState(0)

  if (questionLoading || profilesLoading) {
    return <Loading />
  }

  const questionText =
    questionData.questions[questionIndex] &&
    questionData.questions[questionIndex].content
  const allDummy = [
    { userId: 1, userName: '홍길동', imageUrl: '/image.png' },
    { userId: 2, userName: '곽희주', imageUrl: '/image.png' },
    { userId: 3, userName: '김다운', imageUrl: '/image.png' },
    { userId: 4, userName: '이형진', imageUrl: '/image.png' },
    { userId: 5, userName: '신승욱', imageUrl: '/image.png' },
  ]

  const profiles = all.length > 0 ? all : allDummy
  const handleProfileSelect = (profileId: number) => {
    console.log(`${profileId}`) // 선택된 프로필 ID 확인하기
    if (questionIndex < questionData.questions.length - 1) {
      setquestionIndex(questionIndex + 1)
    } else {
      console.log(`${profileId}`, '질문 끝') // 질문이 모두 나왔는지 확인하기
      setquestionIndex(0) // 처음 질문으로 돌아가서 질문 다시 반복
    }
  }

  return (
    <Box
      bg="secondary_background"
      p={24}
      borderRadius="20px"
      textAlign="center"
    >
      <Question questionText={questionText} />
      <>
        <ProfileGrid
          profiles={profiles.slice(0, 3)}
          onProfileSelect={handleProfileSelect}
        />
        <ProfileGrid
          profiles={profiles.slice(3, 5)}
          onProfileSelect={handleProfileSelect}
        />
      </>
      <Buttons onReload={refreshProfiles} />
    </Box>
  )
}

export default MainPage
