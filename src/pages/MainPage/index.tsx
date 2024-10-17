import { Suspense, useState } from 'react'

import { Box } from '@chakra-ui/react'

import { useKakaoFriends } from '@/api/services/answer'
import { Loading } from '@/components/Loading'

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
  const { data: all = [], isLoading } = useKakaoFriends()

  if (isLoading) {
    return <Loading />
  }
  const handleProfileSelect = (profileId: number) => {
    console.log(`${profileId}`) // 선택된 프로필 ID 확인하기
    setquestionIndex((prevIndex) => (prevIndex + 1) % all.length)
  }

  const handleSkip = () => {
    setquestionIndex((prevIndex) => (prevIndex + 1) % all.length)
  }
  // reloadProfiles 테스트

  /* const handleReload = async () => {
    const data = await refreshProfiles()
    console.log('프로필 새로 불러오기:', data)
  } */

  return (
    <Box
      bg="secondary_background"
      p={24}
      borderRadius="20px"
      textAlign="center"
    >
      <Question questionIndex={questionIndex} />
      <ProfileGrid
        profiles={all.slice(0, 3)}
        onProfileSelect={handleProfileSelect}
      />
      <ProfileGrid
        profiles={all.slice(3, 5)}
        onProfileSelect={handleProfileSelect}
      />
      <Buttons onReload={() => {}} onSkip={handleSkip} />
    </Box>
  )
}

export default MainPage
