// Hero.jsx — Interactive hero with photo + cursor parallax effect

const Hero = ({ dark, toggleDark }) => {
  const { name, role, tagline, email, github, linkedin, available } = window.PORTFOLIO_DATA;
  const [mouse, setMouse] = React.useState({ x: 0.5, y: 0.5 });
  const [loaded, setLoaded] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const onMove = (e) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const tx = (mouse.x - 0.5) * 12;
  const ty = (mouse.y - 0.5) * 8;

  return (
    <section ref={ref} style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      background: 'var(--bg)', position: 'relative', overflow: 'hidden'
    }}>
      {/* Cursor glow */}
      <div style={{
        position: 'absolute', pointerEvents: 'none', zIndex: 0,
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        left: `${mouse.x * 100}%`, top: `${mouse.y * 100}%`,
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.8s cubic-bezier(0.22,1,0.36,1), top 0.8s cubic-bezier(0.22,1,0.36,1)'
      }} />

      <div style={{ maxWidth: 1200, width: '100%', margin: '0 auto', padding: '32px 48px', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
        {/* Nav */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(10px)',
            transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1)'
          }}>
            <span style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
              Portfolio 2026
            </span>
          </div>

          <nav style={{
            display: 'flex', gap: 40, alignItems: 'center',
            opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(10px)',
            transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s'
          }}>
            {['trabajo','sobre-mi','contacto'].map(id => (
              <a key={id} href={`#${id}`} style={{
                fontSize: 13, letterSpacing: '0.05em', textDecoration: 'none',
                color: 'var(--muted)', fontFamily: 'var(--sans)',
                transition: 'color 0.3s'
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >
                {id === 'sobre-mi' ? 'Sobre mí' : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <button onClick={toggleDark} style={{
              background: 'none', border: '1px solid var(--border)', padding: '6px 14px',
              cursor: 'pointer', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.06em',
              fontFamily: 'var(--mono)', transition: 'all 0.3s'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
            >
              {dark ? 'LIGHT' : 'DARK'}
            </button>
          </nav>
        </header>

        {/* Main content */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingTop: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 64, width: '100%', alignItems: 'center' }}>
            {/* Left — Text */}
            <div>
              <div style={{
                opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(20px)',
                transition: 'all 1s cubic-bezier(0.22,1,0.36,1) 0.2s'
              }}>
                <p style={{ fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)', marginBottom: 24 }}>
                  Desarrollador Fullstack
                </p>
              </div>

              <h1 style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 'clamp(3.5rem, 9vw, 8rem)', lineHeight: 1.0,
                letterSpacing: '-0.02em', margin: '0 0 32px',
                opacity: loaded ? 1 : 0,
                transition: 'opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s'
              }}>
                <span style={{ display: 'block' }}>Juan</span>
                <span style={{ display: 'block', transform: `translate(${tx * 0.4}px, ${ty * 0.3}px)`, transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)', color: 'var(--accent)', fontStyle: 'italic' }}>
                  Camilo
                </span>
                <span style={{ display: 'block', transform: `translate(${tx * 0.7}px, ${ty * 0.5}px)`, transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s' }}>
                  Rojas
                </span>
              </h1>

              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 48,
                opacity: loaded ? 1 : 0,
                transition: 'opacity 1s cubic-bezier(0.22,1,0.36,1) 0.6s'
              }}>
                {['Java · Spring Boot WebFlux','Angular','Microservicios','Azure · Docker'].map(t => (
                  <span key={t} style={{
                    fontSize: 11, padding: '4px 12px', border: '1px solid var(--border)',
                    color: 'var(--muted)', fontFamily: 'var(--mono)', letterSpacing: '0.06em'
                  }}>{t}</span>
                ))}
              </div>

              <div style={{
                opacity: loaded ? 1 : 0,
                transition: 'opacity 1s cubic-bezier(0.22,1,0.36,1) 0.8s'
              }}>
                <a href="#trabajo" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 16,
                  textDecoration: 'none', color: 'var(--fg)', fontFamily: 'var(--sans)',
                  fontSize: 14, letterSpacing: '0.04em', padding: '14px 28px',
                  border: '1px solid var(--fg)', transition: 'all 0.3s', background: 'transparent'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--fg)'; e.currentTarget.style.color = 'var(--bg)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--fg)'; }}
                >
                  Ver proyectos
                  <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
                </a>
              </div>
            </div>

            {/* Right — Photo */}
            <div style={{
              opacity: loaded ? 1 : 0, transform: loaded ? `translate(${tx * 0.3}px, ${ty * 0.2}px)` : 'translateX(40px)',
              transition: 'opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.4s, transform 0.8s cubic-bezier(0.22,1,0.36,1)'
            }}>
              <div style={{ position: 'relative', width: 280 }}>
                <div style={{
                  position: 'absolute', inset: -8, border: '1px solid var(--border)',
                  transform: 'rotate(2deg)'
                }} />
                <img
                  src="./uploads/photo_upload-1776883885084.jpg"
                  alt="Juan Camilo Rojas"
                  style={{
                    width: 280, height: 340, objectFit: 'cover', objectPosition: 'center top',
                    display: 'block', filter: 'grayscale(20%)',
                    transition: 'filter 0.4s'
                  }}
                  onMouseEnter={e => { e.target.style.filter = 'grayscale(0%)'; e.target.style.animation = 'photoRock 0.6s ease-in-out infinite'; }}
                  onMouseLeave={e => { e.target.style.filter = 'grayscale(20%)'; e.target.style.animation = 'none'; }}
                />
                {available && (
                  <div style={{
                    position: 'absolute', bottom: -16, left: 16,
                    background: 'var(--bg)', border: '1px solid var(--border)',
                    padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8
                  }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', display: 'block', animation: 'pulse 2s infinite' }} />
                    <span style={{ fontSize: 11, fontFamily: 'var(--mono)', color: 'var(--muted)', letterSpacing: '0.08em' }}>DISPONIBLE</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          paddingTop: 32, borderTop: '1px solid var(--border)',
          opacity: loaded ? 1 : 0, transition: 'opacity 1s 1s'
        }}>
          <span style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>Armenia, Quindío · Colombia</span>
          <div style={{ display: 'flex', gap: 28 }}>
            {[['GitHub', github], ['LinkedIn', linkedin], ['Email', `mailto:${email}`]].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                fontSize: 12, color: 'var(--muted)', textDecoration: 'none',
                letterSpacing: '0.06em', fontFamily: 'var(--sans)', display: 'flex', alignItems: 'center', gap: 6,
                transition: 'color 0.3s'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                {label}
              </a>
            ))}
          </div>
        </footer>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </section>
  );
};

window.Hero = Hero;
