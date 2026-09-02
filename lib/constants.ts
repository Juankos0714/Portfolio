export const EASE = [0.22, 1, 0.36, 1] as const

// String form for use in inline CSS transition properties.
export const EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)"

export const PHOTO_SRC = "/uploads/photo_upload-1776883885084.jpg"

export const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const

export const HERO_TECH_TAGS = [
  "Product Engineering",
  "Full-Stack Development",
  "System Architecture",
  "Cloud & DevOps",
  "AI & Security",
] as const

// Scale factors for cursor parallax layers. Each axis moves at a different
// depth to create a sense of 3D separation between text layers and photo.
export const PARALLAX_SCALES = {
  nameItalic: { x: 0.4, y: 0.3 },
  nameLast: { x: 0.7, y: 0.5 },
  photo: { x: 0.3, y: 0.2 },
} as const

export interface SocialLink {
  label: string
  href: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Juankos0714" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/juan-camilo-rojas-ospina-453793175/" },
  { label: "Email", href: "mailto:juankos0714@gmail.com" },
]

export const PERSON = {
  name: "Juan Camilo Rojas",
  fullName: "Juan Camilo Rojas Ospina",
  role: "Product Engineer · Full-Stack Developer",
  tagline: "Building products. Designing systems. Shipping software.",
  location: "Armenia, Quindío · Colombia",
  email: "juankos0714@gmail.com",
} as const

export type ProjectType = "professional" | "personal" | "academic" | "challenge"

export interface ExperienceEntry {
  id: string
  company: string
  role: string
  period: string
  type: ProjectType
  description: string
  highlights: string[]
  projectLink?: string
  projectLabel?: string
}

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: "ingesoc",
    company: "Ingesoc S.A.S.",
    role: "Software Developer — Product Development",
    period: "2025 — Present",
    type: "professional",
    description: "Development of \"La Holanda\" (VentaDeLotes), a real-estate lot commercialization platform for a rural development in Quimbaya, Quindío.",
    highlights: [
      "React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui",
      "Supabase/PostgreSQL with Auth, Storage, Realtime, RLS",
      "Admin dashboard with KPIs, charts, inventory distribution",
      "Interactive maps with React Leaflet",
      "PWA with offline support",
    ],
    projectLink: "https://github.com/Ingesoc/VentaDeLotes",
    projectLabel: "VentaDeLotes",
  },
  {
    id: "palo-cafe",
    company: "Palo de Café",
    role: "Software Developer — POS System",
    period: "2024",
    type: "professional",
    description: "First client project: a complete POS and inventory system built with C# .NET 6, Windows Forms and SQLite. Delivered with on-site training and technical support. Juan ended the contract on ethical grounds when the client requested to hide financial data — a decision that reflects his professional integrity.",
    highlights: [
      "C# .NET 6, Windows Forms, SQLite, Entity Framework",
      "100% offline operation",
      "Modules: sales, inventory, reports, cash register",
      "On-site deployment and user training",
    ],
    projectLabel: "Palo de Café POS",
  },
  {
    id: "symmetry",
    company: "Symmetry",
    role: "Technical Assessment — 72h Challenge",
    period: "2025",
    type: "challenge",
    description: "Completed a 72-hour technical evaluation: a news article upload app built with Flutter, Clean Architecture, BLoC/Cubit, Firebase Firestore, Firebase Cloud Storage and Firebase Emulator Suite. Delivered with PR description, REPORT.md and a suite of 47 tests.",
    highlights: [
      "Flutter, Clean Architecture, BLoC/Cubit",
      "Firebase Firestore + Cloud Storage + Emulator Suite",
      "47 automated tests",
      "Full PR documentation",
    ],
  },
] as const
