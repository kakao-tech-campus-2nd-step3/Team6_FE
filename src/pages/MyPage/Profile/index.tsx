import { BiEditAlt } from 'react-icons/bi'

import { Avatar, Box, Button, Icon, IconButton, Text } from '@chakra-ui/react'

const profileDummyData = {
  backgroundImageUrl: 'https://picsum.photos/600/400',
  profileImage:
    'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
  name: '안희정',
  description: '컴퓨터학부 21학번 안희정입니다',
  todayVisited: 12,
  totalVisited: 123,
}
const pointDummyData = {
  amount: 10000,
}

export default function Profile() {
  return (
    <header>
      <Box
        height="144px"
        backgroundImage={`url('${profileDummyData.backgroundImageUrl}')`}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        marginBottom="40px"
      >
        <Avatar // absolute
          src={profileDummyData.profileImage}
          size="lg"
          position="absolute"
          bottom="-30px"
          left="30px"
          sx={{
            border: '0.8px solid',
            borderColor: 'black.700',
          }}
        />
        <IconButton
          aria-label="Edit"
          icon={<Icon as={BiEditAlt} boxSize="10px" />}
          borderRadius="20px"
          minWidth="20px"
          width="20px"
          height="20px"
          padding="0"
          position="absolute"
          bottom="-25px"
          left="80px"
          border="0.8px solid"
          borderColor="black.700"
        />
      </Box>
      <Box padding="0 30px">
        <Box display="flex" flexDirection="row" alignItems="center" gap="8px">
          <Text fontSize="xl" fontWeight="400">
            {profileDummyData.name}
          </Text>
          <Button
            color="primary_background"
            bg="#ea780c"
            display="flex"
            flexDirection="row"
            fontSize="xs"
            alignItems="center"
            padding="4px 7px"
            borderRadius="20px"
            minHeight="5px"
            height="auto"
            _hover={{ bg: '#ea780c', boxShadow: 'md' }}
          >
            <Text
              width="13px"
              height="13px"
              textAlign="center"
              lineHeight="1.05"
              borderRadius="20px"
              border="1px solid white"
              marginRight="3px"
            >
              P
            </Text>
            <Text fontWeight="bold" marginRight="6px">
              포인트
            </Text>
            <Text>{pointDummyData.amount}</Text>
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          alignItems="end"
        >
          <Text color="text_secondary" fontSize="md">
            {profileDummyData.description}
          </Text>
          <Text
            as="span"
            fontSize="xs"
            display="flex"
            flexDirection="row"
            gap="4.8px"
            padding="5px 9px"
            borderRadius="10px"
            border="1px solid"
            borderColor="brown.500"
          >
            <Text fontWeight="bold">TODAY</Text>
            <Text>{profileDummyData.todayVisited}</Text>
            <Text fontWeight="bold">TOTAL</Text>
            <Text>{profileDummyData.totalVisited}</Text>
          </Text>
        </Box>
      </Box>
    </header>
  )
}
