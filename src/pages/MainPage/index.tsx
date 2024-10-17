import { Suspense, useEffect, useState } from 'react'

import { Box } from '@chakra-ui/react'

import { useKakaoFriends } from '@/api/services/answer'
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
  const { data: all = [] } = useKakaoFriends()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [topProfiles, setTopProfiles] = useState<Friend[]>([])
  const [bottomProfiles, setBottomProfiles] = useState<Friend[]>([])

  const handleProfileSelect = (profileId: number) => {
    console.log(`${profileId}`) // 선택된 프로필 ID 확인하기
    setquestionIndex((prevIndex) => (prevIndex + 1) % all.length)
  }

  const handleSkip = () => {
    setquestionIndex((prevIndex) => (prevIndex + 1) % all.length)
  }

  const handleReload = () => {
    const totalProfiles = all.length
    const nextIndex = (currentIndex + 5) % totalProfiles
    setCurrentIndex(nextIndex)
  }

  useEffect(() => {
    const remainingProfiles: Friend[] = all.slice(currentIndex) // 현재 인덱스 이후의 프로필
    const remainingCount = remainingProfiles.length

    if (remainingCount === 0) {
      // 남은 데이터가 없으면 처음부터 시작
      setTopProfiles(all.slice(0, 3))
      setBottomProfiles(all.slice(3, 5))
      setCurrentIndex(0) // 다시 0으로 초기화
    } else if (remainingCount === 1) {
      setTopProfiles([remainingProfiles[0], all[0], all[1]])
      setBottomProfiles([all[2], all[3]])
    } else if (remainingCount === 2) {
      setTopProfiles([remainingProfiles[0], remainingProfiles[1], all[0]])
      setBottomProfiles([all[1], all[2]])
    } else if (remainingCount === 3) {
      setTopProfiles([
        remainingProfiles[0],
        remainingProfiles[1],
        remainingProfiles[2],
      ])
      setBottomProfiles([all[0], all[1]])
    } else if (remainingCount === 4) {
      setTopProfiles([
        remainingProfiles[0],
        remainingProfiles[1],
        remainingProfiles[2],
      ])
      setBottomProfiles([remainingProfiles[3], all[0]])
    } else {
      // 5개 이상의 남은 프로필이 있을 경우
      setTopProfiles(remainingProfiles.slice(0, 3))
      setBottomProfiles(remainingProfiles.slice(3, 5))
    }
  }, [currentIndex, all])

  return (
    <Box
      bg="secondary_background"
      p={24}
      borderRadius="20px"
      textAlign="center"
    >
      <Question questionIndex={questionIndex} />
      <ProfileGrid
        profiles={topProfiles}
        onProfileSelect={handleProfileSelect}
      />
      <ProfileGrid
        profiles={bottomProfiles}
        onProfileSelect={handleProfileSelect}
      />
      <Buttons onReload={handleReload} onSkip={handleSkip} />
    </Box>
  )
}

export default MainPage
