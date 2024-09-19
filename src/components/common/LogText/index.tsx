import { Flex, Tag, Text } from '@chakra-ui/react'

import { HintIcon } from './HintIcon'

type LogTextProps = {
  groupName?: 'ALL' | string
  logContent: string
  hintCount: 0 | 1 | 2 | 3
}

export const LogText = ({
  groupName = 'ALL',
  logContent,
  hintCount,
}: LogTextProps) => {
  return (
    <Flex gap="0.5rem" alignItems="center">
      <Tag
        fontSize="small"
        minWidth="fit-content"
        height="fit-content"
        borderRadius="full"
        paddingY="0.5rem"
        paddingX="1rem"
      >
        {groupName}
      </Tag>
      <div>
        <Text as="b">{logContent}</Text>
        <Text display="inline">으로 쿠키를 받았습니다.</Text>
      </div>
      <HintIcon hintCount={hintCount} />
    </Flex>
  )
}
