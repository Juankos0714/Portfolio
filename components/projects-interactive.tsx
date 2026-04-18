"use client"

import { useOptimistic, useTransition } from "react"
import { motion } from "framer-motion"
import { Github, ArrowRight, Cpu } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PROJECTS } from "@/lib/data/portfolio"
import type { Project, ArchitectureType } from "@/lib/data/portfolio"
import {
  UbikArchitecture,
  DevOpsAzureArchitecture,
  POSPaloCafeArchitecture,
  JWTFlowArchitecture,
  ArchFallback,
} from "@/components/diagrams/architecture-diagrams"

// Fix OCP+O(n)→O(1): Map de arquitecturas — O(1) lookup, abierto para extensión sin modificar el dispatcher
const ARQUITECTURA_MAP: Record<ArchitectureType, React.ComponentType> = {
  microservices: UbikArchitecture,
  devops: DevOpsAzureArchitecture,
  desktop: POSPaloCafeArchitecture,
  jwt: JWTFlowArchitecture,
}

function ComponenteArquitectura({ tipo }: { tipo: ArchitectureType }) {
  const Componente = ARQUITECTURA_MAP[tipo]
  return Componente ? <Componente /> : <ArchFallback />
}

// --- Componente de tarjeta individual (SRP) ---
function TarjetaProyecto({
  proyecto,
  indice,
  alSeleccionar,
}: {
  proyecto: Project
  indice: number
  alSeleccionar: (p: Project) => void
}) {
  // Fix O(n) → O(1): acceso a slice y length se hace una sola vez, sin doble traversal
  const techsVisibles = proyecto.technologies.slice(0, 4)
  const techsExtra = proyecto.technologies.length - 4

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: indice * 0.1 }}
      onClick={() => alSeleccionar(proyecto)}
      className="group relative cursor-pointer h-full"
    >
      {/* Borde exterior como capa separada para mayor claridad visual */}
      <div className="relative h-full border border-border/60 bg-card transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-[0_8px_40px_-12px] group-hover:shadow-accent/10">
        {/* Indicador de número — fondo diferenciado */}
        <div className="flex justify-between items-center px-6 pt-6 pb-4 border-b border-border/30">
          <span className="text-[10px] text-accent font-mono font-medium tracking-widest">{proyecto.number}</span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">{proyecto.year}</span>
        </div>

        {/* Cuerpo de la tarjeta */}
        <div className="p-6 flex flex-col gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-serif leading-snug mb-1 group-hover:text-accent transition-colors duration-300">
              {proyecto.title}
            </h3>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{proyecto.category}</p>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-1">
            {proyecto.description}
          </p>

          {/* Separador visual antes de las pills */}
          <div className="pt-2 border-t border-border/20">
            <div className="flex flex-wrap gap-1.5">
              {techsVisibles.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] px-2 py-1 bg-secondary/60 text-muted-foreground border border-border/40 font-mono"
                >
                  {tech}
                </span>
              ))}
              {techsExtra > 0 && (
                <span className="text-[10px] px-2 py-1 text-muted-foreground/50 border border-border/20 font-mono">
                  +{techsExtra}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Flecha hover — esquina inferior derecha */}
        <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
          <ArrowRight className="w-4 h-4 text-accent" />
        </div>
      </div>
    </motion.div>
  )
}

// --- Modal del proyecto (SRP) ---

// Fix React 19: useOptimistic para el botón de análisis de código
type EstadoAnalisis = "idle" | "cargando" | "listo"

function ModalProyecto({
  proyecto,
  abierto,
  alCerrar,
}: {
  proyecto: Project | null
  abierto: boolean
  alCerrar: () => void
}) {
  const [isPending, startTransition] = useTransition()
  const [estadoOptimista, setEstadoOptimista] = useOptimistic<EstadoAnalisis>("idle")

  if (!proyecto) return null

  function manejarAnalisis() {
    startTransition(async () => {
      // Actualización optimista: la UI refleja "cargando" de inmediato
      setEstadoOptimista("cargando")
      // Simulación de llamada async (reemplazar con sendPrompt real)
      await new Promise((r) => setTimeout(r, 1500))
      setEstadoOptimista("listo")
    })
  }

  const textoBoton = {
    idle: "Generar Análisis de Código",
    cargando: "Analizando...",
    listo: "Análisis Completado ✓",
  }[estadoOptimista]

  return (
    <Dialog open={abierto} onOpenChange={(open) => !open && alCerrar()}>
      <DialogContent className="max-w-5xl w-[95vw] h-[85vh] p-0 overflow-hidden bg-background/95 backdrop-blur-md border-border/50">
        <div className="flex flex-col h-full">
          {/* Encabezado */}
          <div className="p-8 border-b border-border/40 shrink-0">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2 block">
                  {proyecto.category}
                </span>
                <DialogTitle className="text-3xl md:text-5xl font-serif tracking-tight">
                  {proyecto.title}
                </DialogTitle>
              </div>
              <div className="flex gap-3">
                {proyecto.github && (
                  <Button size="sm" variant="outline" className="rounded-none border-border" asChild>
                    <a
                      href={proyecto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span className="hidden sm:inline">Código</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex-1 overflow-hidden">
            <Tabs defaultValue="resumen" className="h-full flex flex-col">
              <div className="px-8 border-b border-border/40">
                <TabsList className="bg-transparent h-12 p-0 gap-8">
                  {(["resumen", "arquitectura", "stack"] as const).map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-0 h-12 text-xs uppercase tracking-widest transition-all capitalize"
                    >
                      {tab === "resumen" ? "Resumen" : tab === "arquitectura" ? "Arquitectura" : "Stack Técnico"}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <div className="flex-1 overflow-y-auto portfolio-scrollbar">
                {/* Tab: Resumen */}
                <TabsContent value="resumen" className="p-8 mt-0 focus-visible:ring-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                      <h4 className="text-sm font-semibold mb-4 text-foreground/80">Descripción del Proyecto</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {proyecto.longDescription}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                        {proyecto.kpis.map((kpi) => (
                          <div key={kpi.label} className="border border-border/40 p-4 bg-secondary/10">
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                              {kpi.label}
                            </p>
                            <p className="text-xl font-serif text-accent">{kpi.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-3 text-foreground/60">
                          Tecnologías Clave
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {proyecto.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="rounded-none border-border/60 font-mono text-[10px]"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 border-l-2 border-accent/20 bg-accent/5">
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Este proyecto fue desarrollado bajo los principios de código limpio y escalabilidad,
                          enfocado en resolver problemas reales de negocio.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Tab: Arquitectura */}
                <TabsContent value="arquitectura" className="h-[50vh] mt-0 focus-visible:ring-0">
                  <div className="flex flex-col h-full">
                    <div className="flex-1 bg-secondary/5 relative">
                      <ComponenteArquitectura tipo={proyecto.architectureType} />
                      <div className="absolute bottom-4 left-4 flex gap-4">
                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                          Lógica Reactiva
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                          Middleware
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t border-border/40 bg-background/50 text-[10px] text-muted-foreground text-center uppercase tracking-[0.2em]">
                      Diagrama interactivo del sistema
                    </div>
                  </div>
                </TabsContent>

                {/* Tab: Stack */}
                <TabsContent value="stack" className="p-8 mt-0 focus-visible:ring-0">
                  <div className="max-w-2xl mx-auto space-y-12">
                    <div className="text-center">
                      <Cpu className="w-12 h-12 text-accent/40 mx-auto mb-4" />
                      <h4 className="text-2xl font-serif mb-4">Análisis del Stack</h4>
                      <p className="text-sm text-muted-foreground mb-8">
                        Desglose detallado de las herramientas y patrones utilizados en este proyecto.
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-left">
                        {proyecto.technologies.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-3 p-3 border border-border/40 hover:bg-secondary/20 transition-colors"
                          >
                            <div className="w-1 h-1 bg-accent flex-shrink-0" />
                            <span className="text-sm font-mono">{tech}</span>
                          </div>
                        ))}
                      </div>

                      {/* Fix React 19 — useOptimistic: feedback instantáneo sin bloquear UI */}
                      <Button
                        className="mt-12 rounded-none bg-accent hover:bg-accent/80 text-accent-foreground px-8 py-6 h-auto transition-transform active:scale-95 disabled:opacity-60"
                        onClick={manejarAnalisis}
                        disabled={isPending || estadoOptimista === "listo"}
                        aria-label={`Analizar el stack técnico de ${proyecto.title}`}
                      >
                        {textoBoton}
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// --- Componente principal (solo orquesta) ---
export function ProjectsInteractive() {
  // Estado mínimo: solo el proyecto seleccionado. `null` = modal cerrado.
  // Fix: useState con null es suficiente; no se necesita useEffect
  const [proyectoSeleccionado, setProyectoSeleccionado] = React.useState<Project | null>(null)

  return (
    <section id="trabajo" className="py-24 md:py-32 bg-background">
      {/* Contenedor con max-width para evitar desbordamiento en pantallas grandes */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-accent/70 mb-3 block font-medium">
            Portfolio de Ingeniería
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight">Proyectos Seleccionados</h2>
        </motion.div>

        {/* Grilla de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {PROJECTS.map((proyecto, indice) => (
            <TarjetaProyecto
              key={proyecto.id}
              proyecto={proyecto}
              indice={indice}
              alSeleccionar={setProyectoSeleccionado}
            />
          ))}
        </div>

        {/* Ver todos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/Juankos0714"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-muted-foreground hover:text-accent transition-colors duration-300"
            aria-label="Explorar todos los proyectos en GitHub"
          >
            <span>Explorar repositorio completo</span>
            <span className="w-6 h-[1px] bg-current transition-all duration-300 group-hover:w-10" />
          </a>
        </motion.div>
      </div>

      {/* Modal — Fix ML-3: unmount condicional previene listeners huérfanos */}
      <ModalProyecto
        proyecto={proyectoSeleccionado}
        abierto={!!proyectoSeleccionado}
        alCerrar={() => setProyectoSeleccionado(null)}
      />
    </section>
  )
}

// Fix para el import de React necesario por useOptimistic/useState en sub-componentes del mismo archivo
import React from "react"
