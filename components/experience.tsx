"use client"

import { motion } from "framer-motion"
import { EXPERIENCES, type ExperienceEntry } from "@/lib/constants"
import { EASE } from "@/lib/constants"

const TYPE_LABELS: Record<string, string> = {
  professional: "Professional Experience",
  personal: "Personal Project",
  academic: "Academic Project",
  challenge: "Technical Assessment",
}

const TYPE_COLORS: Record<string, string> = {
  professional: "border-emerald-500/40 text-emerald-600 dark:text-emerald-400",
  personal: "border-sky-500/40 text-sky-600 dark:text-sky-400",
  academic: "border-violet-500/40 text-violet-600 dark:text-violet-400",
  challenge: "border-amber-500/40 text-amber-600 dark:text-amber-400",
}

function ExperienceCard({ item, index }: { item: ExperienceEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: EASE }}
      className="border-t border-border pt-8 pb-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-[16px] font-medium tracking-tight">{item.role}</h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[14px] text-muted-foreground">{item.company}</span>
            <span
              className={`text-[10px] px-2 py-0.5 border font-mono tracking-[0.06em] ${TYPE_COLORS[item.type]}`}
            >
              {TYPE_LABELS[item.type]}
            </span>
          </div>
        </div>
        <span className="text-[11px] text-muted-foreground font-mono tracking-[0.06em] whitespace-nowrap">
          {item.period}
        </span>
      </div>

      <p className="text-[14px] leading-[1.8] text-muted-foreground mb-5 max-w-[640px]">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {item.highlights.map((h) => (
          <span
            key={h}
            className="text-[11px] px-2.5 py-1 border border-border text-muted-foreground font-mono tracking-[0.04em]"
          >
            {h}
          </span>
        ))}
      </div>

      {item.projectLink && (
        <a
          href={item.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[12px] tracking-[0.05em] text-muted-foreground hover:text-accent transition-colors duration-300"
        >
          {item.projectLabel || "View project"} →
        </a>
      )}
    </motion.div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono">
            Experience
          </span>
        </motion.div>

        <div>
          {EXPERIENCES.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
