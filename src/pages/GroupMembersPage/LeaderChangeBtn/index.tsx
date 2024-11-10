import { useState } from 'react'
import { BiError, BiMessageAltError } from 'react-icons/bi'

import { Button, useDisclosure } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/api/instance'
import { changeLeader } from '@/api/services/group/member.api'
import { AlertModal } from '@/components/Modal/AlertModal'
import { ConfirmModal } from '@/components/Modal/ConfirmModal'

type LeaderChangeBtnProps = {
  groupId: number
  leaderChangeBtn: boolean
  setLeaderChangeBtn: (leaderChangeBtn: boolean) => void
  leader: {
    userId: number
    userName: string
  }
  changeSelectId: number | null
  changeSelectName: string
}

export default function LeaderChangeBtn({
  groupId,
  leaderChangeBtn,
  setLeaderChangeBtn,
  leader,
  changeSelectId,
  changeSelectName,
}: LeaderChangeBtnProps) {
  const confirmAlert = useDisclosure()
  const errorAlert = useDisclosure()
  const [errorMessage, setErrorMessage] = useState<string>('')

  const { mutate: patchChangeLeader } = useMutation({
    mutationFn: () => {
      if (groupId === undefined || changeSelectId === null) {
        throw new Error('잘못된 접근입니다.')
      }
      return changeLeader({
        groupId,
        pastLeaderId: leader.userId,
        newLeaderId: changeSelectId,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['changeLeader'] })
      window.location.href = `/group/${groupId}`
    },
    onError: () => {
      setErrorMessage('그룹장 위임이 불가합니다')
      errorAlert.onOpen()
    },
  })

  const onClickChangeBtn = () => {
    if (changeSelectId === null) {
      setErrorMessage('그룹장을 위임할 사람을 선택해주세요')
      errorAlert.onOpen()
    } else if (leader.userId === changeSelectId) {
      setErrorMessage('그룹장 위임은 그룹장이 아닌 사람에게 할 수 있어요')
      errorAlert.onOpen()
    } else {
      confirmAlert.onOpen()
    }
  }

  const onClickConfirmBtn = () => {
    setLeaderChangeBtn(false)
    confirmAlert.onClose()
    if (leader.userId === undefined || changeSelectId === null) {
      setErrorMessage('잘못된 접근입니다')
    } else {
      patchChangeLeader()
    }
  }

  return (
    <>
      {leaderChangeBtn && (
        <Button
          bg="brown.500"
          color="white"
          fontSize="small"
          height={5}
          marginBottom={3}
          padding="8px"
          _hover={{ bg: 'brown.600' }}
          onClick={() => onClickChangeBtn()}
        >
          위임하기
        </Button>
      )}
      <Button
        bg="none"
        color="brown.600"
        fontSize="small"
        height={5}
        marginBottom={3}
        marginLeft={2}
        padding="8px"
        _hover={{ bg: 'brown.200' }}
        onClick={() => setLeaderChangeBtn(!leaderChangeBtn)}
      >
        {leaderChangeBtn ? '취소' : '그룹장 위임하기'}
      </Button>
      <ConfirmModal
        isOpen={confirmAlert.isOpen}
        onClose={confirmAlert.onClose}
        icon={<BiMessageAltError />}
        title="그룹장을 변경하시겠어요?"
        description={`${leader.userName}님에서 ${changeSelectName}님으로 그룹장 권한을 위임해요`}
        confirmButton={
          <Button
            colorScheme="primary"
            fontSize="small"
            height="fit-content"
            paddingY="0.6rem"
            onClick={onClickConfirmBtn}
          >
            확인
          </Button>
        }
      />
      <AlertModal
        isOpen={errorAlert.isOpen}
        onClose={errorAlert.onClose}
        icon={<BiError />}
        title={errorMessage}
        description=""
      />
    </>
  )
}
