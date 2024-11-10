import { Flex, Slide } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { pointQuries } from '@/api/services/user/point.api'
import { PointButton } from '@/components/PointButton'
import { useSelectedAnswerStore } from '@/stores/selected-answer'
import { Modal } from '@/types'

import { AnswerDetail } from './AnswerDetail'
import { BuyHintModal } from './BuyHintModal'
import { HintList } from './HintList'

interface HintDrawerProps {
  isOpen: boolean
  modal: Modal
}

export const HintDrawer = ({ isOpen, modal }: HintDrawerProps) => {
  const selectedAnswer = useSelectedAnswerStore((state) => state.selectedAnswer)
  const { data: point } = useQuery(pointQuries.point())

  if (!selectedAnswer) return null
  if (point === undefined) return null

  return (
    <Slide
      in={isOpen}
      direction="right"
      style={{ zIndex: 10, position: 'absolute' }}
      transition={{ exit: { duration: 0.8 } }}
    >
      <div id="hint-drawer">
        <Flex
          height="full"
          width={80}
          position="absolute"
          top={0}
          right={0}
          boxShadow="4px 0px 12px rgba(0, 0, 0, 0.5)"
          borderLeftRadius="24px"
          background="white"
          flexDirection="column"
          paddingY={8}
          paddingX={4}
        >
          <Flex justifyContent="end">
            <PointButton point={point} />
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <AnswerDetail answer={selectedAnswer} />
            <HintList
              answerId={selectedAnswer.answerId}
              openBuyHintModal={modal.onOpen}
            />
          </Flex>
        </Flex>
      </div>
      <BuyHintModal
        modal={modal}
        answerId={selectedAnswer.answerId}
        point={point}
      />
    </Slide>
  )
}
