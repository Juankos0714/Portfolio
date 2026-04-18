// Server Component — sin "use client" innecesario
// Fix ML-2: currentYear se evalúa en tiempo de build (servidor), no en cada render del cliente
// Fix: window.scrollTo extrae a client island a través de un <button> con onClick solo necesita "use client"
// pero como footer.tsx no tiene más lógica client, separamos el único botón interactivo
import { ScrollTopButton } from "@/components/footer-scroll-btn"

const YEAR_ACTUAL = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-8">
          <span className="text-xs text-muted-foreground">© {YEAR_ACTUAL}</span>
          <span className="text-xs text-muted-foreground">Diseñado y desarrollado con atención al detalle</span>
        </div>

        {/* Client Island pequeño: solo el botón que accede a window */}
        <ScrollTopButton />
      </div>
    </footer>
  )
}
