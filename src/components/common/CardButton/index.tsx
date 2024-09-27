import { IconType } from 'react-icons'

import {
  Box,
  Button,
  HStack,
  ResponsiveValue,
  Text,
  VStack,
} from '@chakra-ui/react'

type CardButtonProps = {
  variant: 'orange' | 'white'
  orientation: 'vertical' | 'horizontal'
  label: string
  description: string
  Icon: IconType
}

const CardButton = ({ buttonElement }: { buttonElement: CardButtonProps }) => {
  const { variant, orientation, label, description, Icon } = buttonElement
  const borderRadius = orientation === 'vertical' ? '20px' : '8px'

  const commonStyles = {
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
    position: 'relative' as ResponsiveValue<'relative'>,
  }

  const orangeStyle = {
    bg: 'orange.400',
    color: 'black',
    border: 'none',
    hover: { bg: 'orange.500' },
  }

  const whiteStyle = {
    bg: 'white',
    color: 'black',
    border: '2px solid black.300',
    hover: { bg: 'black.100' },
  }

  const styles = variant === 'orange' ? orangeStyle : whiteStyle

  return (
    <Button
      borderRadius={commonStyles.borderRadius}
      height={commonStyles.height}
      width={commonStyles.width}
      fontSize={commonStyles.fontSize}
      fontWeight={commonStyles.fontWeight}
      display={commonStyles.display}
      justifyContent={commonStyles.justifyContent}
      alignItems={commonStyles.alignItems}
      padding={commonStyles.padding}
      boxShadow={commonStyles.boxShadow}
      flexDirection={commonStyles.flexDirection as 'column' | 'row'}
      textAlign={commonStyles.textAlign as 'left' | 'center'}
      position={commonStyles.position}
      bg={styles.bg}
      color={styles.color}
      border={styles.border}
      _hover={styles.hover}
    >
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
