import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'

type FormModalProps = {
  isOpen: boolean
  onClose: () => void
  icon: ReactElement
  title: string
  description: string
  children: ReactNode
  confirmButton: ReactNode
}

export const FormModal = ({
  isOpen,
  onClose,
  icon,
  title,
  description,
  children,
  confirmButton,
}: FormModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box
            background="ivory"
            width="fit-content"
            padding="0.5rem"
            rounded="full"
            marginBottom="0.5rem"
            color="orange"
          >
            {icon}
          </Box>
          <Text fontSize="large" marginLeft="0.5rem">
            {title}
          </Text>
          <Text
            fontSize="small"
            fontWeight="medium"
            paddingTop="0.3rem"
            marginLeft="0.5rem"
            color="gray"
          >
            {description}
          </Text>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter gap="0.5rem">
          <Button
            onClick={onClose}
            variant="outline"
            color="orange"
            borderColor="orange"
            fontSize="small"
            height="fit-content"
            paddingY="0.6rem"
            width="full"
          >
            취소하기
          </Button>
          {confirmButton}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

interface FormConfirmModalButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const FormConfirmModalButton = ({
  children,
  onClick,
}: FormConfirmModalButtonProps) => {
  return (
    <Button
      backgroundColor="orange"
      color="white"
      fontSize="small"
      height="fit-content"
      paddingY="0.6rem"
      width="full"
      onClick={onClick}
    >
      {children}
    </Button>
  )
}