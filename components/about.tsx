"use client"

import { motion } from "motion/react"
import { SKILL_ENTRIES } from "@/lib/data/portfolio"
import { EASE, PHOTO_SRC, PERSON } from "@/lib/constants"

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12"
      style={{ background: "var(--section-bg)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono block mb-10">
              About
            </span>

            <div className="relative mb-12 inline-block">
              <img
                src={PHOTO_SRC}
                alt={PERSON.name}
                width={220}
                height={270}
                className="block object-cover object-top w-[220px] h-[270px]"
              />
              <div
                className="absolute -bottom-3 -right-3 w-20 h-20 opacity-15"
                style={{ background: "var(--accent)" }}
              />
            </div>

            <h2
              className="font-serif font-normal tracking-tight leading-[1.1] mb-7"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.01em" }}
            >
              Building<br />
              <em className="not-italic italic text-accent">with purpose</em>
            </h2>

            <div className="flex flex-col gap-4">
              <p className="text-[14px] leading-[1.8] text-muted-foreground">
                Product Engineer building complete products, scalable systems, and AI-powered applications. I work across the full stack — from reactive microservices to polished user interfaces.
              </p>
              <p className="text-[14px] leading-[1.8] text-muted-foreground">
                I specialize in system architecture, cloud infrastructure, and shipping software that runs in production. I believe the best code solves real problems with technical elegance.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          >
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono block mb-7">
                Technologies
              </span>
              <div className="flex flex-col gap-6">
                {SKILL_ENTRIES.map(([cat, items]) => (
                  <div key={cat}>
                    <span className="text-[11px] text-accent font-mono tracking-[0.08em] uppercase block mb-2.5">
                      {cat}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {items.map((s) => (
                        <span
                          key={s}
                          className="text-[12px] px-3 py-1 border border-border text-muted-foreground font-mono cursor-default hover:border-accent hover:text-accent transition-all duration-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono block mb-7">
                Quick Facts
              </span>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-[100px_1fr] gap-4">
                  <span className="text-[11px] text-muted-foreground font-mono">Languages</span>
                  <span className="text-[13px]">Java, TypeScript, Python, C#, C++, Dart, SQL</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                  <span className="text-[11px] text-muted-foreground font-mono">Frontend</span>
                  <span className="text-[13px]">Angular, React, Next.js, SvelteKit, Flutter</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                  <span className="text-[11px] text-muted-foreground font-mono">Backend</span>
                  <span className="text-[13px]">Spring Boot, WebFlux, FastAPI, Node.js</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                  <span className="text-[11px] text-muted-foreground font-mono">Cloud</span>
                  <span className="text-[13px]">Azure, Vercel, Docker, Nginx, GitHub Actions</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
