'use client'

import { useEffect, useRef, useState } from 'react'

export function Nav() {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = navRef.current
    if (!el) return
    const onScroll = () => el.classList.toggle('scrolled', window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className="nav" ref={navRef} id="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="logo" aria-label="Cristiano Pontes — home">
          CP
        </a>

        <div className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          <a href="#results"    className="nav-link" onClick={close}>Results</a>
          <a href="#about"      className="nav-link" onClick={close}>About</a>
          <a href="#experience" className="nav-link" onClick={close}>Experience</a>
          <a href="#skills"     className="nav-link" onClick={close}>Skills</a>
          <a href="#contact"    className="nav-cta"  onClick={close}>Contact</a>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={24} height={24} strokeLinecap="round">
            {open ? (
              <>
                <line x1={3} y1={6}  x2={21} y2={18} />
                <line x1={3} y1={18} x2={21} y2={6}  />
              </>
            ) : (
              <>
                <line x1={3} y1={6}  x2={21} y2={6}  />
                <line x1={3} y1={12} x2={21} y2={12} />
                <line x1={3} y1={18} x2={21} y2={18} />
              </>
            )}
          </svg>
        </button>
      </div>
    </nav>
  )
}
