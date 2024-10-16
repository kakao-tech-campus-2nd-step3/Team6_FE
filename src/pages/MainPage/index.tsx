import { Suspense, useState } from 'react'

import { Box } from '@chakra-ui/react'

import { useRefreshProfiles } from '@/api/services/answer'
import { Loading } from '@/components/Loading'
import { Friend } from '@/types'

import ProfileGrid from './ProfileGrid'
import Question from './Question'
import Buttons from './SkipReloadButton'

const MainPage = () => {
  const [questionIndex, setquestionIndex] = useState(0)

  return (
    <Suspense fallback={<Loading />}>
      <Content
        questionIndex={questionIndex}
        setquestionIndex={setquestionIndex}
      />
    </Suspense>
  )
}

const Content = ({
  questionIndex,
  setquestionIndex,
}: {
  questionIndex: number
  setquestionIndex: React.Dispatch<React.SetStateAction<number>>
}) => {
  const { data: all = [], refetch: refreshProfiles } = useRefreshProfiles()

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
    setquestionIndex((prevIndex) => (prevIndex + 1) % profiles.length)
  }

  const handleSkip = () => {
    setquestionIndex((prevIndex) => (prevIndex + 1) % profiles.length)
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
      <Question questionIndex={questionIndex} />
      <ProfileGrid
        profiles={profiles.slice(0, 3)}
        onProfileSelect={handleProfileSelect}
      />
      <ProfileGrid
        profiles={profiles.slice(3, 5)}
        onProfileSelect={handleProfileSelect}
      />
      <Buttons onReload={handleReload} onSkip={handleSkip} />
    </Box>
  )
}

export default MainPage
