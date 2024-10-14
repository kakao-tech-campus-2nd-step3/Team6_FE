import { PageLayout } from '@/components/PageLayout/index'

import { GroupSection } from './GroupSection'
import { MemberSection } from './MemberSection'

export const MainLayout = () => {
  return (
    <PageLayout
      LeftSection={<GroupSection />}
      RightSection={<MemberSection />}
    />
  )
}
