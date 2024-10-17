import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface IntersectionObserverLoaderProps {
  callback: () => void
}

export const IntersectionObserverLoader = ({
  callback,
}: IntersectionObserverLoaderProps) => {
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      callback()
    }
  }, [callback, inView])

  return <div ref={ref}>loading...</div>
}
