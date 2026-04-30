export const EASE = [0.22, 1, 0.36, 1] as const

// String form for use in inline CSS transition properties.
export const EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)"

export const PHOTO_SRC = "/uploads/photo_upload-1776883885084.jpg"

export const NAV_LINKS = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
] as const

export const HERO_TECH_TAGS = [
  "Java · Spring Boot",
  "Angular · React",
  "TypeScript",
  "Docker · Azure",
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
  role: "Desarrollador Fullstack",
  location: "Armenia, Quindío · Colombia",
  email: "juankos0714@gmail.com",
} as const
