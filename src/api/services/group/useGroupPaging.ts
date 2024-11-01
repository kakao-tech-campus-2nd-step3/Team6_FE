import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { PagingRequestParams } from '@/types'

import { getGroupPaging } from './index'

interface GroupPagingProps extends PagingRequestParams {
  initPageToken?: string
}

export const useGroupPaging = ({
  size = 10,
  sort,
  initPageToken,
}: GroupPagingProps) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['groups'],
    queryFn: ({ pageParam = initPageToken }) =>
      getGroupPaging({ page: pageParam, size, sort }),
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  })
}
