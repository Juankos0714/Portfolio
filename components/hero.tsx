"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import {
  EASE,
  EASE_CSS,
  PHOTO_SRC,
  NAV_LINKS,
  HERO_TECH_TAGS,
  PARALLAX_SCALES,
  SOCIAL_LINKS,
  PERSON,
} from "@/lib/constants"

interface MousePosition {
  x: number
  y: number
}

// BCR is cached to avoid layout thrash on each mousemove event.
// RAF throttle ensures at most one state update per render frame.
// Coordinates are clamped to [0, 1] to prevent overshooting when the
// cursor leaves the section boundaries.
function useCursorParallax(ref: React.RefObject<HTMLElement | null>): MousePosition {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let rect = el.getBoundingClientRect()
    const observer = new ResizeObserver(() => { rect = el.getBoundingClientRect() })
    observer.observe(el)

    let rafId: number
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setMouse({
          x: Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width)),
          y: Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height)),
        })
      })
    }

    window.addEventListener("mousemove", onMove)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", onMove)
      observer.disconnect()
    }
  }, [ref])

  return mouse
}

function CursorGlow({ mouse }: { mouse: MousePosition }) {
  return (
    <div
      className="pointer-events-none absolute z-0 w-[600px] h-[600px] rounded-full"
      style={{
        background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
        left: `${mouse.x * 100}%`,
        top: `${mouse.y * 100}%`,
        transform: "translate(-50%, -50%)",
        transition: `left 0.8s ${EASE_CSS}, top 0.8s ${EASE_CSS}`,
      }}
    />
  )
}

interface HeroNavProps {
  mounted: boolean
  isDark: boolean
  onToggleTheme: () => void
}

function HeroNav({ mounted, isDark, onToggleTheme }: HeroNavProps) {
  return (
    <header className="flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <span className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground font-mono">
          Portfolio 2026
        </span>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        className="flex gap-8 md:gap-10 items-center"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="hidden md:block text-[13px] tracking-[0.05em] text-muted-foreground hover:text-accent transition-colors duration-300"
          >
            {label}
          </a>
        ))}
        {mounted && (
          <button
            type="button"
            onClick={onToggleTheme}
            className="border border-border px-3 py-1.5 text-[11px] font-mono tracking-[0.06em] text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300"
          >
            {isDark ? "LIGHT" : "DARK"}
          </button>
        )}
      </motion.nav>
    </header>
  )
}

function HeroPhoto({ tx, ty }: { tx: number; ty: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
    >
      <div
        style={{
          transform: `translate(${tx * PARALLAX_SCALES.photo.x}px, ${ty * PARALLAX_SCALES.photo.y}px)`,
          transition: `transform 0.8s ${EASE_CSS}`,
        }}
      >
        <div className="relative w-[280px]">
          <div
            className="absolute border border-border"
            style={{ inset: -8, transform: "rotate(2deg)" }}
          />
          <img
            src={PHOTO_SRC}
            alt={PERSON.name}
            width={280}
            height={340}
            className="block object-cover object-top w-[280px] h-[340px]"
            style={{
              filter: isHovered ? "grayscale(0%)" : "grayscale(20%)",
              animation: isHovered ? "photoRock 0.6s ease-in-out infinite" : "none",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onError={(e) => { e.currentTarget.style.display = "none" }}
          />
          <div className="absolute -bottom-4 left-4 flex items-center gap-2 bg-background border border-border px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
            <span className="text-[11px] font-mono tracking-[0.08em] text-muted-foreground">
              DISPONIBLE
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function HeroSocialLinks() {
  return (
    <motion.footer
      className="flex justify-between items-end pt-8 border-t border-border"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <span className="text-[11px] font-mono tracking-[0.1em] text-muted-foreground">
        {PERSON.location}
      </span>
      <div className="flex gap-6 md:gap-7">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] text-muted-foreground hover:text-accent transition-colors duration-300 tracking-[0.06em]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            {label}
          </a>
        ))}
      </div>
    </motion.footer>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLElement>(null)
  // resolvedTheme resolves "system" to the actual value — theme === "system"
  // would never activate isDark correctly.
  const { resolvedTheme, setTheme } = useTheme()
  const mouse = useCursorParallax(ref)

  useEffect(() => { setMounted(true) }, [])

  const tx = (mouse.x - 0.5) * 12
  const ty = (mouse.y - 0.5) * 8
  const isDark = mounted && resolvedTheme === "dark"

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      <CursorGlow mouse={mouse} />

      <div className="relative z-10 flex flex-col flex-1 max-w-[1200px] w-full mx-auto px-6 md:px-12 py-8">
        <HeroNav
          mounted={mounted}
          isDark={isDark}
          onToggleTheme={() => setTheme(isDark ? "light" : "dark")}
        />

        <div className="flex flex-1 items-center pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 w-full items-center">
            <div>
              <motion.p
                className="text-[12px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: EASE }}
              >
                {PERSON.role}
              </motion.p>

              {/* Framer Motion manages entrance opacity; inline style manages cursor
                  parallax — keeping them on separate properties avoids transform
                  conflicts between the two animation systems. */}
              <motion.h1
                className="font-serif font-normal tracking-tight mb-8"
                style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
              >
                <span className="block">Juan</span>
                <span
                  className="block italic text-accent"
                  style={{
                    transform: `translate(${tx * PARALLAX_SCALES.nameItalic.x}px, ${ty * PARALLAX_SCALES.nameItalic.y}px)`,
                    transition: `transform 0.6s ${EASE_CSS}`,
                  }}
                >
                  Camilo
                </span>
                <span
                  className="block"
                  style={{
                    transform: `translate(${tx * PARALLAX_SCALES.nameLast.x}px, ${ty * PARALLAX_SCALES.nameLast.y}px)`,
                    transition: `transform 0.6s ${EASE_CSS} 0.05s`,
                  }}
                >
                  Rojas
                </span>
              </motion.h1>

              <motion.div
                className="flex flex-wrap gap-2 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: EASE }}
              >
                {HERO_TECH_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1 border border-border text-muted-foreground font-mono tracking-[0.06em]"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: EASE }}
              >
                <a
                  href="#trabajo"
                  className="inline-flex items-center gap-4 px-7 py-3.5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-sm tracking-[0.04em]"
                >
                  Ver proyectos
                  <span className="text-lg leading-none">→</span>
                </a>
              </motion.div>
            </div>

            <HeroPhoto tx={tx} ty={ty} />
          </div>
        </div>

        <HeroSocialLinks />
      </div>
    </section>
  )
}
