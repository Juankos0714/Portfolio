export function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-6 flex justify-between items-center">
      <span className="text-[11px] text-muted-foreground font-mono">
        Juan Camilo Rojas Ospina © {new Date().getFullYear()}
      </span>
      <span className="text-[11px] text-muted-foreground font-mono">
        Product Engineer · Full-Stack Developer
      </span>
    </footer>
  )
}
