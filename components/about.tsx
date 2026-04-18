"use client"

import { motion } from "framer-motion"

const skills = {
  frontend: ["Angular", "React", "TypeScript", "Tailwind CSS", "RxJS", "Framer Motion"],
  backend: ["Java", "Spring Boot WebFlux", "Node.js", "Python", "C#", "PostgreSQL"],
  tools: ["Docker", "Git", "GitHub Actions", "Azure", "Vercel", "Postman"],
}

const experience = [
  {
    period: "2024 — Presente",
    role: "Desarrollador Fullstack",
    company: "Proyecto Ubik (Portfolio)",
    description: "Arquitectura de microservicios reactivos, integración de pagos con Stripe, despliegue en Azure y stack completo Angular + Spring Boot WebFlux."
  },
  {
    period: "2024",
    role: "Desarrollador de Software",
    company: "Cliente Palo de Café",
    description: "Sistema POS e inventario con C# .NET 6 y SQLite. Entrega completa a cliente real con módulos de ventas, productos y reportes."
  },
  {
    period: "2024 — 2026",
    role: "Tecnólogo en ADSI",
    company: "SENA",
    description: "Formación en Análisis y Desarrollo de Software. Proyectos prácticos con Java, Angular, Spring Boot y DevOps."
  }
]

export function About() {
  return (
    <section id="sobre-mi" className="px-6 md:px-12 lg:px-24 py-32 bg-secondary/30">
      <div className="grid grid-cols-12 gap-8 lg:gap-16">
        {/* Left Column - Title & Description */}
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
                Soy un desarrollador fullstack enfocado en <span className="text-foreground">backend reactivo</span> con Java/Spring Boot WebFlux y <span className="text-foreground">frontend moderno</span> con Angular.
              </p>
              <p>
                Me especializo en arquitecturas de microservicios, integración de pagos y despliegue en nube. Siempre buscando optimizar el rendimiento y la experiencia de usuario.
              </p>
              <p>
                Creo firmemente que <span className="text-foreground italic">"el mejor código es el que resuelve problemas reales con elegancia técnica"</span>.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Skills & Experience */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-16">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
              Tecnologías
            </h3>
            
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <span className="text-sm text-accent capitalize mb-4 block">
                    {category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span 
                        key={skill}
                        className="text-xs md:text-sm px-3 py-1.5 border border-border hover:border-accent hover:text-accent transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
              Experiencia
            </h3>
            
            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
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
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {item.description}
                    </p>
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
