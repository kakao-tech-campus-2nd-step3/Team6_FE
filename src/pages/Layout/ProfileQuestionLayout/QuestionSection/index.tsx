import { BiCookie } from 'react-icons/bi'

import { Text } from '@chakra-ui/react'

import { PageLayout } from '@/components/PageLayout'

import { QuestionList } from '../QuestionList'

export const QuestionSection = () => {
  return (
    <PageLayout.SideSection
      SectionHeader={
        <PageLayout.SideSection.SectionHeader
          Icon={BiCookie}
          title="프로필 질문"
        />
      }
    >
      <Text fontSize="small">
        <QuestionList questions={mockGroupList} />
      </Text>
    </PageLayout.SideSection>
  )
}

const mockGroupList = [
  {
    profileQuestionId: 1,
    profileQuestionContent: '내 MBTI는?',
    createdAt: '2024-10-1',
  },
  {
    profileQuestionId: 2,
    profileQuestionContent:
      '내 키는? 가나다라마바사아자차카타파하 가나다라마바사 아자 차카 타파하',
    createdAt: '2024-10-1',
  },
  {
    profileQuestionId: 3,
    profileQuestionContent: '내 혈액형은?',
    createdAt: '2024-10-1',
  },
]
