'use client'

import { FormEvent, useState } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'

export function Contact() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return

    setStatus('submitting')

    if (FORMSPREE_URL.includes('YOUR_FORM_ID')) {
      // Mailto fallback when Formspree isn't configured
      const subject = encodeURIComponent("Let's talk — opportunity for Cristiano")
      const body = encodeURIComponent(
        `Hi Cristiano,\n\nI came across your portfolio and would like to connect.\n\n(Reply-to: ${trimmed})`
      )
      window.location.href = `mailto:hello@cristianopontes.com?subject=${subject}&body=${body}`
      setStatus('idle')
      return
    }

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      })
      if (res.ok) {
        setStatus('done')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="head reveal" style={{ maxWidth: 660 }}>
          <span className="eyebrow">Get in touch</span>
          <h2>Hiring? Let&apos;s talk.</h2>
          <p className="lede">
            If you&apos;re building a commercial engine in MedTech, healthcare, or B2B SaaS — or need
            someone who can own it end to end — I&apos;d love to hear from you.
          </p>
        </div>

        {status === 'done' ? (
          <p className="reveal d1" style={{ marginTop: 34, color: 'rgba(255,255,255,0.9)', fontSize: 17 }}>
            Got it — I&apos;ll be in touch soon.
          </p>
        ) : (
          <form className="contact-form reveal d1" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              aria-label="Your email address"
              disabled={status === 'submitting'}
            />
            <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send message'}
              {status !== 'submitting' && (
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              )}
            </button>
            {status === 'error' && (
              <p style={{ color: 'rgba(255,100,100,0.9)', fontSize: 14, width: '100%', marginTop: -4 }}>
                Something went wrong — please email me directly below.
              </p>
            )}
          </form>
        )}

        <div className="contact-alt reveal d2">
          <a href="mailto:hello@cristianopontes.com">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect x={2} y={4} width={20} height={16} rx={2} />
              <path d="m22 7-10 6L2 7" />
            </svg>
            hello@cristianopontes.com
          </a>
          <a
            href="https://www.linkedin.com/in/cristiano-pontes-bb3b7744/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{ width: 18, height: 18 }}>
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
            </svg>
            LinkedIn
          </a>
          <a href="#top">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx={12} cy={10} r={3} />
            </svg>
            San Diego, CA
          </a>
        </div>
      </div>
    </section>
  )
}
