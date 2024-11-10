import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiCheckCircle, BiError } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

import { Flex, Image, useDisclosure } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/api/instance'
import {
  CreateGroupRequestBody,
  createGroup,
} from '@/api/services/group/group.api'
import cookies from '@/assets/cookies.svg'
import { AlertModal } from '@/components/Modal/AlertModal'
import { CreateGroupFields, CreateGroupSchema } from '@/schema/create-group'
import { Group } from '@/types'

import { CreateGroupForm } from './CreateGroupForm'

export default function CreateGroupPage() {
  const form = useForm<CreateGroupFields>({
    resolver: zodResolver(CreateGroupSchema),
    mode: 'onSubmit',
    defaultValues: {
      groupName: '',
      groupDescription: '',
    },
  })

  const [errorMessage, setErrorMessage] = useState('')
  const [createGroupId, setCreateGroupId] = useState<number>()
  const errorAlert = useDisclosure()
  const successAlert = useDisclosure()

  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: ({ groupName, groupDescription }: CreateGroupRequestBody) =>
      createGroup({ groupName, groupDescription }),
    onSuccess: ({ groupId }: Group) => {
      successAlert.onOpen()
      setCreateGroupId(groupId)
      queryClient.invalidateQueries({ queryKey: ['groups'] })
    },
  })

  const onClickSumbitButton = form.handleSubmit(
    () => mutate(form.getValues()),
    (errors) => {
      const errorMessages =
        Object.values(errors).flatMap((error) => error.message)[0] || ''

      setErrorMessage(errorMessages)
      errorAlert.onOpen()
    }
  )

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="full"
    >
      <Image src={cookies} marginBottom={18} width="200px" />
      <CreateGroupForm form={form} onClickSumbitButton={onClickSumbitButton} />
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
          navigate(`/group/${createGroupId}`)
        }}
        icon={<BiCheckCircle />}
        title={`${form.getValues('groupName')} 그룹을 생성했습니다!`}
        description="멤버를 초대해 다양한 그룹 활동을 즐겨보세요"
      />
    </Flex>
  )
}
