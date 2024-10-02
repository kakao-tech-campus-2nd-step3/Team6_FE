import { IconType } from 'react-icons'

import { Box, Button, HStack, Text, VStack, useTheme } from '@chakra-ui/react'
import { css } from '@emotion/react'

type CardButtonProps = {
  variant: 'orange' | 'white'
  orientation: 'vertical' | 'horizontal'
  label: string
  description: string
  Icon: IconType
}

const CardButton = ({ buttonElement }: { buttonElement: CardButtonProps }) => {
  const { variant, orientation, label, description, Icon } = buttonElement
  const theme = useTheme()
  const borderRadius = orientation === 'vertical' ? '20px' : '8px'

  const commonStyles = css({
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
    backgroundColor:
      variant === 'orange' ? theme.colors.orange[200] : theme.colors.white,
    color: 'black',
    border:
      variant === 'white' ? `2px solid ${theme.colors.black[100]}` : 'none',
    '&:hover': {
      backgroundColor:
        variant === 'orange'
          ? theme.colors.orange[300]
          : theme.colors.black[100],
    },
  })

  return (
    <Button css={commonStyles}>
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
            color="orange.400"
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
          <Text fontSize="10px" fontWeight="medium" color="text_description">
            {description}
          </Text>
        </VStack>
      ) : (
        <HStack spacing={3} justify="center" align="center" h="full">
          <Box
            as={Icon}
            color="orange.400"
            backgroundColor="orange.50"
            borderRadius="8px"
            padding="4px"
            fontSize="30px"
          />
          <Text fontSize="16px" fontWeight="bold" color="text">
            {label}
          </Text>
          <Text fontSize="10px" fontWeight="medium" color="text_description">
            {description}
          </Text>
        </HStack>
      )}
    </Button>
  )
}

export default CardButton
