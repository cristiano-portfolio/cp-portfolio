import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ScrollReveal } from '@/components/ScrollReveal'

const inter = localFont({
  src: './fonts/InterVariable.woff2',
  variable: '--font-inter',
  display: 'swap',
})

const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const siteUrl = 'https://cristianopontes.com'

export const metadata: Metadata = {
  title: 'Cristiano Pontes — B2B MedTech Sales & Marketing Leader | Demand Gen',
  description:
    'Cristiano Pontes is a B2B MedTech sales and marketing leader in San Diego, CA. Expert in demand generation, full-funnel growth, CRM/RevOps, and building commercial engines from zero.',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Cristiano Pontes — B2B MedTech Sales & Marketing Leader',
    description:
      'B2B MedTech demand generation and full-funnel growth leader in San Diego. I build commercial engines from zero.',
    url: siteUrl,
    siteName: 'Cristiano Pontes',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cristiano Pontes — B2B MedTech Sales & Marketing Leader',
    description:
      'B2B MedTech demand generation leader in San Diego. Full-funnel growth, CRM/RevOps, and commercial engine builder.',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Cristiano Pontes',
  jobTitle: 'Director of Sales & Marketing',
  url: siteUrl,
  sameAs: ['https://www.linkedin.com/in/cristiano-pontes-bb3b7744/'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Diego',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  knowsAbout: [
    'B2B Sales',
    'MedTech Marketing',
    'Demand Generation',
    'Full-Funnel Marketing',
    'HubSpot',
    'Klaviyo',
    'Google Ads',
    'Meta Ads',
    'SEO',
    'CRM',
    'RevOps',
    'Email Marketing',
    'Conversion Tracking',
    'B2B Pipeline',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="js"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${satoshi.variable} ${plusJakarta.variable}`}>
        {children}
        <ScrollReveal />
      </body>
    </html>
  )
}
