"use client"

import { motion } from "framer-motion"
import { SKILL_ENTRIES, EXPERIENCE } from "@/lib/data/portfolio"
import { EASE, PHOTO_SRC, PERSON } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function About() {
  return (
    <section
      id="sobre-mi"
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
              Sobre mí
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
              Construyendo<br />
              <em className="not-italic italic text-accent">con propósito</em>
            </h2>

            <div className="flex flex-col gap-4">
              <p className="text-[14px] leading-[1.8] text-muted-foreground">
                Desarrollador fullstack enfocado en backend reactivo con Java/Spring Boot WebFlux y frontend moderno con Angular.
              </p>
              <p className="text-[14px] leading-[1.8] text-muted-foreground">
                Me especializo en arquitecturas de microservicios, integración de pagos y despliegue en nube. Optimizando rendimiento y experiencia de usuario.
              </p>
              <p className="text-[14px] leading-[1.8] text-muted-foreground">
                Creo que el mejor código resuelve problemas reales con elegancia técnica.
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
                Tecnologías
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
                Experiencia
              </span>
              <div>
                {EXPERIENCE.map((item, i) => (
                  <div
                    key={item.id}
                    className={cn(
                      "grid grid-cols-[120px_1fr] gap-5 py-5 border-b border-border",
                      i === 0 && "border-t"
                    )}
                  >
                    <span className="text-[10px] text-muted-foreground font-mono pt-0.5">
                      {item.period}
                    </span>
                    <div>
                      <h4 className="text-[14px] font-medium mb-1">{item.role}</h4>
                      <span className="text-[12px] text-muted-foreground block mb-2">
                        {item.company}
                      </span>
                      <p className="text-[12px] text-muted-foreground leading-[1.7]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
