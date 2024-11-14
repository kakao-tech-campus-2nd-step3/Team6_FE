import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import {
  Button,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import {
  RegisterUserRequestBody,
  registerUser,
} from '@/api/services/user/login.api'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/Form'
import { RegisterUserFields, RegisterUserSchema } from '@/schema/user'
import { useAuthTokenStore } from '@/stores/auth-token'
import { useInviteUrl } from '@/stores/invite-url'
import { useUserInfoStore } from '@/stores/user-info'

export default function RegisterPage() {
  const navigate = useNavigate()
  const role = useUserInfoStore((state) => state.userInfo?.role)
  const inviteUrl = useInviteUrl((state) => state.inviteUrl)
  const clearInviteUrl = useInviteUrl((state) => state.clearInviteUrl)

  const form = useForm<RegisterUserFields>({
    resolver: zodResolver(RegisterUserSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      gender: undefined,
      birthDate: '',
    },
  })

  const setAuthToken = useAuthTokenStore((state) => state.setAuthToken)
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo)

  const { mutate } = useMutation({
    mutationFn: (data: RegisterUserRequestBody) => registerUser(data),
    onSuccess: (data) => {
      setAuthToken(data.accessToken)
      setUserInfo(data.userInfo)
      window.location.href = `${inviteUrl}`
      clearInviteUrl()
    },
  })

  const onValid = () => {
    mutate(form.getValues())
  }

  useEffect(() => {
    if (role === 'USER') {
      navigate('/')
    }
  }, [role, navigate])

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="full"
      gap={6}
      padding={4}
    >
      <Heading color="brown.600" size="xl" fontWeight="800">
        회원가입
      </Heading>
      <Text color="gray.600" fontSize="md" textAlign="center">
        가입을 통해 더 다양한 서비스를 만나보세요!
      </Text>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onValid)}>
          <Flex flexDirection="column" gap={4} maxWidth="400px">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Text fontWeight="bold" mb={2}>
                      이름
                    </Text>
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="쿠키즈"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Text fontWeight="bold" mb={2}>
                      성별
                    </Text>
                    <RadioGroup value={field.value} onChange={field.onChange}>
                      <Flex gap={5}>
                        <Radio value="male" colorScheme="brown">
                          남
                        </Radio>
                        <Radio value="female" colorScheme="brown">
                          여
                        </Radio>
                      </Flex>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem>
                  <Text fontWeight="bold" mb={2}>
                    생년월일
                  </Text>
                  <FormControl>
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      type="date"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              bg="brown.500"
              color="secondary_background"
              _hover={{ bg: 'brown.600' }}
              size="lg"
              width="full"
              mt={6}
              type="submit"
            >
              가입하기
            </Button>
          </Flex>
        </form>
      </Form>
    </Flex>
  )
}
