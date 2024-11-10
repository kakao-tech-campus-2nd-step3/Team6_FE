import { useState } from 'react'
import { BiCheck, BiCheckCircle, BiEditAlt, BiError } from 'react-icons/bi'

import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Input,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/api/instance'
import {
  patchProfileDescription,
  uploadProfileBg,
} from '@/api/services/profile/my-page.api'
import { AlertModal } from '@/components/Modal/AlertModal'
import { PointButton } from '@/components/PointButton'
import { MyPageItem } from '@/types'

type ProfileProps = {
  profile: MyPageItem
  pointAmount?: number
  isMyPage: boolean
  userId: number
}

export default function Profile({
  profile,
  pointAmount,
  isMyPage,
  userId,
}: ProfileProps) {
  const toast = useToast()
  const [isHovered, setIsHovered] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const errorAlert = useDisclosure()
  const successAlert = useDisclosure()
  const [isEditing, setIsEditing] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [profileDescription, setProfileDescription] = useState<string>(
    profile.description
  )

  const { mutate: uploadImage } = useMutation({
    mutationFn: (data: { image: File }) => uploadProfileBg(data),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['myPage', userId],
      })
      queryClient.invalidateQueries({ queryKey: ['uploadImage'] })
      window.location.reload()
    },
    onError: () => {},
  })

  const { mutate: modifyDescription } = useMutation({
    mutationFn: (data: { description: string }) =>
      patchProfileDescription(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['modifyDescription'] })
      setIsEditing(false)
      successAlert.onOpen()
    },
    onError: () => {
      setErrorMessage('한 줄 소개 수정에 실패하였습니다')
      setIsEditing(false)
      errorAlert.onOpen()
    },
  })

  const openFilePicker = () => {
    document.getElementById('fileInput')?.click()
  }

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png']
      const maxFileSize = 10 * 1024 * 1024
      if (!validTypes.includes(selectedFile.type)) {
        toast({
          title: 'Only JPEG, JPG, or PNG files are allowed.',
          status: 'warning',
          duration: 3000,
          isClosable: true,
        })
        return
      }
      if (selectedFile.size > maxFileSize) {
        setErrorMessage('이미지 파일은 10MB를 초과할 수 없습니다')
        errorAlert.onOpen()
        return
      }
      setFile(selectedFile)
      console.log(file)
      uploadImage({ image: selectedFile })
    }
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = async () => {
    if (profileDescription) {
      await modifyDescription({ description: profileDescription })
    }
  }

  return (
    <header>
      <Box
        height="144px"
        backgroundImage={`url('${profile.backgroundImageUrl}')`}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        marginBottom="40px"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isMyPage && isHovered && (
          <Button
            aria-label="Edit"
            borderRadius={3}
            minWidth="20px"
            maxHeight="25px"
            padding="5px 8px"
            position="absolute"
            right="23px"
            top="10px"
            fontSize="small"
            fontWeight="400"
            color="GrayText"
            border="0.4px solid"
            borderColor="black.700"
            bg="white"
            onClick={openFilePicker}
          >
            Change Cover
          </Button>
        )}
        <Input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={onChangeFile}
        />
        <Avatar
          src={profile.imageUrl}
          size="lg"
          position="absolute"
          bottom="-30px"
          left="30px"
        />
      </Box>
      <Box padding="0 30px">
        <Box display="flex" flexDirection="row" alignItems="center" gap="8px">
          <Text fontSize="xl" fontWeight="400">
            {profile.name}
          </Text>
          {pointAmount !== undefined && <PointButton point={pointAmount} />}
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          alignItems="end"
        >
          <Flex>
            {isEditing ? (
              <Input
                value={profileDescription}
                onChange={(e) => setProfileDescription(e.target.value)}
                color="text_secondary"
                fontSize="md"
                width="320px"
                textColor="black.500"
                border="none"
                _focus={{ color: 'black.800' }}
                padding="0"
                height="auto"
                lineHeight="normal"
                verticalAlign="middle"
                borderBottom="1px solid gray"
              />
            ) : (
              <Text color="text_secondary" fontSize="md">
                {profileDescription}
              </Text>
            )}
            {isMyPage && (
              <IconButton
                aria-label="Edit"
                icon={
                  isEditing ? (
                    <Icon as={BiCheck} boxSize="12px" />
                  ) : (
                    <Icon as={BiEditAlt} boxSize="10px" />
                  )
                }
                borderRadius="20px"
                minWidth="20px"
                width="20px"
                height="20px"
                padding="0"
                marginLeft={3}
                border="1px solid"
                borderColor="black.400"
                onClick={isEditing ? handleSaveClick : handleEditClick}
              />
            )}
          </Flex>
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
            <Text>{profile.todayVisited}</Text>
            <Text fontWeight="bold">TOTAL</Text>
            <Text>{profile.totalVisited}</Text>
          </Text>
        </Box>
      </Box>
      <AlertModal
        isOpen={errorAlert.isOpen}
        onClose={errorAlert.onClose}
        icon={<BiError />}
        title={errorMessage}
        description=""
      />
      <AlertModal
        isOpen={successAlert.isOpen}
        onClose={() => {
          successAlert.onClose()
        }}
        icon={<BiCheckCircle />}
        title="한 줄 소개를 수정하였습니다"
        description=""
      />
    </header>
  )
}
