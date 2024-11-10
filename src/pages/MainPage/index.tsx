import { useEffect, useState } from 'react'

import { Flex, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { friendsQueries } from '@/api/services/friend/queries'
import { Loading } from '@/components/Loading'
import { useSelectedGroupStore } from '@/stores/selected-group'

import { CommonGame } from './GameSection/CommonGame'
import { GroupGame } from './GameSection/GroupGame'
import { ReadySection } from './ReadySection'
import { ReplaySection } from './Replaysection'

type GameType = 'READY' | 'REPLAY' | 'PLAY'

export default function MainPage() {
  const [play, setPlay] = useState<GameType>('READY')
  const [score, setScore] = useState(0)

  const group = useSelectedGroupStore((state) => state.selectedGroup)

  const { data: friends, status } = useQuery(friendsQueries.myFriends())

  useEffect(() => {
    if (play === 'PLAY') {
      setScore(0)
    }
  }, [play])

  useEffect(() => {
    setPlay('READY')
    setScore(0)
  }, [group])

  if (status === 'pending') return <Loading />
  if (!friends) return <Text>친구를 초대해보세요!</Text>

  if (play === 'READY') {
    return (
      <ReadySection
        groupName={group?.groupName}
        onClickPlay={() => setPlay('PLAY')}
      />
    )
  }

  if (play === 'REPLAY') {
    return (
      <ReplaySection
        onClickEndButton={() => setPlay('READY')}
        onClickReplayButton={() => setPlay('PLAY')}
        score={score}
      />
    )
  }

  return (
    <Flex flex={1} height="full" justifyContent="center">
      {group?.groupId ? (
        <GroupGame
          groupId={group.groupId}
          handleFinishGame={() => setPlay('REPLAY')}
          handleClickProfile={() => setScore(score + 1)}
        />
      ) : (
        <CommonGame
          handleFinishGame={() => setPlay('REPLAY')}
          handleClickProfile={() => setScore(score + 1)}
        />
      )}
    </Flex>
  )
}
