import { BiCheckCircle } from 'react-icons/bi'

import { Button, useDisclosure } from '@chakra-ui/react'

import { appendParamsToUrl } from '@/api/utils/common/appendParamsToUrl'
import {
  ConfirmModal,
  ConfirmModalButton,
} from '@/components/Modal/ConfirmModal'
import { useAuthTokenStore } from '@/stores/auth-token'

export const PointModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const authToken = useAuthTokenStore((state) => state.authToken)

  const purchasePoint = () => {
    fetch(
      appendParamsToUrl(`${import.meta.env.VITE_BASE_URL}/api/point/purchase`, {
        point: 100,
      }),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      }
    )
  }

  return (
    <div>
      <Button colorScheme="primary" borderRadius={10} onClick={onOpen}>
        + 100P
      </Button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={onClose}
        icon={<BiCheckCircle />}
        title="포인트 충전하기"
        description="100P를 1000원에 구매합니다."
        confirmButton={
          <ConfirmModalButton
            onClick={() => {
              onClose()
              purchasePoint()
            }}
          >
            확인
          </ConfirmModalButton>
        }
      />
    </div>
  )
}
