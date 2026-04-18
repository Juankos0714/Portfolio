"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    number: "01",
    title: "Ubik",
    category: "Fullstack · Microservicios",
    year: "2024–2025",
    description: "Plataforma de reservas para moteles con arquitectura de 7 microservicios reactivos, gateway JWT, pagos con Stripe, notificaciones por email y stack de observabilidad Prometheus/Grafana.",
    technologies: ["Spring Boot WebFlux", "Angular", "PostgreSQL", "Docker", "Stripe", "Azure"],
    link: "https://github.com/Juankos0714/Ubik-App"
  },
  {
    number: "02",
    title: "Ubik Microservices",
    category: "Backend · DevOps",
    year: "2025",
    description: "Backend reactivo con Spring WebFlux, R2DBC, RabbitMQ, Kafka y Eureka. Despliegue en Azure VM con Docker Compose, SSL/Nginx y systemd. Patrones hexagonal, CQRS y Saga.",
    technologies: ["Java", "Spring WebFlux", "RabbitMQ", "Kafka", "Docker", "Prometheus"],
    link: "https://github.com/Juankos0714/Ubik-Microservices"
  },
  {
    number: "03",
    title: "Palo de Café POS",
    category: "Desktop · Fullstack",
    year: "2024",
    description: "Sistema de punto de venta e inventario para cliente real, construido con C# .NET 6, Windows Forms y SQLite. Gestión de productos, ventas y reportes.",
    technologies: ["C#", ".NET 6", "Windows Forms", "SQLite"],
  },
  {
    number: "04",
    title: "JWT API",
    category: "Backend · Seguridad",
    year: "2025",
    description: "Servicio de autenticación y autorización en Java con Spring Boot, Spring Security y tokens JWT. Roles, endpoints protegidos y manejo de sesiones.",
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "Maven"],
    link: "https://github.com/Juankos0714/JWT-api"
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
            className="group border-t border-border py-12 cursor-pointer relative"
          >
            <div className="grid grid-cols-12 gap-4 items-start">
              {/* Number */}
              <div className="col-span-2 md:col-span-1">
                <span className="text-xs text-muted-foreground font-mono">
                  {project.number}
                </span>
              </div>

              {/* Title & Category */}
              <div className="col-span-8 md:col-span-5 relative">
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

              {/* Year & External Link */}
              <div className="col-span-2 md:col-span-2 text-right flex flex-col items-end gap-2">
                <span className="text-xs md:text-sm text-muted-foreground">
                  {project.year}
                </span>
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0.8
                    }}
                    className="p-2 border border-accent/20 bg-accent/5 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </motion.a>
                )}
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
                    className="text-[10px] md:text-xs tracking-wide px-3 py-1.5 border border-border bg-secondary/50"
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
