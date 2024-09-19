import { BiCheckCircle } from 'react-icons/bi'

import { Button, useDisclosure } from '@chakra-ui/react'

import { AlertModal } from '../AlertModal'

export const TestModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Button onClick={onOpen}>Alert Modal 사용 방법</Button>
      <AlertModal
        isOpen={isOpen}
        onClose={onClose}
        icon={<BiCheckCircle />}
        title="제목입니다"
        description="대충 설명적으면 됩니다."
      />
    </div>
  )
}
