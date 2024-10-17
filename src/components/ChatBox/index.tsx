import { Box, Flex } from '@chakra-ui/react'

import { ChatBoxProps } from '@/types'

export const ChatBox = ({
  chatItem: { direction, content, createdAt },
}: ChatBoxProps) => {
  const isRight = direction === 'right'

  return (
    <Flex
      position="relative"
      margin="15px 0"
      alignItems="end"
      flexDirection={isRight ? 'row-reverse' : 'row'}
    >
      <Flex
        height="15px"
        width="20px"
        bg={isRight ? 'orange.300' : 'white'}
        clipPath={
          isRight
            ? 'polygon(0 0, 0 100%, 100% 50%)'
            : 'polygon(100% 0, 0 50%, 100% 100%)'
        }
        position="absolute"
        right={isRight ? '23px' : 'auto'}
        left={isRight ? 'auto' : '23px'}
        top="7px"
        zIndex="10"
      />
      <Flex
        minHeight="30px"
        width="260px"
        bg={isRight ? 'orange.300' : 'white'}
        borderRadius="20px"
        margin={isRight ? '0 30px 0 5px' : '0 5px 0 30px'}
        padding="4px 15px"
        zIndex="100"
      >
        <Box fontSize="small">{content}</Box>
      </Flex>
      <Flex fontSize="xx-small">{createdAt}</Flex>
    </Flex>
  )
}
