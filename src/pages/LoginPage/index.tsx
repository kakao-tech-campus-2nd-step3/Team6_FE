import { Flex, Heading, Text } from '@chakra-ui/react'

import { KakaoLoginButton } from './KakaoLoginButton'

export default function LoginPage() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="full"
      gap={6}
    >
      <Flex flexDirection="column">
        <Heading color="primary" paddingY={2}>
          Whokie
        </Heading>
        <Text fontWeight="bold" color="text">
          Whokie에 오신 것을 환영해요!
        </Text>
        <Text fontSize="small" color="text_secondary" paddingBottom={6}>
          후키에서는 친구들에게 긍정적인 투표를 할 수 있어요
        </Text>
        <KakaoLoginButton />
      </Flex>
    </Flex>
  )
}
