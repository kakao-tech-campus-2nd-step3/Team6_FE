import { BiEditAlt } from 'react-icons/bi'

import {
  Avatar,
  Box,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react'

const GroupProfileDummyData = {
  profileImage:
    'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
  name: '카테캠 2기',
  description: '카카오테크 캠퍼스 2기의 그룹페이지 입니다',
}

export default function Profile() {
  return (
    <header>
      <Box height="144px" position="relative" marginBottom="-15px">
        <HStack
          alignItems="center"
          spacing="15px"
          paddingLeft="25px"
          marginTop="30px"
        >
          <Box position="relative">
            <Avatar
              src={GroupProfileDummyData.profileImage}
              size="xl"
              sx={{
                border: '0.8px solid',
                borderColor: 'black.300',
              }}
            />
          </Box>

          <VStack align="flex-start" spacing={0}>
            <HStack spacing={2} alignItems="center">
              <Text fontSize="xl">{GroupProfileDummyData.name}</Text>

              <Text
                fontSize="xs"
                padding="3px 6px"
                borderRadius="8px"
                border="1px solid"
                borderColor="primary"
                fontWeight="bold"
                color="primary"
              >
                그룹장
              </Text>
            </HStack>

            <HStack spacing={2} alignItems="center">
              <Text color="text_secondary" fontSize="md">
                {GroupProfileDummyData.description}
              </Text>

              <IconButton
                aria-label="Edit"
                icon={<Icon as={BiEditAlt} boxSize="10px" />}
                borderRadius="20px"
                minWidth="20px"
                width="20px"
                height="20px"
                padding="0"
                border="1px solid"
                borderColor="black.400"
              />
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </header>
  )
}
