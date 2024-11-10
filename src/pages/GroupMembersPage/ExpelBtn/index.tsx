import { BiError, BiMessageAltError } from 'react-icons/bi'

import { Button, useDisclosure } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/api/instance'
import { expelMember } from '@/api/services/group/member.api'
import { AlertModal } from '@/components/Modal/AlertModal'
import { ConfirmModal } from '@/components/Modal/ConfirmModal'
import { GroupRole } from '@/types'

type ExpelBtnProps = {
  groupId: number
  userId: number
  userName: string
  userRole: GroupRole
}

export default function ExpelBtn({
  groupId,
  userId,
  userName,
  userRole,
}: ExpelBtnProps) {
  const errorAlert = useDisclosure()
  const warningAlert = useDisclosure()

  const { mutate: onExpelMember } = useMutation({
    mutationFn: () => expelMember({ groupId, userId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expelMember'] })
      window.location.reload()
    },
    onError: () => {
      errorAlert.onOpen()
    },
  })

  const handleExpel = () => {
    onExpelMember()
  }

  return (
    <>
      <Button
        color="white"
        bg="orange.500"
        width="100px"
        height="35px"
        margin="5px 0"
        _hover={{ bg: 'orange' }}
        onClick={warningAlert.onOpen}
        isDisabled={userRole === 'LEADER'}
      >
        내보내기
      </Button>
      <AlertModal
        isOpen={errorAlert.isOpen}
        onClose={errorAlert.onClose}
        icon={<BiError />}
        title="멤버를 내보낼 권한이 없습니다F"
        description=""
      />
      <ConfirmModal
        isOpen={warningAlert.isOpen}
        onClose={warningAlert.onClose}
        icon={<BiMessageAltError />}
        title={`${userName}님을 그룹에서 내보내시겠어요?`}
        description="친구를 더 이상 그룹에서 볼 수 없어요"
        confirmButton={
          <Button
            colorScheme="primary"
            fontSize="small"
            height="fit-content"
            paddingY="0.6rem"
            onClick={handleExpel}
          >
            내보내기
          </Button>
        }
      />
    </>
  )
}
