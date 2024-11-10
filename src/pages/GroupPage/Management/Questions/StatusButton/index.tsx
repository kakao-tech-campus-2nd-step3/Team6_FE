import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'

interface StatusButtonsProps {
  status: 'READY' | 'APPROVED' | 'REJECTED'
  setStatus: (status: 'READY' | 'APPROVED' | 'REJECTED') => void
}

export const StatusButtons = ({ status, setStatus }: StatusButtonsProps) => {
  return (
    <Box mb="20px">
      <Stack direction="row" spacing="15px">
        <Button
          onClick={() => setStatus('READY')}
          colorScheme={status === 'READY' ? 'gray' : 'gray'}
          variant={status === 'READY' ? 'solid' : 'outline'}
          borderRadius="full"
        >
          승인 대기
        </Button>
        <Button
          onClick={() => setStatus('APPROVED')}
          colorScheme={status === 'APPROVED' ? 'green' : 'gray'}
          variant={status === 'APPROVED' ? 'solid' : 'outline'}
          borderRadius="full"
        >
          승인됨
        </Button>
        <Button
          onClick={() => setStatus('REJECTED')}
          colorScheme={status === 'REJECTED' ? 'red' : 'gray'}
          variant={status === 'REJECTED' ? 'solid' : 'outline'}
          borderRadius="full"
        >
          거절됨
        </Button>
      </Stack>
      <Flex justifyContent="end">
        <Text
          fontSize="14px"
          fontWeight="medium"
          paddingRight="5px"
          color="text_description"
        >
          승인 거절
        </Text>
      </Flex>
    </Box>
  )
}
