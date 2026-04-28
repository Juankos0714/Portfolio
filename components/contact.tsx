"use client"

import { motion } from "framer-motion"
import { EASE, SOCIAL_LINKS, PERSON } from "@/lib/constants"

const CONTACT_SOCIAL_LINKS = SOCIAL_LINKS.filter(({ label }) => label !== "Email")

export function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono block mb-10">
              Contacto
            </span>
            <h2
              className="font-serif font-normal tracking-tight mb-12"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}
            >
              Trabajemos<br />
              <em className="not-italic italic text-accent">juntos</em>
            </h2>
            <p className="text-[15px] text-muted-foreground max-w-[480px] leading-[1.8] mb-12">
              Siempre abierto a proyectos interesantes, colaboraciones o simplemente una buena conversación sobre tecnología.
            </p>
            <a
              href={`mailto:${PERSON.email}`}
              className="inline-flex items-center gap-5 text-foreground hover:text-accent transition-colors duration-300 group"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", fontFamily: "var(--font-serif)" }}
            >
              {PERSON.email}
              <span className="w-11 h-11 border border-current flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300">
                →
              </span>
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8 pb-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          >
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono block mb-2.5">
                Ubicación
              </span>
              <p className="text-[13px] leading-[1.7]">
                {PERSON.location}<br />
                <span className="text-muted-foreground">Disponible de forma remota</span>
              </p>
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono block mb-2.5">
                Redes
              </span>
              <div className="flex flex-col gap-2">
                {CONTACT_SOCIAL_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {label} ↗
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
