import { IconType } from 'react-icons'
import { GiRank1, GiRank2, GiRank3 } from 'react-icons/gi'

import {
  Box,
  Center,
  HStack,
  Image,
  Text,
  Tooltip,
  VStack,
  useTheme,
} from '@chakra-ui/react'

import { RankItem } from '@/types'

interface RankingGraphProps extends React.HTMLAttributes<HTMLDivElement> {
  rank: RankItem[]
}

export const RankingGraph = ({ rank }: RankingGraphProps) => {
  const theme = useTheme()
  const borderColor = theme.colors.brown[300]
  const maxAmount = rank.find((item) => item.rank === 1)?.count || 1

  // ranking 값을 기준으로 2등, 1등, 3등 순서로 정렬
  const order = [2, 1, 3]
  const sortedRank = order
    .map((ranking) => rank.find((item) => item.rank === ranking)!)
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
      height="170px"
      justifyContent="center"
      marginTop="20px"
    >
      {/* 왼쪽 그래프 */}
      <HStack align="flex-end" spacing={6} height="80%" marginTop="30px">
        {sortedRank.map((item) => {
          const percentage = (item.count / maxAmount) * 100

          return (
            <VStack
              key={item.rank}
              align="center"
              height="100%"
              justifyContent="flex-end"
              position="relative"
            >
              <Tooltip
                hasArrow
                label={item.count}
                placement="top"
                bg="brown.600"
                fontWeight={600}
                marginBottom={7}
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
                        src={`${item.imageSrc}`}
                        boxSize="40px"
                        objectFit="cover"
                        borderRadius="full"
                        position="absolute"
                        top="-27px"
                        left="50%"
                        transform="translateX(-50%)"
                        bg="white"
                        padding="5px"
                        border={`1px solid ${borderColor}`}
                      />
                    )}
                    <Box
                      as={rankIcons[item.rank as 1 | 2 | 3]}
                      width="30px"
                      height="30px"
                      position="absolute"
                      top={item.imageSrc ? '30px' : '10px'}
                      left="50%"
                      transform="translateX(-50%)"
                    />
                  </Center>
                </Box>
              </Tooltip>
            </VStack>
          )
        })}
      </HStack>

      {/* 오른쪽 랭킹 리스트 */}
      <VStack spacing={3} align="stretch">
        {rank.map((item) => (
          <HStack key={item.rank} align="center">
            {item.imageSrc && (
              <Image
                src={item.imageSrc}
                boxSize="40px"
                objectFit="cover"
                borderRadius="full"
                bg="white"
                padding="5px"
              />
            )}
            {!item.imageSrc && <div style={{ width: '60px' }} />}
            <VStack align="flex-start" spacing={0} height="50px" width="250px">
              {' '}
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
