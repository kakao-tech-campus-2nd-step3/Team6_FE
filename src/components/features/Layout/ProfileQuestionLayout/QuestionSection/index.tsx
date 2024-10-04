import { BiWinkTongue } from 'react-icons/bi'

import { Text } from '@chakra-ui/react'

import { PageLayout } from '@/components/common/PageLayout'

export const QuestionSection = () => {
  return (
    <PageLayout.SideSection
      SectionHeader={
        <PageLayout.SideSection.SectionHeader
          Icon={BiWinkTongue}
          title="프로필 질문"
        />
      }
    >
      <Text fontSize="small">
        여기에 질문 리스트 컴포넌트 넣으면 됩니다. 위에 아이콘도 수정하셔요~
      </Text>
    </PageLayout.SideSection>
  )
}
