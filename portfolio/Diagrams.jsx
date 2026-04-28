// Diagrams.jsx — Architecture diagrams, redesigned for general audience

const DiagramNode = ({ color, label, sublabel, icon }) => (
  <div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
    minWidth: 90
  }}>
    <div style={{
      width: 52, height: 52, border: `2px solid ${color}`,
      background: color + '18', display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontSize: 20
    }}>{icon}</div>
    <span style={{ fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 1.3 }}>{label}</span>
    {sublabel && <span style={{ fontSize: 9, opacity: 0.55, textAlign: 'center', lineHeight: 1.2, maxWidth: 90 }}>{sublabel}</span>}
  </div>
);

const Arrow = ({ label, vertical }) => (
  <div style={{
    display: 'flex', flexDirection: vertical ? 'column' : 'row',
    alignItems: 'center', gap: 4, flexShrink: 0,
    padding: vertical ? '4px 0' : '0 4px'
  }}>
    {label && <span style={{ fontSize: 9, opacity: 0.5, fontFamily: 'monospace', whiteSpace: 'nowrap' }}>{label}</span>}
    <div style={{
      background: 'var(--border)',
      width: vertical ? 1 : 32, height: vertical ? 24 : 1,
      position: 'relative', flexShrink: 0
    }}>
      <div style={{
        position: 'absolute',
        ...(vertical
          ? { bottom: 0, left: '50%', transform: 'translateX(-50%) translateY(3px)', borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: '6px solid var(--muted)' }
          : { right: 0, top: '50%', transform: 'translateY(-50%) translateX(3px)', borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '6px solid var(--muted)' }
        )
      }} />
    </div>
  </div>
);

const DiagramBadge = ({ label, color }) => (
  <span style={{
    fontSize: 9, padding: '2px 7px', border: `1px solid ${color}`,
    color: color, fontFamily: 'monospace', letterSpacing: '0.04em'
  }}>{label}</span>
);

const DiagramSection = ({ title, color, children, note }) => (
  <div style={{
    border: `1px dashed ${color}40`, padding: '12px 16px', position: 'relative'
  }}>
    <span style={{
      position: 'absolute', top: -9, left: 12, background: 'var(--card)',
      padding: '0 6px', fontSize: 9, color: color, fontFamily: 'monospace',
      letterSpacing: '0.08em', textTransform: 'uppercase'
    }}>{title}</span>
    {children}
    {note && <p style={{ margin: '10px 0 0', fontSize: 10, opacity: 0.5, lineHeight: 1.5 }}>{note}</p>}
  </div>
);

// ─── DIAGRAM 1: Ubik Microservices ─────────────────────────────────────────
const UbikDiagram = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, width: '100%' }}>
    <DiagramSection title="Capa de presentación" color="var(--tech-blue)">
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
        <DiagramNode color="var(--tech-blue)" label="Navegador Web" sublabel="Angular SPA" icon="🖥" />
        <DiagramNode color="var(--tech-blue)" label="App Móvil" sublabel="Futuro cliente" icon="📱" />
      </div>
    </DiagramSection>

    <Arrow vertical label="HTTPS" />

    <DiagramSection title="Seguridad — API Gateway" color="var(--accent)" note="Todas las peticiones pasan por aquí. Verifica tokens y decide a qué servicio enviar la solicitud.">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
        <DiagramNode color="var(--accent)" label="JWT Gateway" sublabel="Autenticación" icon="🔐" />
        <DiagramBadge label="Spring Security" color="var(--accent)" />
      </div>
    </DiagramSection>

    <Arrow vertical label="enruta" />

    <DiagramSection title="7 Microservicios independientes" color="#7c6af7" note="Cada servicio hace una sola cosa. Si uno falla, los demás siguen funcionando.">
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
        {[
          { l: 'Usuarios', s: 'Registro / Login' },
          { l: 'Reservas', s: 'Disponibilidad' },
          { l: 'Pagos', s: 'Stripe' },
          { l: 'Notif.', s: 'Email / Push' },
          { l: 'Propietario', s: 'Panel admin' },
          { l: 'Habitaciones', s: 'Inventario' },
          { l: 'Reportes', s: 'Analytics' },
        ].map(({ l, s }) => (
          <DiagramNode key={l} color="#7c6af7" label={l} sublabel={s} icon="⚙️" />
        ))}
      </div>
    </DiagramSection>

    <Arrow vertical label="eventos async" />

    <DiagramSection title="Bus de mensajes — Comunicación entre servicios" color="#f59e0b" note="Los servicios se hablan entre sí sin depender directamente unos de otros. Si el servicio de email cae, el mensaje queda en cola y se entrega cuando vuelva.">
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
        <DiagramNode color="#f59e0b" label="RabbitMQ" sublabel="Cola de eventos" icon="🐰" />
        <DiagramNode color="#f59e0b" label="Kafka" sublabel="Streams" icon="📨" />
      </div>
    </DiagramSection>

    <Arrow vertical label="persiste" />

    <div style={{ display: 'flex', gap: 16, width: '100%' }}>
      <div style={{ flex: 1 }}>
        <DiagramSection title="Datos" color="#8b5cf6">
          <DiagramNode color="#8b5cf6" label="PostgreSQL" sublabel="Base de datos relacional" icon="🗄" />
        </DiagramSection>
      </div>
      <div style={{ flex: 1 }}>
        <DiagramSection title="Monitoreo" color="#10b981">
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <DiagramNode color="#10b981" label="Prometheus" sublabel="Métricas" icon="📊" />
            <DiagramNode color="#10b981" label="Grafana" sublabel="Dashboard" icon="📈" />
          </div>
        </DiagramSection>
      </div>
    </div>
  </div>
);

// ─── DIAGRAM 2: DevOps / Azure ──────────────────────────────────────────────
const DevOpsDiagram = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, width: '100%' }}>
    <DiagramSection title="Internet" color="var(--tech-blue)">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <DiagramNode color="var(--tech-blue)" label="Usuario" sublabel="Cualquier navegador" icon="🌐" />
      </div>
    </DiagramSection>

    <Arrow vertical label="dominio + SSL" />

    <DiagramSection title="Reverse Proxy" color="var(--accent)" note="Nginx recibe todas las peticiones, aplica el certificado SSL (https) y las reenvía a los contenedores internos.">
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
        <DiagramNode color="var(--accent)" label="Nginx" sublabel="SSL · Balanceo" icon="🔒" />
        <DiagramBadge label="Let's Encrypt" color="var(--accent)" />
      </div>
    </DiagramSection>

    <Arrow vertical label="tráfico interno" />

    <DiagramSection title="Azure VM — Ubuntu Server" color="var(--tech-blue)" note="Servidor virtual en la nube. Todo lo que se ve abajo corre dentro de este servidor.">
      <DiagramSection title="Docker Compose — contenedores aislados" color="#60a5fa" note="Cada aplicación corre en su propio contenedor. Fácil de reiniciar, actualizar o escalar.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          {[
            { l: 'API Backend', s: 'Spring Boot', c: '#60a5fa' },
            { l: 'Frontend', s: 'Angular', c: '#60a5fa' },
            { l: 'RabbitMQ', s: 'Mensajería', c: '#f59e0b' },
            { l: 'PostgreSQL', s: 'Base de datos', c: '#8b5cf6' },
          ].map(({ l, s, c }) => (
            <DiagramNode key={l} color={c} label={l} sublabel={s} icon="📦" />
          ))}
        </div>
      </DiagramSection>
    </DiagramSection>

    <Arrow vertical label="métricas" />

    <DiagramSection title="Observabilidad" color="#10b981">
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <DiagramNode color="#10b981" label="Prometheus" sublabel="Recolecta métricas" icon="📊" />
        <DiagramNode color="#10b981" label="Grafana" sublabel="Visualiza en tiempo real" icon="📈" />
      </div>
    </DiagramSection>
  </div>
);

// ─── DIAGRAM 3: POS Desktop ─────────────────────────────────────────────────
const POSDiagram = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, width: '100%' }}>
    <DiagramSection title="Capa de presentación — Lo que ve el usuario" color="var(--accent)" note="Interfaz de escritorio con formularios, tablas y botones. El cajero interactúa directamente con esta pantalla.">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        {['Módulo de Ventas','Panel de Inventario','Reportes y Cierre','Gestión de Productos'].map(l => (
          <DiagramNode key={l} color="var(--accent)" label={l} sublabel="Windows Forms" icon="🖥" />
        ))}
      </div>
    </DiagramSection>

    <Arrow vertical label="eventos UI" />

    <DiagramSection title="Lógica de negocio — C# .NET 6" color="var(--tech-blue)" note="El cerebro del sistema. Calcula precios, aplica descuentos, valida stock y genera reportes. Esta capa no sabe nada de pantallas ni de base de datos — solo de reglas.">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        {['Motor de Ventas','Control de Stock','Generador de Reportes','Validaciones'].map(l => (
          <DiagramNode key={l} color="var(--tech-blue)" label={l} sublabel="Entity Framework" icon="⚙️" />
        ))}
      </div>
    </DiagramSection>

    <Arrow vertical label="lectura / escritura" />

    <DiagramSection title="Datos — SQLite (archivo local)" color="#8b5cf6" note="La base de datos es un archivo en el mismo computador. Funciona sin internet, arranca en milisegundos y no necesita un servidor externo.">
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
        <DiagramNode color="#8b5cf6" label="Productos" sublabel="Catálogo" icon="🏷" />
        <DiagramNode color="#8b5cf6" label="Ventas" sublabel="Historial" icon="🧾" />
        <DiagramNode color="#8b5cf6" label="Inventario" sublabel="Stock" icon="📦" />
        <DiagramNode color="#8b5cf6" label="Clientes" sublabel="Registro" icon="👥" />
      </div>
    </DiagramSection>
  </div>
);

// ─── DIAGRAM 4: JWT Auth Flow ───────────────────────────────────────────────
const JWTDiagram = () => {
  const steps = [
    { n: '1', color: 'var(--tech-blue)', icon: '👤', label: 'Usuario', sub: 'Envía usuario + contraseña' },
    { n: '2', color: 'var(--accent)', icon: '🔑', label: 'Spring Security', sub: 'Verifica credenciales en BD' },
    { n: '3', color: '#f59e0b', icon: '🎫', label: 'Token JWT', sub: 'Genera un pase digital firmado' },
    { n: '4', color: '#7c6af7', icon: '🛡', label: 'JwtFilter', sub: 'Valida el pase en cada petición' },
    { n: '5', color: '#10b981', icon: '✅', label: 'Recurso Protegido', sub: 'Acceso concedido según rol' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 4 }}>
        {steps.map((s, i) => (
          <React.Fragment key={s.n}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minWidth: 100 }}>
              <div style={{
                width: 28, height: 28, border: `2px solid ${s.color}`,
                background: s.color + '22', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 11, fontWeight: 700,
                fontFamily: 'monospace', color: s.color
              }}>{s.n}</div>
              <div style={{
                width: 56, height: 56, border: `2px solid ${s.color}`,
                background: s.color + '18', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 22
              }}>{s.icon}</div>
              <span style={{ fontSize: 11, fontWeight: 500, textAlign: 'center' }}>{s.label}</span>
              <span style={{ fontSize: 9, opacity: 0.55, textAlign: 'center', maxWidth: 100, lineHeight: 1.3 }}>{s.sub}</span>
            </div>
            {i < steps.length - 1 && (
              <div style={{ width: 24, height: 1, background: 'var(--border)', position: 'relative', flexShrink: 0, marginBottom: 40 }}>
                <div style={{
                  position: 'absolute', right: -1, top: '50%',
                  transform: 'translateY(-50%) translateX(3px)',
                  borderTop: '4px solid transparent', borderBottom: '4px solid transparent',
                  borderLeft: '6px solid var(--muted)'
                }} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <DiagramSection title="El token JWT es como un pase de concierto" color="#f59e0b"
          note="Una vez que inicias sesión, recibes un token firmado digitalmente. En cada petición siguiente presentas ese token — el servidor verifica que sea auténtico (sin consultar la BD) y te da acceso según tu rol. Expira en tiempo configurable y puede revocarse.">
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { l: 'Admin', desc: 'Acceso total', c: '#f59e0b' },
              { l: 'Usuario', desc: 'Acceso limitado', c: '#7c6af7' },
              { l: 'Invitado', desc: 'Solo lectura', c: '#10b981' },
            ].map(({ l, desc, c }) => (
              <DiagramNode key={l} color={c} label={l} sublabel={desc} icon="👤" />
            ))}
          </div>
        </DiagramSection>
      </div>
    </div>
  );
};

window.DIAGRAMS = { UbikDiagram, DevOpsDiagram, POSDiagram, JWTDiagram };
