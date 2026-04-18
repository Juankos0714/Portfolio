"use client"

import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contacto" className="px-6 md:px-12 lg:px-24 py-32">
      <div className="grid grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-span-8"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-8">
            Contacto
          </span>
          
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-12">
            Trabajemos
            <br />
            <span className="italic text-accent">juntos</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-12">
            Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u 
            oportunidades para ser parte de tu visión.
          </p>

          <motion.a
            href="mailto:juankos0714@gmail.com"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-4 group"
          >
            <span className="text-2xl md:text-3xl font-light hover:text-accent transition-colors duration-300">
              juankos0714@gmail.com
            </span>
            <motion.span 
              className="w-12 h-12 border border-current flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Right Side - Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 lg:col-span-3 lg:col-start-10 flex flex-col justify-end"
        >
          <div className="space-y-8">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                Ubicación
              </span>
              <p className="text-sm">
                Armenia, Quindío
                <br />
                Colombia 🇨🇴
                <br />
                <span className="text-muted-foreground">Disponible remoto</span>
              </p>
            </div>

            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                Redes
              </span>
              <div className="space-y-2">
                <a 
                  href="https://github.com/Juankos0714" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:text-accent transition-colors duration-300"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/juan-camilo-rojas-ospina-453793175/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:text-accent transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
