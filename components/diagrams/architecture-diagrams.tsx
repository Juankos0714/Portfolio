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
  rose: "#f43f5e",
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
      <DiagramSection title="Presentation Layer" color={COLORS.blue}>
        <div className="flex justify-center gap-6">
          <DiagramNode color={COLORS.blue} label="Web Browser" sublabel="Angular 17+ SPA" icon="🖥" />
          <DiagramNode color={COLORS.blue} label="Mobile App" sublabel="Future client" icon="📱" />
        </div>
      </DiagramSection>
      <Arrow vertical label="HTTPS" />
      <DiagramSection
        title="Security — API Gateway"
        color={COLORS.accent}
        note="All requests pass through here. Verifies JWT tokens and routes to the correct service."
      >
        <div className="flex justify-center items-center gap-3">
          <DiagramNode color={COLORS.accent} label="Spring Cloud Gateway" sublabel="JWT + RBAC" icon="🔐" />
          <DiagramBadge label="Netflix Eureka" color={COLORS.accent} />
        </div>
      </DiagramSection>
      <Arrow vertical label="routes" />
      <DiagramSection
        title="7 Reactive Microservices"
        color={COLORS.purple}
        note="Each service handles one concern. If one fails, the others keep running."
      >
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { l: "Users", s: "Auth / JWT" },
            { l: "Reservations", s: "Availability" },
            { l: "Payments", s: "Stripe" },
            { l: "Notifications", s: "Email / Push" },
            { l: "Owner", s: "Admin panel" },
            { l: "Rooms", s: "Inventory" },
            { l: "Analytics", s: "Metrics" },
          ].map(({ l, s }) => (
            <DiagramNode key={l} color={COLORS.purple} label={l} sublabel={s} icon="⚙️" />
          ))}
        </div>
      </DiagramSection>
      <Arrow vertical label="async events" />
      <DiagramSection
        title="Event Bus"
        color={COLORS.amber}
        note="Services communicate asynchronously via Kafka and RabbitMQ."
      >
        <div className="flex justify-center gap-5">
          <DiagramNode color={COLORS.amber} label="Kafka" sublabel="Event streaming" icon="📨" />
          <DiagramNode color={COLORS.amber} label="RabbitMQ" sublabel="Message queue" icon="🐰" />
        </div>
      </DiagramSection>
      <Arrow vertical label="persists" />
      <div className="flex gap-4 w-full">
        <div className="flex-1">
          <DiagramSection title="Data" color={COLORS.violet}>
            <DiagramNode color={COLORS.violet} label="PostgreSQL" sublabel="R2DBC reactive" icon="🗄" />
          </DiagramSection>
        </div>
        <div className="flex-1">
          <DiagramSection title="Observability" color={COLORS.emerald}>
            <div className="flex gap-3 justify-center">
              <DiagramNode color={COLORS.emerald} label="Prometheus" sublabel="Metrics" icon="📊" />
              <DiagramNode color={COLORS.emerald} label="Grafana" sublabel="Dashboards" icon="📈" />
            </div>
          </DiagramSection>
        </div>
      </div>
    </div>
  )
}

// ─── DIAGRAM 2: StarGo Real-Time Platform ────────────────────────────────────
export function StarGoArchitecture() {
  return (
    <div className="flex flex-col items-center gap-0 w-full text-foreground">
      <DiagramSection title="Client Apps" color={COLORS.blue}>
        <div className="flex justify-center gap-4">
          <DiagramNode color={COLORS.blue} label="PWA (Web)" sublabel="SvelteKit 5" icon="🌐" />
          <DiagramNode color={COLORS.blue} label="Android" sublabel="Capacitor APK" icon="🤖" />
          <DiagramNode color={COLORS.blue} label="iOS" sublabel="TestFlight" icon="🍎" />
        </div>
      </DiagramSection>
      <Arrow vertical label="HTTPS" />
      <DiagramSection
        title="Role-Based Access"
        color={COLORS.accent}
        note="Three differentiated roles: client, admin, delivery driver. Each sees their own dashboard."
      >
        <div className="flex justify-center gap-4">
          <DiagramNode color={COLORS.accent} label="Client" sublabel="/nuevo-pedido" icon="👤" />
          <DiagramNode color={COLORS.accent} label="Admin" sublabel="/admin/*" icon="👑" />
          <DiagramNode color={COLORS.accent} label="Driver" sublabel="/domiciliario" icon="🛵" />
        </div>
      </DiagramSection>
      <Arrow vertical label="realtime" />
      <DiagramSection
        title="Supabase — BaaS"
        color={COLORS.emerald}
        note="Auth, PostgreSQL with RLS, Realtime subscriptions, Edge Functions, and RPCs for business logic."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <DiagramNode color={COLORS.emerald} label="Auth" sublabel="Email + cookies" icon="🔑" />
          <DiagramNode color={COLORS.emerald} label="PostgreSQL" sublabel="RLS policies" icon="🗄" />
          <DiagramNode color={COLORS.emerald} label="Realtime" sublabel="Live updates" icon="⚡" />
          <DiagramNode color={COLORS.emerald} label="Edge Functions" sublabel="Tarifa calc" icon="⚙️" />
        </div>
      </DiagramSection>
      <Arrow vertical label="state machine" />
      <DiagramSection
        title="Order State Machine"
        color={COLORS.purple}
        note="Validated in DB via RPC (transicionar_pedido). Each state change is broadcast in realtime to all panels."
      >
        <div className="flex justify-center gap-2 flex-wrap">
          {["pending", "assigned", "accepted", "picked_up", "in_transit", "delivered"].map((s) => (
            <DiagramBadge key={s} label={s} color={COLORS.purple} />
          ))}
        </div>
      </DiagramSection>
      <Arrow vertical label="push notifications" />
      <DiagramSection title="Notifications" color={COLORS.amber}>
        <div className="flex justify-center gap-3">
          <DiagramNode color={COLORS.amber} label="Web Push" sublabel="VAPID" icon="🔔" />
          <DiagramNode color={COLORS.amber} label="FCM" sublabel="Android" icon="📬" />
          <DiagramNode color={COLORS.amber} label="APNs" sublabel="iOS" icon="📮" />
        </div>
      </DiagramSection>
    </div>
  )
}

// ─── DIAGRAM 3: VentaDeLotes (React + Supabase) ─────────────────────────────
export function VentaDeLotesArchitecture() {
  return (
    <div className="flex flex-col items-center gap-0 w-full text-foreground">
      <DiagramSection title="Presentation — React 19 + TypeScript" color={COLORS.blue}>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { l: "Home", s: "Hero + Carousel", i: "🏠" },
            { l: "Lots Catalog", s: "Filter + Map", i: "🗺" },
            { l: "Admin Dashboard", s: "KPIs + CRUD", i: "📊" },
            { l: "PWA", s: "Offline support", i: "📱" },
          ].map(({ l, s, i }) => (
            <DiagramNode key={l} color={COLORS.blue} label={l} sublabel={s} icon={i} />
          ))}
        </div>
      </DiagramSection>
      <Arrow vertical label="React Router v8" />
      <DiagramSection
        title="Forms & Validation"
        color={COLORS.accent}
        note="React Hook Form + Zod for type-safe form validation. Cloudinary for image uploads."
      >
        <div className="flex justify-center gap-3">
          <DiagramNode color={COLORS.accent} label="React Hook Form" sublabel="Zod schemas" icon="📝" />
          <DiagramNode color={COLORS.accent} label="Cloudinary" sublabel="CDN + upload" icon="☁️" />
        </div>
      </DiagramSection>
      <Arrow vertical label="Supabase client" />
      <DiagramSection
        title="Supabase — Backend as a Service"
        color={COLORS.emerald}
        note="Auth, PostgreSQL, RLS, and RPCs. Admin access verified via has_backstage_access() RPC."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <DiagramNode color={COLORS.emerald} label="Auth" sublabel="JWT + role check" icon="🔑" />
          <DiagramNode color={COLORS.emerald} label="PostgreSQL" sublabel="lots, leads, views" icon="🗄" />
          <DiagramNode color={COLORS.emerald} label="RLS" sublabel="Row Level Security" icon="🛡" />
          <DiagramNode color={COLORS.emerald} label="RPCs" sublabel="is_admin, track_view" icon="⚙️" />
        </div>
      </DiagramSection>
      <Arrow vertical label="CI pipeline" />
      <DiagramSection title="Quality — GitHub Actions" color={COLORS.violet}>
        <div className="flex justify-center gap-3">
          <DiagramNode color={COLORS.violet} label="Vitest" sublabel="257 unit tests" icon="✅" />
          <DiagramNode color={COLORS.violet} label="Playwright" sublabel="146 e2e tests" icon="🧪" />
          <DiagramNode color={COLORS.violet} label="React Doctor" sublabel="100/100" icon="🩺" />
        </div>
      </DiagramSection>
    </div>
  )
}

// ─── DIAGRAM 4: NullBot Security ─────────────────────────────────────────────
export function NullBotArchitecture() {
  return (
    <div className="flex flex-col items-center gap-0 w-full text-foreground">
      <DiagramSection title="UI — .NET 8 WPF (MVVM)" color={COLORS.blue}>
        <div className="flex justify-center gap-4">
          <DiagramNode color={COLORS.blue} label="Dashboard" sublabel="Status overview" icon="🖥" />
          <DiagramNode color={COLORS.blue} label="Scanner" sublabel="File analysis" icon="🔍" />
          <DiagramNode color={COLORS.blue} label="Network Monitor" sublabel="C2 detection" icon="📡" />
          <DiagramNode color={COLORS.blue} label="Quarantine" sublabel="AES-256 encrypted" icon="🔒" />
        </div>
      </DiagramSection>
      <Arrow vertical label="stdout stream" />
      <DiagramSection
        title="Detection Engine — C++20"
        color={COLORS.accent}
        note="High-performance scanning engine built with CMake + Ninja. Communicates with the UI via stdout streaming."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <DiagramNode color={COLORS.accent} label="File Scanner" sublabel="YARA + PE analysis" icon="⚙️" />
          <DiagramNode color={COLORS.accent} label="C2 Detector" sublabel="Beaconing + DGA" icon="🤖" />
          <DiagramNode color={COLORS.accent} label="Entropy Analysis" sublabel="Shannon scoring" icon="📊" />
        </div>
      </DiagramSection>
      <Arrow vertical label="reads" />
      <DiagramSection title="Signature Database — SQLite" color={COLORS.violet}>
        <div className="flex justify-center gap-3">
          <DiagramNode color={COLORS.violet} label="Hash DB" sublabel="SHA-256 lookups" icon="🗄" />
          <DiagramNode color={COLORS.violet} label="Domain BL" sublabel="URLhaus + OTX" icon="🌐" />
          <DiagramNode color={COLORS.violet} label="IP Reputation" sublabel="Feodo Tracker" icon="🛡" />
        </div>
      </DiagramSection>
      <Arrow vertical label="auto-update" />
      <DiagramSection title="Feed Updater — Python" color={COLORS.amber}>
        <div className="flex justify-center gap-3">
          <DiagramNode color={COLORS.amber} label="Abuse.ch" sublabel="URLhaus" icon="📥" />
          <DiagramNode color={COLORS.amber} label="OTX" sublabel="AlienVault" icon="📡" />
          <DiagramNode color={COLORS.amber} label="EmergingThreats" sublabel="Free feeds" icon="🔄" />
        </div>
      </DiagramSection>
    </div>
  )
}

// ─── DIAGRAM 5: JWT Auth Flow ─────────────────────────────────────────────────
interface JWTStep {
  n: string
  color: DiagramColor
  icon: string
  label: string
  sub: string
}

const JWT_STEPS: JWTStep[] = [
  { n: "1", color: COLORS.blue, icon: "👤", label: "User", sub: "Sends credentials" },
  { n: "2", color: COLORS.accent, icon: "🔑", label: "Spring Security", sub: "Verifies in DB" },
  { n: "3", color: COLORS.amber, icon: "🎫", label: "JWT Token", sub: "Signed digital pass" },
  { n: "4", color: COLORS.purple, icon: "🛡", label: "JwtFilter", sub: "Validates each request" },
  { n: "5", color: COLORS.emerald, icon: "✅", label: "Protected Resource", sub: "Access by role" },
]

const JWT_ROLES = [
  { l: "Admin", desc: "Full access", c: COLORS.amber },
  { l: "User", desc: "Limited access", c: COLORS.purple },
  { l: "Guest", desc: "Read only", c: COLORS.emerald },
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
          title="JWT Token — like a concert wristband"
          color={COLORS.amber}
          note="Once you log in, you receive a signed token. On each subsequent request, you present that token — the server verifies it (without hitting the DB) and grants access based on your role. Configurable expiry, revocable."
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

// ─── DIAGRAM 6: Football Predictor (React + Supabase) ────────────────────────
export function ReactSupabaseArchitecture() {
  return (
    <div className="flex flex-col items-center gap-0 w-full text-foreground">
      <DiagramSection title="Presentation — React 18 + TypeScript" color={COLORS.blue}>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { l: "Dashboard", s: "Predictions", i: "📊" },
            { l: "Charts", s: "Plotly.js", i: "📈" },
            { l: "Auth UI", s: "Login / Register", i: "🔐" },
          ].map(({ l, s, i }) => (
            <DiagramNode key={l} color={COLORS.blue} label={l} sublabel={s} icon={i} />
          ))}
        </div>
      </DiagramSection>
      <Arrow vertical label="TypeScript" />
      <DiagramSection
        title="Algorithms — client-side execution"
        color={COLORS.accent}
        note="Models run directly in the browser. Zero network latency for statistical calculations."
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { l: "Elo Rating", s: "Relative strength", i: "⚡" },
            { l: "Poisson", s: "Expected goals", i: "🎯" },
            { l: "Monte Carlo", s: "10K simulations", i: "🎲" },
            { l: "xG Model", s: "Expected goals", i: "⚽" },
          ].map(({ l, s, i }) => (
            <DiagramNode key={l} color={COLORS.accent} label={l} sublabel={s} icon={i} />
          ))}
        </div>
      </DiagramSection>
      <Arrow vertical label="API calls" />
      <DiagramSection
        title="Supabase — Backend as a Service"
        color={COLORS.emerald}
        note="PostgreSQL, JWT auth, and Row Level Security — no custom backend needed."
      >
        <div className="flex gap-4 justify-center">
          {[
            { l: "Auth", s: "JWT tokens", i: "🔑", c: COLORS.amber },
            { l: "PostgreSQL", s: "teams · matches", i: "🗄", c: COLORS.violet },
            { l: "RLS", s: "Row Level Security", i: "🛡", c: COLORS.emerald },
          ].map(({ l, s, i, c }) => (
            <DiagramNode key={l} color={c} label={l} sublabel={s} icon={i} />
          ))}
        </div>
      </DiagramSection>
    </div>
  )
}

export function ArchFallback() {
  return (
    <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
      Diagram not available
    </div>
  )
}
