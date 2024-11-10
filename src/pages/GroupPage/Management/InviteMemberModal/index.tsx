import { useEffect } from 'react'
import { BiCopyAlt, BiLink } from 'react-icons/bi'

import { Flex, Input, useClipboard, useDisclosure } from '@chakra-ui/react'

import { useGroupInviteCode } from '@/api/services/group/group.api'
import { appendParamsToUrl } from '@/api/utils/common/appendParamsToUrl'
import { CardButton } from '@/components/CardButton'
import { FormConfirmModalButton, FormModal } from '@/components/Modal/FormModal'

interface InviteMemberModalProps {
  groupId: number
}

export const InviteMemberModal = ({ groupId }: InviteMemberModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { onCopy, setValue, value, hasCopied } = useClipboard('')

  const { data: inviteCode, refetch } = useGroupInviteCode({ groupId })

  useEffect(() => {
    if (inviteCode) {
      const inviteURL = appendParamsToUrl(
        `${import.meta.env.VITE_DOMAIN}/invite/${groupId}`,
        {
          'invite-code': inviteCode,
        }
      )
      setValue(inviteURL)
    }
  }, [setValue, inviteCode, groupId])

  return (
    <>
      <CardButton
        variant="white"
        orientation="horizontal"
        label="초대하기"
        description="새로운 멤버를 초대해보세요"
        Icon={BiLink}
        onClick={() => {
          refetch()
          onOpen()
        }}
      />
      <FormModal
        isOpen={isOpen}
        onClose={onClose}
        icon={<BiCopyAlt />}
        title="초대 링크 공유하기"
        description="초대링크 복사 후, 원하는 곳에 링크를 공유하세요!"
        confirmButton={
          value ? (
            <FormConfirmModalButton onClick={onCopy}>
              {hasCopied ? '복사완료' : '복사하기'}
            </FormConfirmModalButton>
          ) : (
            <FormConfirmModalButton>로딩중</FormConfirmModalButton>
          )
        }
      >
        <Flex alignItems="center" gap={2}>
          {value && (
            <Input size="sm" borderRadius="6" value={value} isReadOnly />
          )}
        </Flex>
      </FormModal>
    </>
  )
}
