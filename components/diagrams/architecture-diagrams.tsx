// Diagramas SVG individuales — Server Components puros (sin hooks, sin eventos)
// Fix ML-5: useId() para IDs de filtros SVG únicos, evita colisiones en DOM StrictMode
"use client"
import { useId } from "react"

export const UbikArchitecture = () => {
  const filterId = useId()
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 800 500" className="w-full h-auto max-h-[400px]">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Hub Central — Message Broker */}
        <rect x="350" y="210" width="100" height="80" rx="4" className="fill-accent/20 stroke-accent" strokeWidth="2" />
        <text x="400" y="255" textAnchor="middle" className="fill-foreground text-[12px] font-bold">RabbitMQ</text>

        {/* Gateway */}
        <rect x="50" y="210" width="100" height="80" rx="4" className="fill-blue-500/10 stroke-blue-500" strokeWidth="2" />
        <text x="100" y="255" textAnchor="middle" className="fill-foreground text-[12px] font-bold">JWT Gateway</text>

        {/* Servicios */}
        <g>
          <rect x="350" y="50" width="100" height="60" rx="10" className="fill-secondary/50 stroke-border" strokeWidth="1" />
          <text x="400" y="85" textAnchor="middle" className="fill-foreground text-[10px]">User Service</text>

          <rect x="550" y="100" width="100" height="60" rx="10" className="fill-secondary/50 stroke-border" strokeWidth="1" />
          <text x="600" y="135" textAnchor="middle" className="fill-foreground text-[10px]">Booking Service</text>

          <rect x="650" y="220" width="100" height="60" rx="10" className="fill-secondary/50 stroke-border" strokeWidth="1" />
          <text x="700" y="255" textAnchor="middle" className="fill-foreground text-[10px]">Payment Service</text>

          <rect x="550" y="340" width="100" height="60" rx="10" className="fill-secondary/50 stroke-border" strokeWidth="1" />
          <text x="600" y="375" textAnchor="middle" className="fill-foreground text-[10px]">Alert Service</text>

          <rect x="350" y="390" width="100" height="60" rx="10" className="fill-secondary/50 stroke-border" strokeWidth="1" />
          <text x="400" y="425" textAnchor="middle" className="fill-foreground text-[10px]">Owner Service</text>
        </g>

        {/* Base de datos */}
        <path d="M720 380 q 0 -10 30 -10 t 30 10 v 40 q 0 10 -30 10 t -30 -10 v -40" className="fill-purple-500/10 stroke-purple-500" strokeWidth="2" />
        <text x="750" y="440" textAnchor="middle" className="fill-foreground text-[10px]">PostgreSQL</text>

        {/* Conexiones */}
        <path d="M150 250 H 350" className="stroke-accent/40" strokeDasharray="4 4" fill="none" />
        <path d="M400 110 V 210" className="stroke-accent/40" strokeDasharray="4 4" fill="none" />
        <path d="M450 240 L 550 145" className="stroke-accent/40" strokeDasharray="4 4" fill="none" />
        <path d="M450 250 H 650" className="stroke-accent/40" strokeDasharray="4 4" fill="none" />
        <path d="M450 260 L 550 355" className="stroke-accent/40" strokeDasharray="4 4" fill="none" />
        <path d="M400 290 V 390" className="stroke-accent/40" strokeDasharray="4 4" fill="none" />
      </svg>
    </div>
  )
}

export const DevOpsAzureArchitecture = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <svg viewBox="0 0 800 500" className="w-full h-auto max-h-[400px]">
      {/* Acceso externo */}
      <circle cx="100" cy="250" r="40" className="fill-sky-500/10 stroke-sky-500" strokeWidth="2" />
      <text x="100" y="255" textAnchor="middle" className="fill-foreground text-[12px] font-bold">Internet</text>

      {/* Nginx */}
      <rect x="250" y="200" width="100" height="100" rx="8" className="fill-emerald-500/10 stroke-emerald-500" strokeWidth="2" />
      <text x="300" y="255" textAnchor="middle" className="fill-foreground text-[12px] font-bold">Nginx (SSL)</text>

      {/* Límite Azure VM */}
      <rect x="450" y="50" width="300" height="400" rx="16" className="fill-none stroke-blue-400/30" strokeDasharray="8 8" />
      <text x="600" y="30" textAnchor="middle" className="fill-blue-400 text-[12px] font-bold">Azure VM (Ubuntu)</text>

      {/* Docker Compose */}
      <rect x="500" y="100" width="200" height="200" rx="8" className="fill-blue-500/10 stroke-blue-500" strokeWidth="2" />
      <text x="600" y="130" textAnchor="middle" className="fill-foreground text-[12px] font-bold">Docker Compose</text>

      {/* Contenedores */}
      <rect x="520" y="150" width="70" height="30" rx="2" className="fill-blue-500/20 stroke-blue-500/50" />
      <text x="555" y="170" textAnchor="middle" className="fill-foreground text-[8px]">App API</text>

      <rect x="610" y="150" width="70" height="30" rx="2" className="fill-blue-500/20 stroke-blue-500/50" />
      <text x="645" y="170" textAnchor="middle" className="fill-foreground text-[8px]">Auth API</text>

      <rect x="565" y="200" width="70" height="30" rx="2" className="fill-purple-500/20 stroke-purple-500/50" />
      <text x="600" y="220" textAnchor="middle" className="fill-foreground text-[8px]">PostgreSQL</text>

      {/* Observabilidad */}
      <rect x="500" y="330" width="200" height="100" rx="8" className="fill-orange-500/10 stroke-orange-500" strokeWidth="2" />
      <text x="600" y="355" textAnchor="middle" className="fill-foreground text-[12px] font-bold">Prometheus / Grafana</text>

      {/* Conexiones */}
      <path d="M140 250 H 250" className="stroke-sky-500" strokeWidth="2" />
      <path d="M350 250 H 500" className="stroke-emerald-500" strokeWidth="2" />
      <path d="M600 300 V 330" className="stroke-orange-500/40" strokeDasharray="4 4" />
    </svg>
  </div>
)

export const POSPaloCafeArchitecture = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <svg viewBox="0 0 800 500" className="w-full h-auto max-h-[400px]">
      <g transform="translate(400, 250)">
        {/* Capa de datos */}
        <ellipse cx="0" cy="150" rx="200" ry="40" className="fill-slate-500/10 stroke-slate-500" strokeWidth="2" />
        <text x="0" y="155" textAnchor="middle" className="fill-foreground text-[14px] font-bold">SQLite Database</text>

        {/* Capa de lógica */}
        <rect x="-180" y="30" width="360" height="60" rx="8" className="fill-blue-500/10 stroke-blue-500" strokeWidth="2" />
        <text x="0" y="65" textAnchor="middle" className="fill-foreground text-[14px] font-bold">Business Logic (C# .NET)</text>

        {/* Capa de UI */}
        <rect x="-220" y="-120" width="440" height="100" rx="12" className="fill-accent/10 stroke-accent" strokeWidth="2" />
        <text x="0" y="-85" textAnchor="middle" className="fill-foreground text-[16px] font-bold">WinForms UI</text>
        <text x="0" y="-60" textAnchor="middle" className="fill-foreground/60 text-[10px]">Event-Driven Responsive Design</text>

        {/* Conectores */}
        <path d="M0 -20 V 30" className="stroke-foreground/20" strokeWidth="2" />
        <path d="M0 90 V 110" className="stroke-foreground/20" strokeWidth="2" />
      </g>
    </svg>
  </div>
)

export const JWTFlowArchitecture = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <svg viewBox="0 0 800 400" className="w-full h-auto max-h-[300px]">
      {/* Pasos del flujo */}
      <rect x="50" y="150" width="100" height="100" rx="8" className="fill-secondary/50 stroke-border" />
      <text x="100" y="205" textAnchor="middle" className="fill-foreground text-[12px] font-bold">Client</text>

      <circle cx="250" cy="200" r="40" className="fill-amber-500/10 stroke-amber-500" strokeWidth="2" />
      <text x="250" y="205" textAnchor="middle" className="fill-foreground text-[10px] font-bold">JwtFilter</text>

      <rect x="400" y="150" width="140" height="100" rx="8" className="fill-blue-500/10 stroke-blue-500" strokeWidth="2" />
      <text x="470" y="205" textAnchor="middle" className="fill-foreground text-[12px] font-bold">SecurityContext</text>

      <rect x="650" y="150" width="100" height="100" rx="8" className="fill-emerald-500/10 stroke-emerald-500" strokeWidth="2" />
      <text x="700" y="205" textAnchor="middle" className="fill-foreground text-[12px] font-bold">Resource</text>

      {/* Flechas */}
      <path d="M150 200 H 210" className="stroke-foreground/20" strokeWidth="2" />
      <path d="M290 200 H 400" className="stroke-foreground/20" strokeWidth="2" />
      <path d="M540 200 H 650" className="stroke-foreground/20" strokeWidth="2" />

      {/* Etiquetas */}
      <text x="180" y="180" textAnchor="middle" className="fill-amber-500 text-[10px] font-mono italic">Bearer Token</text>
      <text x="345" y="180" textAnchor="middle" className="fill-blue-500 text-[10px] font-mono">Authentication</text>
    </svg>
  </div>
)

export const ArchFallback = () => (
  <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
    Diagrama no disponible
  </div>
)
