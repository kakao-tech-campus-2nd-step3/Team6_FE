import { UseFormReturn } from 'react-hook-form'

import { Button, Flex, Input, Text, Textarea } from '@chakra-ui/react'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from '@/components/Form'
import { CreateGroupFields } from '@/schema/create-group'

interface CreateGroupFormProps {
  form: UseFormReturn<CreateGroupFields>
  onClickSumbitButton: () => void
}

export const CreateGroupForm = ({
  form,
  onClickSumbitButton,
}: CreateGroupFormProps) => {
  return (
    <Form {...form}>
      <form>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={6}
        >
          <FormField
            control={form.control}
            name="groupName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="그룹명을 입력해주세요"
                    size="lg"
                    width="12rem"
                    variant="unstyled"
                    focusBorderColor="brown.300"
                    borderColor="brown.200"
                    textAlign="center"
                    fontWeight="bold"
                    _placeholder={{ color: 'black.500' }}
                  />
                  <FormDescription textAlign="center">
                    (10자 이내)
                  </FormDescription>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="groupDescription"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="그룹 설명을 입력해주세요"
                    width="16rem"
                    size="sm"
                    textAlign="center"
                    border="none"
                    minHeight="3.5rem"
                  />
                  <FormDescription textAlign="center">
                    (30자 이내)
                  </FormDescription>
                </FormControl>
              </FormItem>
            )}
          />
          <Flex flexDirection="column" gap={1}>
            <Text fontSize="small" color="text_description">
              그룹 정보는 그룹 개설 후에도 변경할 수 있어요
            </Text>
            <Button
              colorScheme="brown"
              width="full"
              type="submit"
              onClick={onClickSumbitButton}
            >
              그룹 만들기
            </Button>
          </Flex>
        </Flex>
      </form>
    </Form>
  )
}
