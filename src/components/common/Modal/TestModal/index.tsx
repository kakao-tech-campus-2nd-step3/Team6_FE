import { useRef } from 'react'
import { BiCheckCircle } from 'react-icons/bi'

import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react'

import { AlertModal } from '../AlertModal'
import { ConfirmModal, ConfirmModalButton } from '../ConfirmModal'
import { FormConfirmModalButton, FormModal } from '../FormModal'

export const TestModal = () => {
  const alertDisclosure = useDisclosure()
  const confirmDisclosure = useDisclosure()
  const formDisclosure = useDisclosure()

  const initialRef = useRef(null)

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
      <div>
        <Button onClick={formDisclosure.onOpen}>Form Modal 사용 방법</Button>
        <FormModal
          isOpen={formDisclosure.isOpen}
          onClose={formDisclosure.onClose}
          icon={<BiCheckCircle />}
          title="제목입니다"
          description="대충 설명적으면 됩니다."
          confirmButton={
            <FormConfirmModalButton
              onClick={() => {
                console.log('여기에 액션 추가하기')
                formDisclosure.onClose()
              }}
            >
              제출하기
            </FormConfirmModalButton>
          }
        >
          <FormControl>
            <FormLabel fontSize="small">입력 받기</FormLabel>
            <Input
              ref={initialRef}
              placeholder="안녕하세요~"
              size="sm"
              borderRadius="6"
            />
            <FormHelperText textAlign="center" fontSize="small">
              입력 설명 여기에 넣으면 됩니다.
            </FormHelperText>
          </FormControl>
        </FormModal>
      </div>
    </Flex>
  )
}
