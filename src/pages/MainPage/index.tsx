import { Box, Text } from '@chakra-ui/react'

const MainPage = () => {
  return (
    <Box
      bg="secondary_background"
      p={20}
      borderRadius="20px"
      textAlign="center"
    >
      {/* font.ts가 머지되면 600으로 사이즈 변경하기 */}
      <Text fontWeight="bold" fontSize="4xl" color="text" mb={12}>
        가장 MZ스러운 사람
      </Text>
    </Box>
  )
}

export default MainPage
