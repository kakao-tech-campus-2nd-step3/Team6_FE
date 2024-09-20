import { IconType } from 'react-icons'

import { Button, ButtonProps, HStack, Text, VStack } from '@chakra-ui/react'

type CustomButtonProps = {
  orientation: 'vertical' | 'horizontal'
  label: string
  description: string
  Icon: IconType
} & ButtonProps

// 스타일 분리
const orientationStyles = {
  vertical: {
    container: {
      height: '200px',
      width: '190px',
      flexDirection: 'column' as const,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    icon: {
      position: 'absolute' as const,
      color: 'orange.600',
      top: '20px',
      left: '10px',
      fontSize: '40px',
      backgroundColor: 'orange.50',
      borderRadius: '8px',
      padding: '6px',
    },
    labelStyle: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    descriptionStyle: {
      fontSize: '14px',
      fontWeight: 'light',
    },
    textAlign: 'left',
  },
  horizontal: {
    container: {
      height: '60px',
      width: '400px',
      flexDirection: 'row' as const,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    icon: {
      color: 'primary.500',
      backgroundColor: 'primary.50',
      borderRadius: '8px',
      padding: '4px',
      fontSize: '30px',
    },
    labelStyle: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    descriptionStyle: {
      fontSize: '14px',
      fontWeight: 'light',
    },
    textAlign: 'center',
  },
}

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
    display: 'flex',
    boxShadow: 'md',
    padding: '10px',
    position: 'relative',
  }

  const styles = orientationStyles[orientation]

  return (
    <Button {...commonStyles} {...styles.container} {...props}>
      {orientation === 'vertical' ? (
        <VStack
          spacing={2}
          align="flex-start"
          justify="flex-end"
          h="full"
          paddingBottom="20px"
          sx={{ textAlign: styles.textAlign }}
        >
          <Icon style={styles.icon} />
          <Text {...styles.labelStyle}>{label}</Text>
          <Text {...styles.descriptionStyle}>{description}</Text>
        </VStack>
      ) : (
        <HStack
          spacing={3}
          justify="center"
          align="center"
          h="full"
          sx={{ textAlign: styles.textAlign }}
        >
          <Icon style={styles.icon} />
          <Text {...styles.labelStyle}>{label}</Text>
          <Text {...styles.descriptionStyle}>{description}</Text>
        </HStack>
      )}
    </Button>
  )
}

export default CustomButton
