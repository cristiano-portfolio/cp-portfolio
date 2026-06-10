import { ImageResponse } from 'next/og'

export const alt = 'Cristiano Pontes — B2B MedTech Sales & Marketing Leader'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#15172e',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 90px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(27,95,217,0.35) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            right: '-60px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(27,95,217,0.2) 0%, transparent 70%)',
          }}
        />
        {/* CP mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: '#1B5FD9',
            color: '#fff',
            fontSize: '22px',
            fontWeight: 800,
            marginBottom: '36px',
          }}
        >
          CP
        </div>
        <div
          style={{
            color: '#1B5FD9',
            fontSize: '18px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          cristianopontes.com
        </div>
        <div
          style={{
            color: '#fff',
            fontSize: '58px',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
          }}
        >
          Cristiano Pontes
        </div>
        <div
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: 1.4,
            maxWidth: '780px',
          }}
        >
          B2B MedTech Sales &amp; Marketing Leader — I build full-funnel commercial engines from zero.
        </div>
        <div
          style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '18px',
            marginTop: '28px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span>San Diego, CA</span>
          <span style={{ color: '#1B5FD9' }}>·</span>
          <span>Director of Sales &amp; Marketing · PRP Labs</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
