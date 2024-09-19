import { BiCheckCircle } from 'react-icons/bi'

import { Button, Flex, useDisclosure } from '@chakra-ui/react'

import { AlertModal } from '../AlertModal'
import { ConfirmModal, ConfirmModalButton } from '../ConfirmModal'

export const TestModal = () => {
  const alertDisclosure = useDisclosure()
  const confirmDisclosure = useDisclosure()

  return (
    <Flex
      flexDirection="column"
      gap="2rem"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <div>
        <Button onClick={alertDisclosure.onOpen}>Alert Modal 사용 방법</Button>
        <AlertModal
          isOpen={alertDisclosure.isOpen}
          onClose={alertDisclosure.onClose}
          icon={<BiCheckCircle />}
          title="제목입니다"
          description="대충 설명적으면 됩니다."
        />
      </div>
      <div>
        <Button onClick={confirmDisclosure.onOpen}>
          Confirm Modal 사용 방법
        </Button>
        <ConfirmModal
          isOpen={confirmDisclosure.isOpen}
          onClose={confirmDisclosure.onClose}
          icon={<BiCheckCircle />}
          title="제목입니다"
          description="대충 설명적으면 됩니다."
          confirmButton={
            <ConfirmModalButton
              onClick={() => {
                console.log('여기에 액션 추가하기')
                confirmDisclosure.onClose()
              }}
            >
              확인
            </ConfirmModalButton>
          }
        />
      </div>
    </Flex>
  )
}
