import { ReactElement } from 'react'

import {
  Box,
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'

interface AlertModalProps {
  isOpen: boolean
  onClose: () => void
  icon: ReactElement
  title: string
  description: string
}

export const AlertModal = ({
  isOpen,
  onClose,
  icon,
  title,
  description,
}: AlertModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box
            background="primary_background"
            color="primary"
            width="fit-content"
            padding="0.5rem"
            rounded="full"
            marginBottom="0.5rem"
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
            color="text_detail"
          >
            {description}
          </Text>
        </ModalHeader>
        <ModalFooter>
          <Button
            onClick={onClose}
            variant="outline"
            colorScheme="primary"
            fontSize="small"
            height="fit-content"
            paddingY="0.5rem"
            paddingX="1.2rem"
          >
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
