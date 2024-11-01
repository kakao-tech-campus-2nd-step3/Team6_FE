import { ErrorBoundary } from 'react-error-boundary'

import { useQueryErrorResetBoundary } from '@tanstack/react-query'

import { PageLayout } from '@/components/PageLayout/index'

import { GlobalErrorFallback } from './GlobalErrorFallback'
import { GroupSection } from './GroupSection'
import { MemberSection } from './MemberSection'

export const MainLayout = () => {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary FallbackComponent={GlobalErrorFallback} onReset={reset}>
      <PageLayout
        LeftSection={<GroupSection />}
        RightSection={<MemberSection />}
      />
    </ErrorBoundary>
  )
}
