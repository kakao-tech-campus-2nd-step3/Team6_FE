import { PagingRequestParams } from '@/types'

export function getPagingPath(
  path: string,
  requestParams: PagingRequestParams
) {
  const params = new URLSearchParams()
  const { size, page, sort } = requestParams

  if (size) {
    params.append('size', size.toString())
  }

  if (page) {
    params.append('page', page.toString())
  }

  if (sort) {
    sort.forEach((sortField) => params.append('sort', sortField))
  }

  return `${path}?${params}`
}
