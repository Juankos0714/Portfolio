// Projects.jsx — Expandable case studies with architecture diagrams

const diagLabels = {
  microservices: 'Arquitectura de Microservicios',
  devops: 'Infraestructura & DevOps',
  desktop: 'Arquitectura de Escritorio (3 capas)',
  jwt: 'Flujo de Autenticación JWT'
};

const ProjectRow = ({ project, index }) => {
  const [open, setOpen] = React.useState(false);
  const { UbikDiagram, DevOpsDiagram, POSDiagram, JWTDiagram } = window.DIAGRAMS;
  const diagramMap = { microservices: UbikDiagram, devops: DevOpsDiagram, desktop: POSDiagram, jwt: JWTDiagram };
  const Diagram = diagramMap[project.architectureType];

  return (
    <article style={{ borderTop: '1px solid var(--border)' }}>
      {/* Header row — always visible */}
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'grid', gridTemplateColumns: '48px 1fr auto 80px',
          gap: 24, alignItems: 'center', padding: '28px 0', cursor: 'pointer',
          transition: 'opacity 0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        <span style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>{project.number}</span>

        <div>
          <h3 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', margin: '0 0 4px',
            letterSpacing: '-0.01em', lineHeight: 1.1,
            color: open ? 'var(--accent)' : 'var(--fg)',
            transition: 'color 0.3s'
          }}>{project.title}</h3>
          <span style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.06em', fontFamily: 'var(--mono)' }}>
            {project.category}
          </span>
        </div>

        <p style={{
          fontSize: 13, color: 'var(--muted)', maxWidth: 340, lineHeight: 1.6,
          display: window.innerWidth < 768 ? 'none' : 'block'
        }}>{project.description}</p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
          <span style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>{project.year}</span>
          <div style={{
            width: 32, height: 32, border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s',
            borderColor: open ? 'var(--accent)' : 'var(--border)',
            color: open ? 'var(--accent)' : 'var(--muted)'
          }}>
            <span style={{
              display: 'block', transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
              transform: open ? 'rotate(45deg)' : 'none', fontSize: 18, lineHeight: 1
            }}>+</span>
          </div>
        </div>
      </div>

      {/* Expanded case study */}
      <div style={{
        overflow: 'hidden', maxHeight: open ? 1600 : 0,
        transition: 'max-height 0.7s cubic-bezier(0.22,1,0.36,1)',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
          padding: '0 0 48px', borderTop: '1px solid var(--border)', paddingTop: 40
        }}>
          {/* Left — Description + KPIs + techs + link */}
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', marginBottom: 36, maxWidth: 480 }}>
              {project.longDescription}
            </p>

            {/* KPIs */}
            <div style={{ display: 'flex', gap: 24, marginBottom: 36, paddingBottom: 36, borderBottom: '1px solid var(--border)' }}>
              {project.kpis.map(k => (
                <div key={k.label}>
                  <div style={{ fontSize: 22, fontFamily: 'var(--serif)', fontWeight: 400, letterSpacing: '-0.01em', marginBottom: 4 }}>{k.value}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--mono)' }}>{k.label}</div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div style={{ marginBottom: 28 }}>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 12 }}>Tecnologías</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {project.technologies.map(t => (
                  <span key={t} style={{
                    fontSize: 11, padding: '4px 10px', border: '1px solid var(--border)',
                    fontFamily: 'var(--mono)', color: 'var(--muted)', letterSpacing: '0.04em',
                    transition: 'all 0.2s', cursor: 'default'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
                  >{t}</span>
                ))}
              </div>
            </div>

            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none',
                fontSize: 12, color: 'var(--fg)', fontFamily: 'var(--sans)', letterSpacing: '0.05em',
                padding: '10px 20px', border: '1px solid var(--border)', transition: 'all 0.3s'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--fg)'; }}
              >
                Ver en GitHub →
              </a>
            )}
          </div>

          {/* Right — Architecture diagram */}
          <div>
            <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 16 }}>
              Diagrama — {diagLabels[project.architectureType]}
            </span>
            <div style={{
              border: '1px solid var(--border)', padding: 24, background: 'var(--card)',
              fontSize: 12, fontFamily: 'var(--sans)'
            }}>
              {Diagram && <Diagram />}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const { projects } = window.PORTFOLIO_DATA;
  return (
    <section id="trabajo" style={{ padding: '96px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: 64 }}>
        <span style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
          Proyectos Seleccionados
        </span>
      </div>
      <div>
        {projects.map((p, i) => <ProjectRow key={p.id} project={p} index={i} />)}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 32, display: 'flex', justifyContent: 'flex-end' }}>
          <a href="https://github.com/Juankos0714" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            fontSize: 13, color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em',
            fontFamily: 'var(--sans)', transition: 'color 0.3s'
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            Ver todos los proyectos en GitHub
            <span style={{ width: 32, height: 1, background: 'currentColor', display: 'block', transition: 'width 0.3s' }} />
          </a>
        </div>
      </div>
    </section>
  );
};

window.Projects = Projects;
