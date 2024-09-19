import { BiCog, BiLink } from 'react-icons/bi'

import { Button, ButtonProps, HStack, Text, VStack } from '@chakra-ui/react'

type CustomButtonProps = {
  variant: 'orange' | 'white'
  orientation: 'vertical' | 'horizontal'
  label: string
  description: string
} & ButtonProps

const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  orientation,
  label,
  description,
  ...props
}) => {
  const borderRadius = orientation === 'vertical' ? '20px' : '8px' // 가로, 세로 버튼에 따라 다른 borderRadius 설정

  const commonStyles: ButtonProps = {
    borderRadius,
    height: orientation === 'vertical' ? '200px' : '60px',
    width: orientation === 'vertical' ? '190px' : '400px',
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
    bg: '#FECC88',
    color: 'black',
    _hover: { bg: '#FFBB55' },
  }

  const whiteStyle: ButtonProps = {
    bg: 'white',
    color: 'black',
    border: '2px solid #E2E8F0',
    _hover: { bg: '#F5F5F5' },
  }

  const styles = variant === 'orange' ? orangeStyle : whiteStyle

  return (
    <Button {...commonStyles} {...styles} {...props}>
      {orientation === 'vertical' ? (
        // 세로 버튼
        <VStack
          spacing={2}
          align="flex-start"
          justify="flex-end"
          h="full"
          paddingBottom="20px"
        >
          <BiCog
            style={{
              position: 'absolute',
              color: '#FFAA21',
              top: '20px',
              left: '10px',
              fontSize: '40px',
              backgroundColor: '#FFF7ED',
              borderRadius: '8px',
              padding: '6px',
            }}
          />
          <Text fontSize="20px" fontWeight="bold" color="black">
            {label}
          </Text>
          <Text fontSize="14px" fontWeight="light" color="gray.600">
            {description}
          </Text>
        </VStack>
      ) : (
        // 가로 버튼
        <HStack spacing={3} justify="center" align="center" h="full">
          <BiLink
            style={{
              color: '#FFAA21',
              backgroundColor: '#FFF7ED',
              borderRadius: '8px',
              padding: '4px',
              fontSize: '30px',
            }}
          />
          <Text fontSize="20px" fontWeight="bold" color="black">
            {label}
          </Text>
          <Text fontSize="14px" fontWeight="light" color="gray.600">
            {description}
          </Text>
        </HStack>
      )}
    </Button>
  )
}

export default CustomButton
