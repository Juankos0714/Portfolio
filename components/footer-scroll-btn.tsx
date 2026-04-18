"use client"
// Client island mínimo: solo el botón que requiere acceso a window.scrollTo
// Patrón: extraer el mínimo de lógica de browser a "use client" y mantener el resto en Server Components

export function ScrollTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
      aria-label="Volver al inicio de la página"
    >
      <span>Volver arriba</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12L12 5L19 12" />
      </svg>
    </button>
  )
}
