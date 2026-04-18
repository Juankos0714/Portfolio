"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 py-8">
      {/* Header */}
      <header className="flex justify-between items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Portfolio 2024
          </span>
        </motion.div>
        
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex gap-12"
        >
          <a href="#trabajo" className="text-sm tracking-wide hover:text-accent transition-colors duration-300">
            Trabajo
          </a>
          <a href="#sobre-mi" className="text-sm tracking-wide hover:text-accent transition-colors duration-300">
            Sobre mí
          </a>
          <a href="#contacto" className="text-sm tracking-wide hover:text-accent transition-colors duration-300">
            Contacto
          </a>
        </motion.nav>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden text-sm"
        >
          Menú
        </motion.button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center -mt-20">
        <div className="grid grid-cols-12 gap-4">
          <motion.div 
            className="col-span-12 lg:col-span-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <h1 className="font-serif text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-tight font-light">
              <motion.span 
                className="block overflow-hidden"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Desarrollo
              </motion.span>
              <motion.span 
                className="block overflow-hidden text-accent italic"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                & Diseño
              </motion.span>
            </h1>
          </motion.div>

          <motion.div 
            className="col-span-12 lg:col-span-4 flex flex-col justify-end lg:items-end"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-sm lg:text-right mt-8 lg:mt-0">
              Desarrollador Fullstack creando experiencias digitales que combinan 
              <span className="text-foreground"> funcionalidad precisa</span> con 
              <span className="text-foreground"> estética intencional</span>.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col gap-1"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Disponible para proyectos
          </span>
          <span className="text-sm">
            Q1 2025
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex gap-8"
        >
          <a 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            GitHub
          </a>
          <a 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            LinkedIn
          </a>
          <a 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            Email
          </a>
        </motion.div>
      </footer>
    </section>
  )
}
