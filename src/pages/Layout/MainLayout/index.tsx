import { PageLayout } from '@/components/common/PageLayout/index'

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
