import Image from 'next/image'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        {/* Copy */}
        <div className="hero-copy">
          <span className="tag reveal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx={12} cy={10} r={3} />
            </svg>
            San Diego, CA
          </span>

          <h1 className="reveal d1">Cristiano Pontes</h1>

          <p className="subhead reveal d2">
            B2B MedTech Sales &amp; Marketing Leader. I build{' '}
            <span className="accent">full-funnel commercial engines</span> from zero.
          </p>

          <p className="support reveal d3">
            Director of Sales &amp; Marketing at PRP Labs. I own the full revenue
            P&amp;L: marketing, demand gen, sales. I scale it with limited resources.
          </p>

          <div className="hero-cta reveal d3">
            <a href="#contact" className="btn btn-primary">
              Get in touch
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/cristiano-pontes-bb3b7744/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{ width: 17, height: 17 }}>
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
              </svg>
              View LinkedIn
            </a>

            <a href="/resume.docx" download="Cristiano Pontes Resume.docx" className="btn btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="M7 10l5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              Download résumé
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="portrait-wrap reveal d2">
          <div className="portrait-glow" aria-hidden="true" />
          <div className="portrait">
            <Image
              src="/images/cristiano.jpeg"
              alt="Cristiano Pontes"
              fill
              sizes="(max-width: 980px) 320px, 380px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="portrait-badge">
            <span className="dot" />
            <div>
              <b>Open to roles</b>
              <span>MedTech · Healthcare · B2B SaaS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo strip */}
      <div className="wrap">
        <div className="logostrip reveal">
          <div className="label">Built &amp; scaled commercial functions at</div>
          <div className="logos">
            <LogoItem src="/images/prp_labs_logo.jpeg" name="PRP Labs" />
            <LogoItem src="/images/pumper_caddy_logo.jpeg" name="Pumper Caddy" />
            <LogoItem src="/images/sparkling_clean_logo.jpeg" name="Sparkling Clean Pro" />
            <LogoItem src="/images/platinum_logo.jpeg" name="Platinum Investimentos" />
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoItem({ src, name }: { src: string; name: string }) {
  return (
    <div className="lg">
      <Image src={src} alt="" width={34} height={34} style={{ borderRadius: 8, objectFit: 'contain' }} />
      <span>{name}</span>
    </div>
  )
}
