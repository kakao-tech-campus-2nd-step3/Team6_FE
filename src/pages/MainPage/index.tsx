import { Suspense, useCallback, useEffect, useState } from 'react'

import { Box, Flex } from '@chakra-ui/react'

import { useKakaoFriends } from '@/api/services/friend/useKakaoFriends'
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
  const [remain, setRemain] = useState<Friend[]>([])
  const [picked, setPicked] = useState<Friend[]>([])

  const handleProfileSelect = (profileId: number) => {
    console.log(`${profileId}`) // 선택된 프로필 ID 확인하기
    setquestionIndex((prevIndex) => (prevIndex + 1) % all.length)
  }

  const handleSkip = () => {
    setquestionIndex((prevIndex) => (prevIndex + 1) % all.length)
  }

  const pickRandomProfiles = useCallback((arr: Friend[], count: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }, [])

  const handleReload = useCallback(() => {
    if (remain.length >= 5) {
      const randomFive = pickRandomProfiles(remain, 5) // remain에서 5명 뽑기
      setPicked(randomFive)

      // 남은 선택지들을 remain에 넣기
      const updatedRemain = remain.filter(
        (profile) => !randomFive.includes(profile)
      )
      setRemain(updatedRemain)
    } else {
      // picked와 remain을 swap
      const combined = [...remain, ...picked]
      const randomFive = pickRandomProfiles(combined, 5)
      setPicked(randomFive)

      const updatedRemain = combined.filter(
        (profile) => !randomFive.includes(profile)
      )
      setRemain(updatedRemain)
    }
  }, [remain, picked, pickRandomProfiles])

  useEffect(() => {
    if (all.length > 0) {
      setRemain(all)
    }
  }, [all])

  useEffect(() => {
    if (remain.length > 0 && picked.length === 0) {
      handleReload()
    }
  }, [remain, picked, handleReload])

  return (
    <Box bg="secondary_background" borderRadius="20px" textAlign="center">
      <Question questionIndex={questionIndex} />
      <Box p={24}>
        <Flex
          direction="column"
          position="absolute"
          bottom={32}
          left="50%"
          transform="translateX(-45%)"
        >
          <ProfileGrid
            profiles={picked.slice(0, 3)}
            onProfileSelect={handleProfileSelect}
          />
          <ProfileGrid
            profiles={picked.slice(3, 5)}
            onProfileSelect={handleProfileSelect}
          />
          <Buttons onReload={handleReload} onSkip={handleSkip} />
        </Flex>
      </Box>
    </Box>
  )
}

export default MainPage
