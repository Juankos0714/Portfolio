"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { PROJECTS } from "@/lib/data/portfolio"
import type { Project, ArchitectureType } from "@/lib/data/portfolio"
import { EASE } from "@/lib/constants"
import {
  UbikArchitecture,
  StarGoArchitecture,
  VentaDeLotesArchitecture,
  NullBotArchitecture,
  ReactSupabaseArchitecture,
} from "@/components/diagrams/architecture-diagrams"

const ARQUITECTURA_MAP: Record<ArchitectureType, React.ComponentType> = {
  microservices: UbikArchitecture,
  realtime: StarGoArchitecture,
  supabase: VentaDeLotesArchitecture,
  security: NullBotArchitecture,
  devops: ReactSupabaseArchitecture,
  desktop: ReactSupabaseArchitecture,
}

const ETIQUETAS_DIAGRAMA: Record<ArchitectureType, string> = {
  microservices: "Reactive Microservices",
  realtime: "Real-Time Platform",
  supabase: "React + Supabase Stack",
  security: "Security Architecture",
  devops: "Infrastructure & DevOps",
  desktop: "Desktop Architecture",
}

// --- ComponenteArquitectura (SRP) ---
function ComponenteArquitectura({ tipo }: { tipo: ArchitectureType }) {
  const Componente = ARQUITECTURA_MAP[tipo]
  // Fix: guarda de nulidad — protege contra tipos nuevos sin entrada en el mapa
  return Componente ? <Componente /> : null
}

// --- FilaProyecto (SRP) ---
function FilaProyecto({ proyecto }: { proyecto: Project }) {
  const [abierto, setAbierto] = useState(false)

  return (
    <article className="border-t border-border">
      {/* Cabecera — siempre visible */}
      {/* Fix: grid responsive — 3 columnas en mobile (descripción oculta), 4 en desktop */}
      <div
        onClick={() => setAbierto((a) => !a)}
        className="grid grid-cols-[48px_1fr_80px] md:grid-cols-[48px_1fr_auto_80px] gap-6 items-center py-7 cursor-pointer hover:opacity-80 transition-opacity duration-200"
      >
        <span className="text-[11px] text-muted-foreground font-mono">{proyecto.number}</span>

        <div>
          <h3
            className="font-serif font-normal tracking-tight leading-none mb-1 transition-colors duration-300"
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
              color: abierto ? "var(--accent)" : "var(--foreground)",
            }}
          >
            {proyecto.title}
          </h3>
          <span className="text-[12px] text-muted-foreground font-mono tracking-[0.06em]">
            {proyecto.category}
          </span>
        </div>

        <p className="hidden md:block text-[13px] text-muted-foreground max-w-[340px] leading-relaxed">
          {proyecto.description}
        </p>

        <div className="flex flex-col items-end gap-2">
          <span className="text-[12px] text-muted-foreground font-mono">{proyecto.year}</span>
          <div
            className="w-8 h-8 border flex items-center justify-center transition-all duration-300"
            style={{
              borderColor: abierto ? "var(--accent)" : "var(--border)",
              color: abierto ? "var(--accent)" : "var(--muted-foreground)",
            }}
          >
            <span
              className="text-lg leading-none block"
              style={{
                transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
                transform: abierto ? "rotate(45deg)" : "none",
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>

      {/* Caso de estudio expandido */}
      <AnimatePresence initial={false}>
        {abierto && (
          <motion.div
            key="contenido"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 pt-10 border-t border-border">
              {/* Izquierda — descripción, KPIs, tecnologías, enlace */}
              <div>
                <p className="text-[15px] leading-[1.8] text-muted-foreground mb-9 max-w-[480px]">
                  {proyecto.longDescription}
                </p>

                {/* KPIs */}
                <div className="flex gap-6 mb-9 pb-9 border-b border-border">
                  {proyecto.kpis.map((k) => (
                    <div key={k.label}>
                      <div className="font-serif font-normal text-[22px] tracking-tight mb-1">
                        {k.value}
                      </div>
                      <div className="text-[10px] text-muted-foreground tracking-[0.1em] uppercase font-mono">
                        {k.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tecnologías */}
                <div className="mb-7">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono block mb-3">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {proyecto.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 border border-border font-mono text-muted-foreground tracking-[0.04em] hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {proyecto.github && (
                  <motion.a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-[12px] tracking-[0.05em] px-5 py-2.5 border border-border text-foreground hover:border-accent hover:text-accent transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View on GitHub
                    <motion.svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    ><path d="M7 17L17 7M17 7H7M17 7v10" /></motion.svg>
                  </motion.a>
                )}
              </div>

              {/* Derecha — diagrama de arquitectura */}
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono block mb-4">
                  Diagrama — {ETIQUETAS_DIAGRAMA[proyecto.architectureType]}
                </span>
                <div className="border border-border p-6 bg-card">
                  <ComponenteArquitectura tipo={proyecto.architectureType} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export function ProjectsInteractive() {
  return (
    <section id="work" className="py-24 max-w-[1200px] mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono">
          Featured Projects
        </span>
      </motion.div>

      <div>
        {/* Fix ML-4: key estable usando proyecto.id en lugar de índice */}
        {PROJECTS.map((proyecto) => (
          <FilaProyecto key={proyecto.id} proyecto={proyecto} />
        ))}

        <div className="border-t border-border pt-8 flex justify-end">
          <motion.a
            href="https://github.com/Juankos0714"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[13px] text-muted-foreground hover:text-accent transition-colors duration-300 tracking-[0.05em]"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            View all projects on GitHub
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
