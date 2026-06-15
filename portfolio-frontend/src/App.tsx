import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { FeaturedProject } from '@/components/sections/FeaturedProject'
import { GitHubSection } from '@/components/sections/GitHubSection'
import { AIJourney } from '@/components/sections/AIJourney'
import { Contact } from '@/components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-50 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <FeaturedProject />
        <GitHubSection />
        <AIJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
