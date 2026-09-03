"use client"

import { motion } from "motion/react"
import { EASE } from "@/lib/constants"

interface OtherProject {
  name: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
}

const OTHER_PROJECTS: OtherProject[] = [
  {
    name: "Cosmere Atlas",
    description: "3D interactive explorer of the Cosmere universe (Brandon Sanderson). React Three Fiber + Zustand + Clean Architecture.",
    technologies: ["Next.js 15", "React Three Fiber", "Zustand"],
    github: "https://github.com/Juankos0714/cosmere-atlas",
  },
  {
    name: "CodePath",
    description: "Educational JavaScript platform for beginners in LATAM. 10-module curriculum with gamification and Monaco Editor.",
    technologies: ["Next.js 15", "Supabase", "Monaco Editor"],
    github: "https://github.com/Juankos0714/codepath",
  },
  {
    name: "Angarita",
    description: "Full-stack pair: Angular 20 + RxJS frontend and Java 17 + Spring Boot backend with JWT auth and Docker multi-stage.",
    technologies: ["Angular 20", "Spring Boot", "JWT", "Docker"],
  },
  {
    name: "YouTube Shorts Pipeline",
    description: "Fully automated pipeline for generating short-form videos. Python + Edge-TTS + MoviePy + Ollama for content creation.",
    technologies: ["Python", "Edge-TTS", "MoviePy", "Ollama"],
  },
  {
    name: "FinAI",
    description: "Robo-advisor / financial analysis platform for LatAm. FastAPI + PyTorch + FinBERT + Clean Architecture. Architecture and ML pipeline partially implemented.",
    technologies: ["FastAPI", "PyTorch", "FinBERT", "PostgreSQL"],
    github: "https://github.com/Juankos0714/FinAI",
  },
]

function OtherProjectCard({ project, index }: { project: OtherProject; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: EASE }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="border border-border p-5 hover:border-accent focus-within:border-accent transition-colors duration-300 flex flex-col"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-[14px] font-medium tracking-tight">{project.name}</h3>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-muted-foreground hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-300 font-mono whitespace-nowrap flex items-center gap-1"
          >
            GitHub
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
          </a>
        )}
      </div>
      <p className="text-[12px] leading-[1.7] text-muted-foreground mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span
            key={t}
            className="text-[10px] px-2 py-0.5 border border-border font-mono text-muted-foreground tracking-[0.04em]"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export function OtherProjects() {
  return (
    <section className="py-24 px-6 md:px-12" aria-labelledby="other-projects-heading">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span id="other-projects-heading" className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono">
            Other Projects
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OTHER_PROJECTS.map((project, i) => (
            <OtherProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
