import { Link } from 'react-router-dom'

import { Flex, Image, Text } from '@chakra-ui/react'

import KakaoSymbol from '@/assets/kakao-logo-symbol.svg'

export const KakaoLoginButton = () => {
  return (
    <Link to={`${import.meta.env.VITE_BASE_URL}/api/user/login`}>
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
    </Link>
  )
}
