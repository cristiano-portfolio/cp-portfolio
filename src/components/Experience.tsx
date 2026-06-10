import Image from 'next/image'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="head reveal" style={{ marginBottom: 48 }}>
          <span className="eyebrow">Experience</span>
          <h2>A track record of building, not maintaining.</h2>
        </div>

        <div className="timeline">
          {/* PRP Labs */}
          <div className="exp reveal">
            <div className="exp-logo">
              <Image
                src="/images/prp_labs_logo.jpeg"
                alt="PRP Labs"
                width={64}
                height={64}
                style={{ objectFit: 'contain', padding: 8 }}
              />
            </div>
            <div className="exp-body">
              <div className="exp-row">
                <h3>PRP Labs</h3>
                <span className="dates">2024-Present</span>
              </div>
              <div className="role">
                Director of Sales &amp; Marketing ·{' '}
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Mar 2025-Present</span>
              </div>
              <div className="role sub">Sales &amp; Marketing Manager · Jun 2024-Mar 2025</div>
              <ul>
                <li>
                  Built the entire commercial function from zero as the sole commercial hire-marketing,
                  demand gen, sales, and RevOps.
                </li>
                <li>
                  Grew annual revenue ~3× and delivered 87% growth in a 10-month span on a lean budget.
                </li>
                <li>
                  Own the full revenue P&amp;L: positioning, pipeline, conversion tracking, and forecasting.
                </li>
              </ul>
            </div>
          </div>

          {/* Sparkling Clean Pro */}
          <div className="exp reveal">
            <div className="exp-logo">
              <Image
                src="/images/sparkling_clean_logo.jpeg"
                alt="Sparkling Clean Pro"
                width={64}
                height={64}
                style={{ objectFit: 'contain', padding: 8 }}
              />
            </div>
            <div className="exp-body">
              <div className="exp-row">
                <h3>Sparkling Clean Pro</h3>
                <span className="dates">2023-2024</span>
              </div>
              <div className="role">Marketing Consultant</div>
              <ul>
                <li>
                  Advised on demand generation and conversion strategy-paid, organic, and lifecycle.
                </li>
                <li>
                  Stood up tracking and reporting to tie marketing spend to booked revenue.
                </li>
              </ul>
            </div>
          </div>

          {/* Pumper Caddy */}
          <div className="exp reveal">
            <div className="exp-logo">
              <Image
                src="/images/pumper_caddy_logo.jpeg"
                alt="Pumper Caddy"
                width={64}
                height={64}
                style={{ objectFit: 'contain', padding: 8 }}
              />
            </div>
            <div className="exp-body">
              <div className="exp-row">
                <h3>Pumper Caddy</h3>
                <span className="dates">2022-2023</span>
              </div>
              <div className="role">Digital Marketing Manager</div>
              <ul>
                <li>
                  Drove six-figure revenue through an integrated paid, SEO, and email engine.
                </li>
                <li>
                  Owned conversion tracking and channel attribution across the full funnel.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Earlier career */}
        <div className="earlier reveal">
          <div className="label">Earlier Career</div>
          <div className="earlier-items">
            <div className="earlier-item">
              <h4>Platinum Investimentos</h4>
              <p>Financial advisory &amp; client growth</p>
            </div>
            <div className="earlier-item">
              <h4>B2B Sales &amp; Account Management</h4>
              <p>Life insurance, legal, finance &amp; project management-Brazil</p>
            </div>
            <div className="earlier-item">
              <h4>International Markets</h4>
              <p>U.S. &amp; Latin American commercial experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
