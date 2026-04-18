// Nota: "use client" requerido por framer-motion motion.* en Next.js App Router
"use client"

// Fix O(n)→O(1): SKILL_ENTRIES pre-computado a nivel de módulo en lib/data/portfolio.ts
// Fix ML-4: key estable usando item.id en lugar de index
import { motion } from "framer-motion"
import { SKILL_ENTRIES, EXPERIENCE } from "@/lib/data/portfolio"

export function About() {
  return (
    <section id="sobre-mi" className="px-6 md:px-12 lg:px-24 py-32 bg-secondary/30">
      <div className="grid grid-cols-12 gap-8 lg:gap-16">
        {/* Columna izquierda — Título y descripción */}
        <div className="col-span-12 lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-8">
              Sobre mí
            </span>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-8">
              Construyendo
              <br />
              <span className="italic text-accent">con propósito</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Soy un desarrollador fullstack enfocado en{" "}
                <span className="text-foreground">backend reactivo</span> con Java/Spring Boot WebFlux y{" "}
                <span className="text-foreground">frontend moderno</span> con Angular.
              </p>
              <p>
                Me especializo en arquitecturas de microservicios, integración de pagos y despliegue en nube.
                Siempre buscando optimizar el rendimiento y la experiencia de usuario.
              </p>
              <p>
                Creo firmemente que{" "}
                <span className="text-foreground italic">
                  &ldquo;el mejor código es el que resuelve problemas reales con elegancia técnica&rdquo;
                </span>
                .
              </p>
            </div>
          </motion.div>
        </div>

        {/* Columna derecha — Habilidades y experiencia */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-16">
          {/* Habilidades */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">Tecnologías</h3>

            <div className="space-y-8">
              {/* Fix O(n)→O(1): SKILL_ENTRIES pre-computado una vez en el módulo de datos */}
              {SKILL_ENTRIES.map(([categoria, items]) => (
                <div key={categoria}>
                  <span className="text-sm text-accent capitalize mb-4 block">{categoria}</span>
                  <div className="flex flex-wrap gap-2">
                    {items.map((habilidad) => (
                      <span
                        key={habilidad}
                        className="text-xs md:text-sm px-3 py-1.5 border border-border hover:border-accent hover:text-accent transition-colors duration-300 cursor-default"
                      >
                        {habilidad}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experiencia */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">Experiencia</h3>

            <div className="space-y-8">
              {EXPERIENCE.map((item, indice) => (
                <motion.div
                  key={item.id} // Fix ML-4: key estable, no basada en índice
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * indice }}
                  className="grid grid-cols-12 gap-4 group"
                >
                  <div className="col-span-4 md:col-span-3">
                    <span className="text-[10px] md:text-xs text-muted-foreground font-mono">
                      {item.period}
                    </span>
                  </div>
                  <div className="col-span-8 md:col-span-9">
                    <h4 className="text-sm md:text-base font-medium group-hover:text-accent transition-colors duration-300">
                      {item.role}
                    </h4>
                    <span className="text-xs md:text-sm text-muted-foreground block mb-2">
                      {item.company}
                    </span>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
