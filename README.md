# cristianopontes.com — Portfolio

Next.js 15 + Tailwind CSS + TypeScript portfolio for Cristiano Pontes.

## Deploy to Vercel

1. Push this repo to GitHub (already done if you're reading this).
2. Go to [vercel.com/new](https://vercel.com/new) → Import `cristiano-portfolio/cp-portfolio`.
3. Vercel auto-detects Next.js — no build config needed. Click **Deploy**.
4. Once deployed, go to **Settings → Domains** and add `cristianopontes.com`.
5. Add the DNS records Vercel shows you to your domain registrar (A record for apex, CNAME for www).

## Connect custom domain

In your Vercel project → **Settings → Domains**:

| Type  | Name  | Value                  |
|-------|-------|------------------------|
| A     | `@`   | `76.76.21.21`          |
| CNAME | `www` | `cns.vercel-dns.com`   |

Values shown in the Vercel dashboard are authoritative — use those if they differ.

## Swap the contact form endpoint

The contact form in `src/components/Contact.tsx` line 5:

```ts
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'
```

Replace `YOUR_FORM_ID` with your real Formspree form ID. Until you do, the form falls back to a `mailto:` link automatically.

To set up Formspree:
1. Go to [formspree.io](https://formspree.io) → Create a new form → copy the form ID.
2. Replace `YOUR_FORM_ID` in the file above.
3. Commit and push — Vercel redeploys automatically.

## Add your résumé

Drop your PDF at `public/resume.pdf`. The "Download résumé" button in the hero already points there.

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Update LinkedIn URL

The real LinkedIn URL is already set to `https://www.linkedin.com/in/cristiano-pontes-bb3b7744/` in:
- `src/components/Hero.tsx` (View LinkedIn button)
- `src/components/Contact.tsx` (LinkedIn link in contact section)

## Project structure

```
src/
  app/
    fonts/            # Self-hosted Inter + Satoshi variable fonts
    globals.css       # All design tokens and component styles
    layout.tsx        # Font loading, metadata, JSON-LD
    page.tsx          # Page composition
    opengraph-image.tsx  # Auto-generated OG image
    sitemap.ts        # /sitemap.xml
    robots.ts         # /robots.txt
  components/
    Nav.tsx           # Sticky nav with mobile menu (client)
    Hero.tsx          # Hero section with portrait
    Results.tsx       # Stat cards
    About.tsx         # About + value props
    Experience.tsx    # Timeline
    Skills.tsx        # Skills grid
    Contact.tsx       # Dark contact section + form (client)
    Footer.tsx        # Footer
    ScrollReveal.tsx  # Intersection Observer for fade-in (client)
public/
  images/             # All photos and logos
  resume.pdf          # Drop your PDF here
```
