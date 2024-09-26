import { IconType } from 'react-icons'

import {
  Box,
  Button,
  ButtonProps,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'

type CardButtonProps = {
  variant: 'orange' | 'white'
  orientation: 'vertical' | 'horizontal'
  label: string
  description: string
  Icon: IconType
} & ButtonProps

const CardButton: React.FC<CardButtonProps> = ({
  variant,
  orientation,
  label,
  description,
  Icon,
  ...props
}) => {
  const borderRadius = orientation === 'vertical' ? '20px' : '8px'

  const commonStyles: ButtonProps = {
    borderRadius,
    height: orientation === 'vertical' ? '145px' : '60px',
    width: orientation === 'vertical' ? '148px' : '300px',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: orientation === 'vertical' ? 'flex-start' : 'space-between',
    alignItems: orientation === 'vertical' ? 'flex-start' : 'center',
    padding: '10px',
    boxShadow: 'md',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
    textAlign: orientation === 'vertical' ? 'left' : 'center',
    position: 'relative',
  }

  const orangeStyle: ButtonProps = {
    bg: 'orange.400',
    color: 'black',
    _hover: { bg: 'orange.500' },
  }

  const whiteStyle: ButtonProps = {
    bg: 'white',
    color: 'black',
    border: '2px solid black.300',
    _hover: { bg: 'black.100' },
  }

  const styles = variant === 'orange' ? orangeStyle : whiteStyle

  return (
    <Button {...commonStyles} {...styles} {...props}>
      {orientation === 'vertical' ? (
        <VStack
          spacing={2}
          align="flex-start"
          justify="flex-end"
          h="full"
          paddingBottom="10px"
        >
          <Box
            as={Icon}
            color="orange.600"
            backgroundColor="orange.50"
            borderRadius="8px"
            padding="4px"
            fontSize="30px"
            position="absolute"
            top="20px"
            left="10px"
          />
          <Text fontSize="16px" fontWeight="bold" color="text">
            {label}
          </Text>
          <Text fontSize="10px" fontWeight="medium" color="text_detail">
            {description}
          </Text>
        </VStack>
      ) : (
        <HStack spacing={3} justify="center" align="center" h="full">
          <Box
            as={Icon}
            color="orange.600"
            backgroundColor="orange.50"
            borderRadius="8px"
            padding="4px"
            fontSize="30px"
          />
          <Text fontSize="16px" fontWeight="bold" color="text">
            {label}
          </Text>
          <Text fontSize="10px" fontWeight="medium" color="text_detail">
            {description}
          </Text>
        </HStack>
      )}
    </Button>
  )
}

export default CardButton
