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

  console.log(questionText) // api 연결 테스트
  console.log(all) // api 연결 테스트

  return (
    <Box
      bg="secondary_background"
      p={24}
      borderRadius="20px"
      textAlign="center"
    >
      <Question questionText={questionText} />
      {all.length > 0 && ( // 현재 데이터가 없는 상태여서 데이터가 없는 경우 처리를 위해 추가
        <>
          <ProfileGrid profiles={all.slice(0, 3)} />
          <ProfileGrid profiles={all.slice(3, 5)} />
        </>
      )}
      <Buttons onReload={refreshProfiles} />
    </Box>
  )
}

export default MainPage
