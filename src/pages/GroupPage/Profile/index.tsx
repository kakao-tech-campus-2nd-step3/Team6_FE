import { useEffect, useState } from 'react'

import { Avatar, Box, HStack, Input, Text, VStack } from '@chakra-ui/react'

import { Group, GroupRole } from '@/types'

import { EditProfile } from './EditProfile'

type GroupProps = {
  gprofile: Group
  role: GroupRole
}

export default function Profile({ role, gprofile }: GroupProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [groupNameInput, setGroupNameInput] = useState('')
  const [groupDescriptionInput, setGroupDescriptionInput] = useState('')

  useEffect(() => {
    setIsEditing(false)
    setGroupNameInput(gprofile.groupName)
    setGroupDescriptionInput(gprofile.groupDescription)
  }, [gprofile])

  return (
    <header>
      <Box position="relative" marginBottom="10px">
        <HStack
          alignItems="center"
          spacing="15px"
          paddingLeft="25px"
          marginTop="30px"
        >
          <Box position="relative">
            <Avatar
              src={gprofile?.groupdImageUrl}
              width="70px"
              height="70px"
              sx={{
                border: '0.8px solid',
                borderColor: 'black.300',
              }}
            />
          </Box>
          <VStack align="flex-start" spacing={0}>
            <HStack spacing={2} alignItems="center">
              {isEditing ? (
                <Input
                  value={groupNameInput}
                  onChange={(e) => setGroupNameInput(e.target.value)}
                  fontSize="xl"
                  width="180px"
                  textColor="black.500"
                  border="none"
                  _focus={{ color: 'black.800' }}
                  padding="0"
                  height="auto"
                  lineHeight="normal"
                  verticalAlign="middle"
                />
              ) : (
                <Text fontSize="xl">{gprofile.groupName}</Text>
              )}
              <Text
                fontSize="xs"
                padding="3px 6px"
                borderRadius="8px"
                border="1px solid"
                borderColor="primary"
                fontWeight="bold"
                color="primary"
              >
                {role === 'LEADER' ? '그룹장' : '그룹원'}
              </Text>
            </HStack>

            <HStack spacing={2} alignItems="center">
              {isEditing ? (
                <Input
                  value={groupDescriptionInput}
                  onChange={(e) => setGroupDescriptionInput(e.target.value)}
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
                />
              ) : (
                <Text color="text_secondary" fontSize="md">
                  {gprofile.groupDescription}
                </Text>
              )}
              {role === 'LEADER' && (
                <EditProfile
                  isEditing={isEditing}
                  setIsEditing={(isEdit) => setIsEditing(isEdit)}
                  groupInfo={{
                    groupId: gprofile.groupId,
                    groupName: groupNameInput,
                    groupDescription: groupDescriptionInput,
                  }}
                />
              )}
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </header>
  )
}
