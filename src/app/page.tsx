import { Nav }        from '@/components/Nav'
import { Hero }       from '@/components/Hero'
import { Results }    from '@/components/Results'
import { About }      from '@/components/About'
import { Experience } from '@/components/Experience'
import { Skills }     from '@/components/Skills'
import { Contact }    from '@/components/Contact'
import { Footer }     from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Results />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
