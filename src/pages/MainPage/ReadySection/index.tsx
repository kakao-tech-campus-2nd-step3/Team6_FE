import { Button, Center, Flex, Heading, Text } from '@chakra-ui/react'

import { Cookies } from '@/components/Cookies'

interface ReadySectionProps {
  groupName?: string
  onClickPlay: () => void
}

export const ReadySection = ({ groupName, onClickPlay }: ReadySectionProps) => {
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
          {groupName ? `${groupName} 멤버에게` : '모든 친구에게'} 칭찬 쿠키 주기
        </Text>
        <Cookies paddingY={10} />
        <Flex justifyContent="center">
          <Button
            colorScheme="primary"
            height="3rem"
            size="lg"
            width="full"
            marginX={10}
            fontSize="1.5rem"
            onClick={onClickPlay}
          >
            시작하기
          </Button>
        </Flex>
      </Flex>
    </Center>
  )
}
