import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { ProjectsInteractive } from "@/components/projects-interactive"
import { EngineeringStack } from "@/components/engineering-stack"
import { OtherProjects } from "@/components/other-projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <ProjectsInteractive />
      <EngineeringStack />
      <OtherProjects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
