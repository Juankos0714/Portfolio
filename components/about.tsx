"use client"

import { motion } from "framer-motion"

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
  tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "CI/CD"],
}

const experience = [
  {
    period: "2022 — Presente",
    role: "Senior Fullstack Developer",
    company: "Empresa Tech",
    description: "Liderando el desarrollo de productos digitales de alto impacto.",
  },
  {
    period: "2020 — 2022",
    role: "Fullstack Developer",
    company: "Startup Digital",
    description: "Desarrollo de MVPs y escalado de aplicaciones.",
  },
  {
    period: "2018 — 2020",
    role: "Frontend Developer",
    company: "Agencia Creativa",
    description: "Creación de interfaces de usuario y experiencias interactivas.",
  },
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
                Soy un desarrollador con más de 6 años de experiencia creando soluciones 
                digitales que equilibran la elegancia técnica con la usabilidad práctica.
              </p>
              <p>
                Mi enfoque se centra en escribir código limpio, mantenible y escalable, 
                mientras colaboro estrechamente con diseñadores y stakeholders para 
                entregar productos que realmente importan.
              </p>
              <p>
                Creo firmemente que la mejor tecnología es la que <span className="text-foreground">desaparece</span>, 
                permitiendo que las personas se concentren en lo que realmente necesitan lograr.
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
                        className="text-sm px-3 py-1.5 border border-border hover:border-accent hover:text-accent transition-colors duration-300 cursor-default"
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
                    <span className="text-xs text-muted-foreground font-mono">
                      {item.period}
                    </span>
                  </div>
                  <div className="col-span-8 md:col-span-9">
                    <h4 className="text-base font-medium group-hover:text-accent transition-colors duration-300">
                      {item.role}
                    </h4>
                    <span className="text-sm text-muted-foreground block mb-2">
                      {item.company}
                    </span>
                    <p className="text-sm text-muted-foreground">
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
