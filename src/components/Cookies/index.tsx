import { Box, Flex, FlexProps, Image, keyframes } from '@chakra-ui/react'

import Cookie1 from '@/assets/cookie1.svg'
import Cookie2 from '@/assets/cookie2.svg'
import Cookie3 from '@/assets/cookie3.svg'
import Cookie4 from '@/assets/cookie4.svg'

const CookieList = [Cookie4, Cookie2, Cookie3, Cookie1]

interface CookiesProps extends FlexProps {
  width?: number
}

export const Cookies = ({ width = 20, ...props }: CookiesProps) => {
  return (
    <Flex gap={1} {...props}>
      {Array.from({ length: 4 }, (_, index) => (
        <Box
          key={index}
          width={width}
          height={width}
          animation={`${pulseAnimation} 2s infinite ease-in-out ${index * -0.8}s`}
        >
          <Image src={CookieList[index]} />
        </Box>
      ))}
    </Flex>
  )
}

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(0.98);
  }
  50% {
    transform: scale(1);
  }
`
