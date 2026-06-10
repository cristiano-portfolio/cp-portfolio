const SKILLS = [
  {
    name: 'HubSpot',
    desc: 'CRM & marketing hub',
    path: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 4a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm0 14a8 8 0 0 1-6-2.7c0-2 4-3.1 6-3.1s6 1.1 6 3.1A8 8 0 0 1 12 20Z',
  },
  {
    name: 'Klaviyo',
    desc: 'Lifecycle & email',
    path: 'M4 4h16v16H4Zm2 2v3l6 4 6-4V6Zm0 5.5V18h12v-6.5l-6 4Z',
  },
  {
    name: 'Google Ads',
    desc: 'Paid search & PPC',
    path: 'M3 14l7-12 4 7-7 12-4-7Zm9 6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
  },
  {
    name: 'Meta Ads',
    desc: 'Paid social',
    path: 'M2 12c0-4 2-7 5-7 2 0 3.5 2 5 5 1.5-3 3-5 5-5 3 0 5 3 5 7s-2 5-4 5c-2 0-3.5-2-6-7-2.5 5-4 7-6 7-2 0-4-1-4-5Z',
  },
  {
    name: 'SEO',
    desc: 'Organic growth',
    path: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm6.5 11.5L22 20',
  },
  {
    name: 'CRM / RevOps',
    desc: 'Systems & process',
    path: 'M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6Zm0 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z',
  },
  {
    name: 'Conversion Tracking',
    desc: 'Attribution & analytics',
    path: 'M3 3v18h18M7 14l3-3 3 3 5-6',
  },
  {
    name: 'B2B Sales & Pipeline',
    desc: 'Demand gen to close',
    path: 'M4 12a8 8 0 0 1 8-8v8h8a8 8 0 1 1-16 0Z',
  },
]

const delays = ['d1', 'd2', 'd3', 'd4']

export function Skills() {
  return (
    <section
      className="section"
      id="skills"
      style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--border-soft)', borderBottom: '1px solid var(--border-soft)' }}
    >
      <div className="wrap">
        <div className="head reveal" style={{ marginBottom: 44 }}>
          <span className="eyebrow">Skills &amp; Stack</span>
          <h2>The toolkit behind the pipeline.</h2>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <div key={skill.name} className={`skill reveal ${delays[i % 4]}`}>
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d={skill.path} />
                </svg>
              </div>
              <div className="skill-txt">
                <b>{skill.name}</b>
                <span>{skill.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
