import { BiChevronsRight, BiGroup } from 'react-icons/bi'

import {
  Avatar,
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'

const Question = () => {
  return (
    <Text fontWeight="600" fontSize="4xl" color="text" mb={24}>
      가장 MZ스러운 사람
    </Text>
  )
}

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
      <Question />

      {/* 첫 번째 줄 프로필 3개 */}
      <SimpleGrid columns={3} spacing={16} mb={20}>
        {all.slice(0, 3).map((profile) => (
          <Button
            key={profile.name}
            variant="ghost"
            textAlign="center"
            _hover={{ bg: 'brown.50' }}
          >
            <VStack spacing={4}>
              <Avatar
                src={profile.img}
                size="lg"
                _hover={{
                  boxShadow: '0 0 0 4px rgba(210, 180, 140, 0.5)',
                }}
              />
              <Text fontSize="sm" color="text_secondary" fontWeight="300">
                {profile.name}
              </Text>
            </VStack>
          </Button>
        ))}
      </SimpleGrid>

      {/* 두 번째 줄 프로필 2개 */}
      <SimpleGrid columns={2} mb={16}>
        {all.slice(3, 5).map((profile) => (
          <Button
            key={profile.name}
            variant="ghost"
            textAlign="center"
            _hover={{ bg: 'brown.50' }}
          >
            <VStack spacing={4}>
              <Avatar
                src={profile.img}
                size="lg"
                _hover={{
                  boxShadow: '0 0 0 4px rgba(210, 180, 140, 0.5)',
                }}
              />
              <Text fontSize="sm" color="text_secondary" fontWeight="300">
                {profile.name}
              </Text>
            </VStack>
          </Button>
        ))}
      </SimpleGrid>

      <Flex justify="space-between">
        <Button
          leftIcon={<BiGroup />}
          bg="brown.50"
          color="brown.600"
          _hover={{ bg: 'brown.50', color: 'black.900' }}
        >
          Reload
        </Button>
        <Button
          rightIcon={<BiChevronsRight />}
          bg="brown.50"
          color="brown.600"
          _hover={{ bg: 'brown.50', color: 'black.900' }}
        >
          Skip
        </Button>
      </Flex>
    </Box>
  )
}

export default MainPage
