import { useState } from 'react'

import { Box } from '@chakra-ui/react'

import { useRefreshProfiles } from '@/api/services/answer'
import { useRandomQuestion } from '@/api/services/question'
import { Loading } from '@/components/Loading'
import { Friend } from '@/types'

import ProfileGrid from './ProfileGrid'
import Question from './Question'
import Buttons from './SkipReloadButton'

const MainPage = () => {
  const {
    data: all,
    isLoading: profilesLoading,
    refetch: refreshProfiles, // '/api/answer/refresh' 데이터 추가된 후 동작 확인하기
  } = useRefreshProfiles()

  const { data: questionData, isLoading: questionLoading } = useRandomQuestion()

  const [questionIndex, setquestionIndex] = useState(0)

  if (questionLoading || profilesLoading) {
    return <Loading />
  }

  let questionText = ''
  let questions = []

  if (questionData && questionData.questions) {
    questions = questionData.questions
    if (questionIndex < questions.length) {
      questionText = questions[questionIndex].content
    }
  }

  const allDummy: Friend[] = [
    { friendId: 1, name: '홍길동', imageUrl: '/image.png', isFriend: true },
    { friendId: 2, name: '곽희주', imageUrl: '/image.png', isFriend: true },
    { friendId: 3, name: '김다운', imageUrl: '/image.png', isFriend: true },
    { friendId: 4, name: '이형진', imageUrl: '/image.png', isFriend: true },
    { friendId: 5, name: '신승욱', imageUrl: '/image.png', isFriend: true },
  ]

  const profiles = all.length > 0 ? all : allDummy
  const handleProfileSelect = (profileId: number) => {
    console.log(`${profileId}`) // 선택된 프로필 ID 확인하기
    if (questionIndex < questions.length - 1) {
      setquestionIndex(questionIndex + 1)
    } else {
      console.log(`${profileId}`, '질문 끝') // 질문이 모두 나왔는지 확인하기
      setquestionIndex(0) // 처음 질문으로 돌아가서 질문 다시 반복
    }
  }

  const handleSkip = () => {
    if (questionIndex < questions.length - 1) {
      setquestionIndex(questionIndex + 1)
    } else {
      setquestionIndex(0)
    }
  }

  // reloadProfiles 테스트
  const handleReload = async () => {
    const data = await refreshProfiles()
    console.log('프로필 새로 불러오기:', data)
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
      <Buttons onReload={handleReload} onSkip={handleSkip} />
    </Box>
  )
}

export default MainPage
