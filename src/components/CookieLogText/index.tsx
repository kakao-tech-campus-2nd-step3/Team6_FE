import { Flex, Tag, Text } from '@chakra-ui/react'

import { HintIcon } from './HintIcon'

interface CookieLogTextProps {
  groupName?: 'ALL' | string
  logContent: string
  hintCount: 0 | 1 | 2 | 3
}

export const CookieLogText = ({
  groupName = 'ALL',
  logContent,
  hintCount,
}: CookieLogTextProps) => {
  return (
    <Flex gap="0.5rem" alignItems="center">
      <Tag
        fontSize="x-small"
        minWidth="fit-content"
        height="fit-content"
        borderRadius="full"
        paddingY="0.3rem"
        paddingX="0.6rem"
        backgroundColor="brown.200"
      >
        {groupName}
      </Tag>
      <Flex gap={1} fontSize="small">
        <Text as="b">{logContent}</Text>
        <Text display="inline">으로 쿠키를 받았습니다.</Text>
      </Flex>
      <HintIcon hintCount={hintCount} />
    </Flex>
  )
}
