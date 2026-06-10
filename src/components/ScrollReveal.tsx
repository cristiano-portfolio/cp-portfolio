'use client'

import { useEffect } from 'react'

export function ScrollReveal() {
  useEffect(() => {
    const showEl = (el: Element) => {
      el.classList.add('in')
      setTimeout(() => el.classList.add('shown'), 820)
    }

    const notYetIn = () =>
      document.querySelectorAll<Element>('.reveal:not(.in)')

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              showEl(e.target)
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
      )

      document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

      // Immediately reveal anything already in the viewport
      requestAnimationFrame(() => {
        notYetIn().forEach((el) => {
          const r = el.getBoundingClientRect()
          if (r.top < window.innerHeight * 0.96 && r.bottom > 0) showEl(el)
        })
      })

      // Safety net: never leave content hidden
      const timer = setTimeout(() => notYetIn().forEach(showEl), 1600)

      return () => {
        io.disconnect()
        clearTimeout(timer)
      }
    } else {
      notYetIn().forEach(showEl)
    }
  }, [])

  return null
}
