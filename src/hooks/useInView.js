// hooks/useInView.js
// Returns a [ref, isVisible] pair — triggers once when element enters viewport

import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el) // fire once only
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  return [ref, visible]
}
