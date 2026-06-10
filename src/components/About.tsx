export function About() {
  return (
    <section
      className="section"
      id="about"
      style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--border-soft)', borderBottom: '1px solid var(--border-soft)' }}
    >
      <div className="wrap about-grid">
        <div className="reveal">
          <span className="eyebrow">About</span>
          <p className="about-lead" style={{ marginTop: 18 }}>
            I scaled a B2B MedTech company as the{' '}
            <span className="accent">sole commercial hire</span>. I own sales,
            marketing, demand generation, and the full revenue P&amp;L.
          </p>
        </div>

        <div className="values">
          <ValueCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 4l-6 16M6 8l-4 4 4 4M18 8l4 4-4 4" />
              </svg>
            }
            title="Operator mindset"
            body="I build commercial functions from zero: systems, process, and pipeline, not just plans."
            delay="d1"
          />
          <ValueCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="M7 14l3-3 3 3 5-6" />
              </svg>
            }
            title="Full-funnel ownership"
            body="Strategy and execution, top to bottom: brand, demand gen, sales, and RevOps under one roof."
            delay="d2"
          />
          <ValueCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <circle cx={12} cy={12} r={10} />
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
              </svg>
            }
            title="Bilingual reach"
            body="Native Portuguese, fluent English. Comfortable selling across U.S. and Latin American markets."
            delay="d3"
          />
          <ValueCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z" />
              </svg>
            }
            title="MedTech buyer fluency"
            body="Deep understanding of how healthcare and MedTech buyers evaluate, trust, and commit."
            delay="d4"
          />
        </div>
      </div>
    </section>
  )
}

function ValueCard({
  icon,
  title,
  body,
  delay,
}: {
  icon: React.ReactNode
  title: string
  body: string
  delay: string
}) {
  return (
    <div className={`value reveal ${delay}`}>
      <div className="ic">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  )
}
