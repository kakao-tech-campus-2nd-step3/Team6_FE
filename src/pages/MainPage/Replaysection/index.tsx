import { Button, Center, Flex, Heading, Text } from '@chakra-ui/react'

interface ReplaySectionProps {
  onClickEndButton: () => void
  onClickReplayButton: () => void
  score: number
}

export const ReplaySection = ({
  onClickEndButton,
  onClickReplayButton,
  score,
}: ReplaySectionProps) => {
  return (
    <Center height="full">
      <Flex flexDirection="column">
        <Heading
          textAlign="center"
          size="2xl"
          color="orange.500"
          fontWeight="800"
        >
          Whokie
        </Heading>
        <Text textAlign="center" fontSize="1.2rem" fontWeight="bold">
          친구 {score}명에게 칭찬 쿠키를 전달했어요!
        </Text>
        <Heading textAlign="center" paddingTop={4} paddingBottom={16}>
          🎉 +{score * 5} P 🎉
        </Heading>
        <Flex justifyContent="center" gap={4}>
          <Button
            colorScheme="primary"
            variant="outline"
            height="2.5rem"
            size="lg"
            width="full"
            onClick={onClickEndButton}
          >
            그만하기
          </Button>
          <Button
            colorScheme="primary"
            height="2.5rem"
            size="lg"
            width="full"
            onClick={onClickReplayButton}
          >
            계속하기
          </Button>
        </Flex>
      </Flex>
    </Center>
  )
}
