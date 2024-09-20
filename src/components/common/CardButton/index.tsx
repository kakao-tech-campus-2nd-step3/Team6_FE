import { IconType } from 'react-icons'

import { Button, ButtonProps, HStack, Text, VStack } from '@chakra-ui/react'

type CustomButtonProps = {
  orientation: 'vertical' | 'horizontal'
  label: string
  description: string
  Icon: IconType
} & ButtonProps

const CustomButton: React.FC<CustomButtonProps> = ({
  orientation,
  label,
  description,
  Icon,
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

  return (
    <Button {...commonStyles} {...props}>
      {orientation === 'vertical' ? (
        // 세로 버튼
        <VStack
          spacing={2}
          align="flex-start"
          justify="flex-end"
          h="full"
          paddingBottom="20px"
        >
          <Icon
            style={{
              position: 'absolute',
              color: 'orange.600',
              top: '20px',
              left: '10px',
              fontSize: '40px',
              backgroundColor: 'orange.50',
              borderRadius: '8px',
              padding: '6px',
            }}
          />
          <Text fontSize="20px" fontWeight="bold" color="text">
            {label}
          </Text>
          <Text fontSize="14px" fontWeight="light" color="text_detail">
            {description}
          </Text>
        </VStack>
      ) : (
        // 가로 버튼
        <HStack spacing={3} justify="center" align="center" h="full">
          <Icon
            style={{
              color: 'primary.500',
              backgroundColor: 'primary.50',
              borderRadius: '8px',
              padding: '4px',
              fontSize: '30px',
            }}
          />
          <Text fontSize="20px" fontWeight="bold" color="text">
            {label}
          </Text>
          <Text fontSize="14px" fontWeight="light" color="text_detail">
            {description}
          </Text>
        </HStack>
      )}
    </Button>
  )
}

export default CustomButton
