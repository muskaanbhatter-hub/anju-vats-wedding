import { useEffect, useRef } from 'react'

// Fades/slides children in once when they enter the viewport.
export default function Reveal({ as: Tag = 'div', from = 'up', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { el.classList.add('is-visible'); return }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('is-visible'); io.disconnect() }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const dir = from === 'left' ? 'from-left' : from === 'right' ? 'from-right' : ''
  return (
    <Tag ref={ref} className={`reveal ${dir} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
