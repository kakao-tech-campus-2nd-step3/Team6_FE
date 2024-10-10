import { Box, keyframes } from '@chakra-ui/react'

const loadingAnimation = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
`

export const Loading = () => {
  const dots = ['dot1', 'dot2', 'dot3'].map((dotKey, index) => (
    <Box
      key={dotKey}
      as="span"
      width="10px"
      height="10px"
      borderRadius="50%"
      bg="primary"
      animation={`${loadingAnimation} 1.5s infinite ease-in-out ${index * 0.5}s`}
    />
  ))

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="5px"
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      {dots}
    </Box>
  )
}
