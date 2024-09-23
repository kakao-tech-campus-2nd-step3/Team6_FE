import { Text, VStack } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <VStack fontSize="small" color="whiteAlpha.300" gap={0} pb="2">
      <Text>카카오 테크 캠퍼스 2기 경북대학교 Whokie</Text>
      <Text>
        © 2024 Copyright. 권다운・김건・신형진・유승욱・김아진・안희정・정솔빈
      </Text>
    </VStack>
  )
}
