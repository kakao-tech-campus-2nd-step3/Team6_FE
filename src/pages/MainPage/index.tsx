import { Avatar, Box, Button, SimpleGrid, Text, VStack } from '@chakra-ui/react'

const MainPage = () => {
  const all = [
    { name: '한바름', img: '/image.png' },
    { name: '곽희주', img: '/image.png' },
    { name: '김다운', img: '/image.png' },
    { name: '이형진', img: '/image.png' },
    { name: '신승욱', img: '/image.png' },
  ]

  return (
    <Box
      bg="secondary_background"
      p={24}
      borderRadius="20px"
      textAlign="center"
    >
      {/* font.ts가 머지되면 600으로 weight 변경하기 */}
      <Text fontWeight="bold" fontSize="4xl" color="text" mb={24}>
        가장 MZ스러운 사람
      </Text>

      {/* 첫 번째 줄 프로필 3개 */}
      <SimpleGrid columns={3} spacing={16} mb={20}>
        {all.slice(0, 3).map((profile) => (
          <Button key={profile.name} variant="ghost" textAlign="center">
            <VStack spacing={4}>
              <Avatar src={profile.img} size="lg" />
              {/* 폰트 weight 300으로 수정하기 */}
              <Text fontSize="sm" color="text_secondary" fontWeight="medium">
                {profile.name}
              </Text>
            </VStack>
          </Button>
        ))}
      </SimpleGrid>

      {/* 두 번째 줄 프로필 2개 */}
      <SimpleGrid columns={2} mb={16}>
        {all.slice(3, 5).map((profile) => (
          <Button key={profile.name} variant="ghost" textAlign="center">
            <VStack spacing={4}>
              <Avatar src={profile.img} size="lg" />
              {/* 폰트 weight 300 */}
              <Text fontSize="sm" color="text_secondary" fontWeight="medium">
                {profile.name}
              </Text>
            </VStack>
          </Button>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default MainPage
