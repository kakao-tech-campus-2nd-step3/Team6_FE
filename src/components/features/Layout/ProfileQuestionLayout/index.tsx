import { PageLayout } from '@/components/common/PageLayout/index'

import { QuestionSection } from './QuestionSection'

export const ProfileQuestionLayout = () => {
  return <PageLayout LeftSection={<QuestionSection />} pageColor="brown.200" />
}
