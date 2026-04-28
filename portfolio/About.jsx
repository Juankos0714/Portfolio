// About.jsx — Bio, skills, experience

const About = () => {
  const { bio1, bio2, bio3, skills, experience } = window.PORTFOLIO_DATA;

  return (
    <section id="sobre-mi" style={{ background: 'var(--section-bg)', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          {/* Left — Photo + Bio */}
          <div>
            <span style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 40 }}>
              Sobre mí
            </span>

            <div style={{ position: 'relative', marginBottom: 48, display: 'inline-block' }}>
              <img
                src="./uploads/photo_upload-1776883885084.jpg"
                alt="Juan Camilo Rojas"
                style={{ width: 220, height: 270, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: -12, right: -12,
                width: 80, height: 80, background: 'var(--accent)', opacity: 0.15
              }} />
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1,
              letterSpacing: '-0.01em', marginBottom: 28
            }}>
              Construyendo<br/>
              <em style={{ color: 'var(--accent)' }}>con propósito</em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[bio1, bio2, bio3].map((b, i) => (
                <p key={i} style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--muted)', margin: 0 }}>{b}</p>
              ))}
            </div>
          </div>

          {/* Right — Skills + Experience */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>

            {/* Skills */}
            <div>
              <span style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 28 }}>
                Tecnologías
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {Object.entries(skills).map(([cat, items]) => (
                  <div key={cat}>
                    <span style={{
                      fontSize: 11, color: 'var(--accent)', fontFamily: 'var(--mono)',
                      letterSpacing: '0.08em', display: 'block', marginBottom: 10,
                      textTransform: 'uppercase'
                    }}>{cat}</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {items.map(s => (
                        <span key={s} style={{
                          fontSize: 12, padding: '5px 12px', border: '1px solid var(--border)',
                          color: 'var(--muted)', fontFamily: 'var(--mono)', cursor: 'default',
                          transition: 'all 0.25s'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
                        >{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <span style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 28 }}>
                Experiencia
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {experience.map((e, i) => (
                  <div key={e.id} style={{
                    display: 'grid', gridTemplateColumns: '120px 1fr', gap: 20,
                    padding: '20px 0', borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                    borderBottom: '1px solid var(--border)'
                  }}>
                    <span style={{ fontSize: 10, color: 'var(--muted)', fontFamily: 'var(--mono)', paddingTop: 3 }}>{e.period}</span>
                    <div>
                      <h4 style={{ margin: '0 0 3px', fontSize: 14, fontWeight: 500, fontFamily: 'var(--sans)' }}>{e.role}</h4>
                      <span style={{ fontSize: 12, color: 'var(--muted)', display: 'block', marginBottom: 8 }}>{e.company}</span>
                      <p style={{ fontSize: 12, color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>{e.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

window.About = About;
