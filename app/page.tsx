import { Hero } from "@/components/hero"
import { ProjectsInteractive } from "@/components/projects-interactive"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectsInteractive />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
