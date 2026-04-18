"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    category: "Fullstack Development",
    year: "2024",
    description: "Plataforma de comercio electrónico con arquitectura headless, optimizada para alto rendimiento y escalabilidad.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
  },
  {
    number: "02",
    title: "Dashboard Analytics",
    category: "Frontend & API",
    year: "2024",
    description: "Sistema de visualización de datos en tiempo real con gráficos interactivos y reportes automatizados.",
    technologies: ["React", "D3.js", "Node.js", "Redis"],
  },
  {
    number: "03",
    title: "Mobile Banking App",
    category: "Fullstack Development",
    year: "2023",
    description: "Aplicación bancaria con autenticación biométrica, transferencias instantáneas y gestión financiera personal.",
    technologies: ["React Native", "Express", "MongoDB", "AWS"],
  },
  {
    number: "04",
    title: "CMS Headless",
    category: "Backend & Architecture",
    year: "2023",
    description: "Sistema de gestión de contenidos modular con API GraphQL y panel de administración personalizable.",
    technologies: ["GraphQL", "Prisma", "Next.js", "Vercel"],
  },
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="trabajo" className="px-6 md:px-12 lg:px-24 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Proyectos Seleccionados
        </span>
      </motion.div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group border-t border-border py-12 cursor-pointer"
          >
            <div className="grid grid-cols-12 gap-4 items-start">
              {/* Number */}
              <div className="col-span-2 md:col-span-1">
                <span className="text-xs text-muted-foreground font-mono">
                  {project.number}
                </span>
              </div>

              {/* Title & Category */}
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-serif text-2xl md:text-4xl font-light tracking-tight mb-2 group-hover:text-accent transition-colors duration-500">
                  {project.title}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {project.category}
                </span>
              </div>

              {/* Description - Hidden on mobile */}
              <motion.div 
                className="hidden md:block col-span-4"
                initial={{ opacity: 0.5 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0.5,
                  x: hoveredIndex === index ? 10 : 0
                }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </motion.div>

              {/* Year */}
              <div className="hidden md:block col-span-2 text-right">
                <span className="text-sm text-muted-foreground">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Technologies */}
            <motion.div 
              className="grid grid-cols-12 gap-4 mt-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: hoveredIndex === index ? 1 : 0,
                height: hoveredIndex === index ? "auto" : 0
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="col-span-2 md:col-span-1" />
              <div className="col-span-10 md:col-span-11 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs tracking-wide px-3 py-1.5 border border-border bg-secondary/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.article>
        ))}
      </div>

      {/* View All Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 flex justify-end"
      >
        <a 
          href="#" 
          className="group inline-flex items-center gap-4 text-sm tracking-wide hover:text-accent transition-colors duration-300"
        >
          <span>Ver todos los proyectos</span>
          <span className="w-8 h-[1px] bg-current transition-all duration-300 group-hover:w-12" />
        </a>
      </motion.div>
    </section>
  )
}
