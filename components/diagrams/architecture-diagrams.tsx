"use client"

// Named color palette for diagrams. CSS variables are used where the token
// already exists in the design system; hex values fill the gaps.
const COLORS = {
  blue: "var(--tech-blue)",
  accent: "var(--accent)",
  purple: "#7c6af7",
  amber: "#f59e0b",
  violet: "#8b5cf6",
  emerald: "#10b981",
  sky: "#60a5fa",
} as const

type DiagramColor = (typeof COLORS)[keyof typeof COLORS]

interface NodeProps {
  color: DiagramColor
  label: string
  sublabel?: string
  icon: string
}

function DiagramNode({ color, label, sublabel, icon }: NodeProps) {
  return (
    <div className="flex flex-col items-center gap-1.5" style={{ minWidth: 90 }}>
      <div
        className="w-12 h-12 flex items-center justify-center text-xl"
        style={{ border: `2px solid ${color}`, background: `${color}18` }}
      >
        {icon}
      </div>
      <span className="text-[11px] font-medium text-center leading-tight">{label}</span>
      {sublabel && (
        <span className="text-[9px] text-center leading-tight opacity-55 max-w-[90px]">{sublabel}</span>
      )}
    </div>
  )
}

function Arrow({ label, vertical = false }: { label?: string; vertical?: boolean }) {
  return (
    <div
      className={`flex ${vertical ? "flex-col" : "flex-row"} items-center gap-1 flex-shrink-0 ${vertical ? "py-1" : "px-1"}`}
    >
      {label && (
        <span className="text-[9px] opacity-50 font-mono whitespace-nowrap">{label}</span>
      )}
      <div
        className="relative flex-shrink-0"
        style={{
          background: "var(--border)",
          width: vertical ? 1 : 32,
          height: vertical ? 24 : 1,
        }}
      >
        {vertical ? (
          <div
            className="absolute left-1/2 bottom-0"
            style={{
              transform: "translateX(-50%) translateY(3px)",
              borderLeft: "4px solid transparent",
              borderRight: "4px solid transparent",
              borderTop: "6px solid var(--muted-foreground)",
            }}
          />
        ) : (
          <div
            className="absolute right-0 top-1/2"
            style={{
              transform: "translateY(-50%) translateX(3px)",
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
              borderLeft: "6px solid var(--muted-foreground)",
            }}
          />
        )}
      </div>
    </div>
  )
}

function DiagramBadge({ label, color }: { label: string; color: DiagramColor }) {
  return (
    <span
      className="text-[9px] px-1.5 py-0.5 font-mono tracking-[0.04em]"
      style={{ border: `1px solid ${color}`, color }}
    >
      {label}
    </span>
  )
}

interface SectionProps {
  title: string
  color: DiagramColor
  note?: string
  children: React.ReactNode
}

function DiagramSection({ title, color, note, children }: SectionProps) {
  return (
    <div className="relative p-3 w-full" style={{ border: `1px dashed ${color}40` }}>
      <span
        className="absolute -top-2 left-3 px-1.5 text-[9px] font-mono tracking-[0.08em] uppercase bg-card"
        style={{ color }}
      >
        {title}
      </span>
      {children}
      {note && (
        <p className="mt-2.5 text-[10px] opacity-50 leading-relaxed">{note}</p>
      )}
    </div>
  )
}

// ─── DIAGRAM 1: Ubik Microservices ────────────────────────────────────────────
export function UbikArchitecture() {
  return (
    <div className="flex flex-col items-center gap-0 w-full text-foreground">
      <DiagramSection title="Capa de presentación" color={COLORS.blue}>
        <div className="flex justify-center gap-6">
          <DiagramNode color={COLORS.blue} label="Navegador Web" sublabel="Angular SPA" icon="🖥" />
          <DiagramNode color={COLORS.blue} label="App Móvil" sublabel="Futuro cliente" icon="📱" />
        </div>
      </DiagramSection>
      <Arrow vertical label="HTTPS" />
      <DiagramSection
        title="Seguridad — API Gateway"
        color={COLORS.accent}
        note="Todas las peticiones pasan por aquí. Verifica tokens y decide a qué servicio enviar la solicitud."
      >
        <div className="flex justify-center items-center gap-3">
          <DiagramNode color={COLORS.accent} label="JWT Gateway" sublabel="Autenticación" icon="🔐" />
          <DiagramBadge label="Spring Security" color={COLORS.accent} />
        </div>
      </DiagramSection>
      <Arrow vertical label="enruta" />
      <DiagramSection
        title="7 Microservicios independientes"
        color={COLORS.purple}
        note="Cada servicio hace una sola cosa. Si uno falla, los demás siguen funcionando."
      >
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { l: "Usuarios", s: "Registro / Login" },
            { l: "Reservas", s: "Disponibilidad" },
            { l: "Pagos", s: "Stripe" },
            { l: "Notif.", s: "Email / Push" },
            { l: "Propietario", s: "Panel admin" },
            { l: "Habitaciones", s: "Inventario" },
            { l: "Reportes", s: "Analytics" },
          ].map(({ l, s }) => (
            <DiagramNode key={l} color={COLORS.purple} label={l} sublabel={s} icon="⚙️" />
          ))}
        </div>
      </DiagramSection>
      <Arrow vertical label="eventos async" />
      <DiagramSection
        title="Bus de mensajes"
        color={COLORS.amber}
        note="Los servicios se comunican sin depender directamente unos de otros."
      >
        <div className="flex justify-center gap-5">
          <DiagramNode color={COLORS.amber} label="RabbitMQ" sublabel="Cola de eventos" icon="🐰" />
          <DiagramNode color={COLORS.amber} label="Kafka" sublabel="Streams" icon="📨" />
        </div>
      </DiagramSection>
      <Arrow vertical label="persiste" />
      <div className="flex gap-4 w-full">
        <div className="flex-1">
          <DiagramSection title="Datos" color={COLORS.violet}>
            <DiagramNode color={COLORS.violet} label="PostgreSQL" sublabel="Base de datos" icon="🗄" />
          </DiagramSection>
        </div>
        <div className="flex-1">
          <DiagramSection title="Monitoreo" color={COLORS.emerald}>
            <div className="flex gap-3 justify-center">
              <DiagramNode color={COLORS.emerald} label="Prometheus" sublabel="Métricas" icon="📊" />
              <DiagramNode color={COLORS.emerald} label="Grafana" sublabel="Dashboard" icon="📈" />
            </div>
          </DiagramSection>
        </div>
      </div>
    </div>
  )
}

// ─── DIAGRAM 2: DevOps / Azure ────────────────────────────────────────────────
export function DevOpsAzureArchitecture() {
  return (
    <div className="flex flex-col items-center gap-0 w-full text-foreground">
      <DiagramSection title="Internet" color={COLORS.blue}>
        <div className="flex justify-center">
          <DiagramNode color={COLORS.blue} label="Usuario" sublabel="Cualquier navegador" icon="🌐" />
        </div>
      </DiagramSection>
      <Arrow vertical label="dominio + SSL" />
      <DiagramSection
        title="Reverse Proxy"
        color={COLORS.accent}
        note="Nginx recibe todas las peticiones, aplica el certificado SSL y las reenvía a los contenedores internos."
      >
        <div className="flex justify-center items-center gap-3">
          <DiagramNode color={COLORS.accent} label="Nginx" sublabel="SSL · Balanceo" icon="🔒" />
          <DiagramBadge label="Let's Encrypt" color={COLORS.accent} />
        </div>
      </DiagramSection>
      <Arrow vertical label="tráfico interno" />
      <DiagramSection
        title="Azure VM — Ubuntu Server"
        color={COLORS.blue}
        note="Servidor virtual en la nube. Todo corre dentro de este servidor."
      >
        <DiagramSection
          title="Docker Compose — contenedores aislados"
          color={COLORS.sky}
          note="Cada aplicación corre en su propio contenedor. Fácil de reiniciar, actualizar o escalar."
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { l: "API Backend", s: "Spring Boot", c: COLORS.sky },
              { l: "Frontend", s: "Angular", c: COLORS.sky },
              { l: "RabbitMQ", s: "Mensajería", c: COLORS.amber },
              { l: "PostgreSQL", s: "Base de datos", c: COLORS.violet },
            ].map(({ l, s, c }) => (
              <DiagramNode key={l} color={c} label={l} sublabel={s} icon="📦" />
            ))}
          </div>
        </DiagramSection>
      </DiagramSection>
      <Arrow vertical label="métricas" />
      <DiagramSection title="Observabilidad" color={COLORS.emerald}>
        <div className="flex gap-3 justify-center">
          <DiagramNode color={COLORS.emerald} label="Prometheus" sublabel="Recolecta métricas" icon="📊" />
          <DiagramNode color={COLORS.emerald} label="Grafana" sublabel="Visualiza en tiempo real" icon="📈" />
        </div>
      </DiagramSection>
    </div>
  )
}

// ─── DIAGRAM 3: POS Desktop ───────────────────────────────────────────────────
export function POSPaloCafeArchitecture() {
  return (
    <div className="flex flex-col items-center gap-0 w-full text-foreground">
      <DiagramSection
        title="Capa de presentación — Lo que ve el usuario"
        color={COLORS.accent}
        note="Interfaz de escritorio con formularios, tablas y botones. El cajero interactúa directamente con esta pantalla."
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {["Módulo de Ventas", "Panel de Inventario", "Reportes y Cierre", "Gestión de Productos"].map((l) => (
            <DiagramNode key={l} color={COLORS.accent} label={l} sublabel="Windows Forms" icon="🖥" />
          ))}
        </div>
      </DiagramSection>
      <Arrow vertical label="eventos UI" />
      <DiagramSection
        title="Lógica de negocio — C# .NET 6"
        color={COLORS.blue}
        note="El cerebro del sistema. Calcula precios, aplica descuentos, valida stock y genera reportes. Esta capa solo conoce reglas, no pantallas ni base de datos."
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {["Motor de Ventas", "Control de Stock", "Generador de Reportes", "Validaciones"].map((l) => (
            <DiagramNode key={l} color={COLORS.blue} label={l} sublabel="Entity Framework" icon="⚙️" />
          ))}
        </div>
      </DiagramSection>
      <Arrow vertical label="lectura / escritura" />
      <DiagramSection
        title="Datos — SQLite (archivo local)"
        color={COLORS.violet}
        note="La base de datos es un archivo en el mismo computador. Funciona sin internet, arranca en milisegundos y no necesita un servidor externo."
      >
        <div className="flex gap-4 justify-center">
          {[
            { l: "Productos", s: "Catálogo", i: "🏷" },
            { l: "Ventas", s: "Historial", i: "🧾" },
            { l: "Inventario", s: "Stock", i: "📦" },
            { l: "Clientes", s: "Registro", i: "👥" },
          ].map(({ l, s, i }) => (
            <DiagramNode key={l} color={COLORS.violet} label={l} sublabel={s} icon={i} />
          ))}
        </div>
      </DiagramSection>
    </div>
  )
}

// ─── DIAGRAM 4: JWT Auth Flow ─────────────────────────────────────────────────
interface JWTStep {
  n: string
  color: DiagramColor
  icon: string
  label: string
  sub: string
}

const JWT_STEPS: JWTStep[] = [
  { n: "1", color: COLORS.blue, icon: "👤", label: "Usuario", sub: "Envía usuario + contraseña" },
  { n: "2", color: COLORS.accent, icon: "🔑", label: "Spring Security", sub: "Verifica credenciales en BD" },
  { n: "3", color: COLORS.amber, icon: "🎫", label: "Token JWT", sub: "Genera un pase digital firmado" },
  { n: "4", color: COLORS.purple, icon: "🛡", label: "JwtFilter", sub: "Valida el pase en cada petición" },
  { n: "5", color: COLORS.emerald, icon: "✅", label: "Recurso Protegido", sub: "Acceso concedido según rol" },
]

const JWT_ROLES = [
  { l: "Admin", desc: "Acceso total", c: COLORS.amber },
  { l: "Usuario", desc: "Acceso limitado", c: COLORS.purple },
  { l: "Invitado", desc: "Solo lectura", c: COLORS.emerald },
] as const

export function JWTFlowArchitecture() {
  return (
    <div className="flex flex-col gap-0 w-full text-foreground">
      <div className="flex items-center justify-center flex-wrap gap-1">
        {JWT_STEPS.map((step, i) => (
          <div key={step.n} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5" style={{ minWidth: 100 }}>
              <div
                className="w-7 h-7 flex items-center justify-center text-[11px] font-bold font-mono"
                style={{ border: `2px solid ${step.color}`, background: `${step.color}22`, color: step.color }}
              >
                {step.n}
              </div>
              <div
                className="w-14 h-14 flex items-center justify-center text-2xl"
                style={{ border: `2px solid ${step.color}`, background: `${step.color}18` }}
              >
                {step.icon}
              </div>
              <span className="text-[11px] font-medium text-center">{step.label}</span>
              <span className="text-[9px] opacity-55 text-center max-w-[100px] leading-tight">{step.sub}</span>
            </div>
            {i < JWT_STEPS.length - 1 && (
              <div className="relative w-5 h-px bg-border flex-shrink-0 mb-10">
                <div
                  className="absolute right-0 top-1/2"
                  style={{
                    transform: "translateY(-50%) translateX(3px)",
                    borderTop: "4px solid transparent",
                    borderBottom: "4px solid transparent",
                    borderLeft: "6px solid var(--muted-foreground)",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5">
        <DiagramSection
          title="El token JWT es como un pase de concierto"
          color={COLORS.amber}
          note="Una vez que inicias sesión, recibes un token firmado digitalmente. En cada petición siguiente presentas ese token — el servidor verifica que sea auténtico (sin consultar la BD) y te da acceso según tu rol. Expira en tiempo configurable y puede revocarse."
        >
          <div className="flex gap-5 justify-center flex-wrap">
            {JWT_ROLES.map(({ l, desc, c }) => (
              <DiagramNode key={l} color={c} label={l} sublabel={desc} icon="👤" />
            ))}
          </div>
        </DiagramSection>
      </div>
    </div>
  )
}

export function ArchFallback() {
  return (
    <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
      Diagrama no disponible
    </div>
  )
}
