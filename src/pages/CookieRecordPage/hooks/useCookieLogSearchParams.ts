import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

export const cookieLogTypes = ['log', 'calendar'] as const
type CookieLogTypes = (typeof cookieLogTypes)[number]

export function useCookieLogSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams()

  const setSearchParamType = useCallback(
    (type: CookieLogTypes) => {
      searchParams.set('type', type)
      setSearchParams(searchParams)
    },
    [searchParams, setSearchParams]
  )

  const getCurrentType = () => {
    const currentType = searchParams.get('type')
    return currentType && isParamTypes(currentType) ? currentType : 'log'
  }

  const isParamTypes = (param: string): param is CookieLogTypes => {
    return cookieLogTypes.includes(param as CookieLogTypes)
  }

  return { setSearchParamType, getCurrentType, isParamTypes }
}
