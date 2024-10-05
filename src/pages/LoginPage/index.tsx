import { Flex, Heading, Image, Text } from '@chakra-ui/react'

import KakaoSymbol from '@/assets/kakao-logo-symbol.svg'

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
        <Flex
          background="kakao"
          rounded="6px"
          justifyContent="center"
          alignItems="center"
          height={10}
          gap={3}
          _hover={{ cursor: 'pointer' }}
        >
          <Image src={KakaoSymbol} width={5} />
          <Text fontSize="14px" fontWeight="bold" color="rgba(0, 0, 0, 0.85)">
            카카오 로그인
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
