// Tipos compartidos del portfolio
export type ArchitectureType = "microservices" | "devops" | "desktop" | "jwt"

export interface ProjectKPI {
  label: string
  value: string
}

export interface Project {
  number: string
  id: string
  title: string
  category: string
  year: string
  description: string
  longDescription: string
  technologies: string[]
  kpis: ProjectKPI[]
  github?: string
  architectureType: ArchitectureType
}

export const PROJECTS: Project[] = [
  {
    number: "01",
    id: "ubik",
    title: "Ubik",
    category: "Fullstack · Microservicios",
    year: "2024–2025",
    description:
      "Plataforma de reservas para moteles con arquitectura de 7 microservicios reactivos, gateway JWT, pagos con Stripe y monitoreo.",
    longDescription:
      "Ubik es un ecosistema completo diseñado para la gestión de reservas en tiempo real. Utiliza una arquitectura orientada a microservicios para garantizar escalabilidad y desacoplamiento. El sistema maneja desde el inventario de habitaciones hasta el procesamiento de pagos seguro y notificaciones push.",
    technologies: [
      "Spring Boot WebFlux",
      "Angular",
      "PostgreSQL",
      "Docker",
      "Stripe",
      "RabbitMQ",
      "Redis",
      "Azure",
    ],
    kpis: [
      { label: "Servicios", value: "7+" },
      { label: "Arquitectura", value: "Reactiva" },
      { label: "Uptime", value: "99.9%" },
    ],
    github: "https://github.com/Juankos0714/Ubik-App",
    architectureType: "microservices",
  },
  {
    number: "02",
    id: "ubik-ms",
    title: "Ubik Backend",
    category: "Backend · DevOps",
    year: "2025",
    description:
      "Infraestructura backend reactiva con patrones Hexagonal y Saga. Despliegue en Azure con Docker Compose y Nginx.",
    longDescription:
      "Este proyecto se centra en la robustez del backend, implementando patrones avanzados como CQRS y Saga para transacciones distribuidas. La infraestructura está automatizada en Azure, utilizando Nginx como Reverse Proxy y SSL gestionado para máxima seguridad.",
    technologies: [
      "Java",
      "WebFlux",
      "RabbitMQ",
      "Kafka",
      "Docker",
      "Prometheus",
      "Nginx",
      "Azure VM",
    ],
    kpis: [
      { label: "Mensajería", value: "RabbitMQ/Kafka" },
      { label: "Escalabilidad", value: "Horizontal" },
      { label: "Monitoreo", value: "Grafana" },
    ],
    github: "https://github.com/Juankos0714/Ubik-Microservices",
    architectureType: "devops",
  },
  {
    number: "03",
    id: "palo-cafe",
    title: "Palo de Café POS",
    category: "Desktop · Fullstack",
    year: "2024",
    description:
      "Sistema de punto de venta e inventario para cliente real, utilizando C# .NET y SQLite para persistencia local de alta velocidad.",
    longDescription:
      "Un sistema POS completo desarrollado para optimizar la operación de una cafetería. Incluye módulos de inventario, facturación, reportes de ventas y gestión de clientes. Diseñado con una interfaz intuitiva para reducir el tiempo de capacitación del personal.",
    technologies: ["C#", ".NET 6", "Windows Forms", "SQLite", "Entity Framework"],
    kpis: [
      { label: "Persistencia", value: "SQLite" },
      { label: "UI", value: "WinForms" },
      { label: "Estado", value: "Producción" },
    ],
    architectureType: "desktop",
  },
  {
    number: "04",
    id: "jwt-api",
    title: "JWT Security API",
    category: "Backend · Seguridad",
    year: "2025",
    description:
      "Implementación de referencia para seguridad JWT en Spring Boot, con filtrado personalizado y gestión de estados.",
    longDescription:
      "Una API especializada en la implementación de estándares de seguridad modernos. Gestiona el ciclo de vida completo de tokens JWT, incluyendo revocación, refresco y autorización basada en roles (RBAC) con una configuración de seguridad granular.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Maven",
      "PostgreSQL",
    ],
    kpis: [
      { label: "Auth", value: "JWT" },
      { label: "Standard", value: "OAuth2 Ready" },
      { label: "Seguridad", value: "Spring Sec" },
    ],
    github: "https://github.com/Juankos0714/JWT-api",
    architectureType: "jwt",
  },
]

// Fix SRP/OCP: lista de habilidades extraída a datos, pre-computada fuera del componente
export const SKILLS = {
  frontend: ["Angular", "React", "TypeScript", "Tailwind CSS", "RxJS", "Framer Motion"],
  backend: ["Java", "Spring Boot WebFlux", "Node.js", "Python", "C#", "PostgreSQL"],
  tools: ["Docker", "Git", "GitHub Actions", "Azure", "Vercel", "Postman"],
} as const

// Fix O(n) → O(1): pre-computar Object.entries una sola vez al nivel de módulo
export const SKILL_ENTRIES = Object.entries(SKILLS) as [
  keyof typeof SKILLS,
  readonly string[],
][]

export const EXPERIENCE = [
  {
    id: "ubik-portfolio",
    period: "2024 — Presente",
    role: "Desarrollador Fullstack",
    company: "Proyecto Ubik (Portfolio)",
    description:
      "Arquitectura de microservicios reactivos, integración de pagos con Stripe, despliegue en Azure y stack completo Angular + Spring Boot WebFlux.",
  },
  {
    id: "palo-cafe-client",
    period: "2024",
    role: "Desarrollador de Software",
    company: "Cliente Palo de Café",
    description:
      "Sistema POS e inventario con C# .NET 6 y SQLite. Entrega completa a cliente real con módulos de ventas, productos y reportes.",
  },
  {
    id: "sena-adsi",
    period: "2024 — 2026",
    role: "Tecnólogo en ADSI",
    company: "SENA",
    description:
      "Formación en Análisis y Desarrollo de Software. Proyectos prácticos con Java, Angular, Spring Boot y DevOps.",
  },
]
