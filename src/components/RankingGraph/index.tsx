import { IconType } from 'react-icons'
import { GiRank1, GiRank2, GiRank3 } from 'react-icons/gi'

import { Box, Center, HStack, Image, Text, VStack } from '@chakra-ui/react'

interface RankItem {
  imageSrc?: string
  title: string
  subtitle: string
  amount: number
  ranking: 1 | 2 | 3
}

interface RankingGraphProps extends React.HTMLAttributes<HTMLDivElement> {
  rank: RankItem[]
}

export const RankingGraph = ({ rank }: RankingGraphProps) => {
  const maxAmount = rank.find((item) => item.ranking === 1)?.amount || 1

  // ranking 값을 기준으로 2등, 1등, 3등 순서로 정렬
  const order = [2, 1, 3]
  const sortedRank = order
    .map((ranking) => rank.find((item) => item.ranking === ranking)!)
    .filter((item) => item)

  const rankIcons: { 1: IconType; 2: IconType; 3: IconType } = {
    1: GiRank3,
    2: GiRank2,
    3: GiRank1,
  }

  return (
    <HStack
      spacing={12}
      align="flex-start"
      height="200px"
      justifyContent="center"
      marginTop="40px"
    >
      {/* 왼쪽 그래프 */}
      <HStack align="flex-end" spacing={6} height="100%">
        {sortedRank.map((item) => {
          const percentage = (item.amount / maxAmount) * 100

          return (
            <VStack
              key={item.ranking}
              align="center"
              height="100%"
              justifyContent="flex-end"
              position="relative"
            >
              <Box
                width="44px"
                height={`${percentage}%`}
                minHeight="75px"
                bg="orange.200"
                transition="height 0.3s ease-in-out"
                borderRadius="md"
                position="relative"
              >
                <Center position="relative" width="44px" height="44px">
                  {item.imageSrc && (
                    <Image
                      src={item.imageSrc}
                      boxSize="40px"
                      objectFit="cover"
                      borderRadius="full"
                      position="absolute"
                      top="-27px"
                      left="50%"
                      transform="translateX(-50%)"
                    />
                  )}
                  <Box
                    as={rankIcons[item.ranking]}
                    width="30px"
                    height="30px"
                    position="absolute"
                    top={item.imageSrc ? '30px' : '10px'}
                    left="50%"
                    transform="translateX(-50%)"
                  />
                </Center>
              </Box>
            </VStack>
          )
        })}
      </HStack>

      {/* 오른쪽 랭킹 리스트 */}
      <VStack spacing={3} align="stretch">
        {rank.map((item) => (
          <HStack key={item.ranking} align="center">
            {item.imageSrc && (
              <Image
                src={item.imageSrc}
                boxSize="40px"
                objectFit="cover"
                borderRadius="full"
              />
            )}
            {!item.imageSrc && <div style={{ width: '60px' }} />}
            <VStack align="flex-start" spacing={0} height="60px" width="250px">
              {' '}
              {/* 이미지 높이에 맞춰 텍스트 위아래 정렬 */}
              <Text fontWeight="400" isTruncated width="100%">
                {item.title}
              </Text>
              <Text
                fontSize="sm"
                color="text_description"
                isTruncated
                width="100%"
              >
                {item.subtitle}
              </Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </HStack>
  )
}
