"use client"

import { motion } from "motion/react"
import { EASE } from "@/lib/constants"
import {
  Building2,
  Settings,
  Palette,
  Database,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"

interface StackBlock {
  title: string
  icon: LucideIcon
  phrase: string
  technologies: string[]
  color: string
}

const STACK_BLOCKS: StackBlock[] = [
  {
    title: "Architecture",
    icon: Building2,
    phrase: "Microservices, hexagonal, event-driven — Ubik's 7-service reactive backend",
    technologies: ["Hexagonal", "CQRS", "Saga Pattern", "Event-Driven"],
    color: "var(--accent)",
  },
  {
    title: "Backend",
    icon: Settings,
    phrase: "Reactive Java with Spring WebFlux and R2DBC — used in production on Azure",
    technologies: ["Spring Boot", "WebFlux", "R2DBC", "FastAPI", "Node.js"],
    color: "var(--tech-blue)",
  },
  {
    title: "Frontend",
    icon: Palette,
    phrase: "Angular, React, SvelteKit, Next.js — from SPAs to SSR to real-time dashboards",
    technologies: ["Angular 17+", "React 19", "SvelteKit 5", "Next.js", "Tailwind"],
    color: "#8b5cf6",
  },
  {
    title: "Data & Cloud",
    icon: Database,
    phrase: "PostgreSQL, Redis, Supabase, Firebase — with RLS, RPCs, and realtime subscriptions",
    technologies: ["PostgreSQL", "Redis", "Supabase", "Firebase", "Azure"],
    color: "#10b981",
  },
  {
    title: "DevOps",
    icon: Rocket,
    phrase: "Docker, Nginx, GitHub Actions, systemd — SSL, auto-restart, CI pipelines",
    technologies: ["Docker", "Nginx", "GitHub Actions", "systemd", "Vercel"],
    color: "#f59e0b",
  },
  {
    title: "Quality & Testing",
    icon: ShieldCheck,
    phrase: "Vitest, Playwright, pytest, k6 — 257 unit tests, 146 e2e, 90%+ coverage",
    technologies: ["Vitest", "Playwright", "pytest", "k6", "Lighthouse"],
    color: "#f43f5e",
  },
]

function StackBlockCard({ block, index }: { block: StackBlock; index: number }) {
  const Icon = block.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="border border-border p-6 hover:border-accent focus-within:border-accent transition-colors duration-300 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5" style={{ color: block.color }} strokeWidth={1.5} aria-hidden="true" />
        <h3 className="text-[15px] font-medium tracking-tight">{block.title}</h3>
      </div>
      <p className="text-[13px] leading-[1.7] text-muted-foreground mb-5">
        {block.phrase}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {block.technologies.map((t) => (
          <span
            key={t}
            className="text-[10px] px-2 py-0.5 border border-border font-mono text-muted-foreground tracking-[0.04em] group-hover:border-accent/40 transition-colors duration-300"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function EngineeringStack() {
  return (
    <section id="engineering" className="py-24 px-6 md:px-12" style={{ background: "var(--section-bg)" }} aria-labelledby="engineering-heading">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span id="engineering-heading" className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono">
            Engineering
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STACK_BLOCKS.map((block, i) => (
            <StackBlockCard key={block.title} block={block} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
