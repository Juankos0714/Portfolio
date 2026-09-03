import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-mono block mb-6">
          Error
        </span>
        <h1
          className="font-serif font-normal tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.0 }}
        >
          404
        </h1>
        <p className="text-[14px] text-muted-foreground mb-10 max-w-[320px]">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-6 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all duration-300 text-sm tracking-[0.04em]"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
