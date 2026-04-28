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
    description: "Plataforma de reservas para moteles con arquitectura de 7 microservicios reactivos, gateway JWT, pagos con Stripe y monitoreo.",
    longDescription: "Ubik es un ecosistema completo para la gestión de reservas en tiempo real. Utiliza microservicios independientes para garantizar escalabilidad: si el servicio de pagos falla, las reservas siguen funcionando. Incluye procesamiento de pagos con Stripe, notificaciones automáticas por email y un panel de monitoreo en tiempo real.",
    technologies: ["Spring Boot WebFlux", "Angular", "PostgreSQL", "Docker", "Stripe", "RabbitMQ", "Redis", "Azure"],
    kpis: [
      { label: "Microservicios", value: "7" },
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
    description: "Infraestructura backend reactiva con patrones Hexagonal y Saga. Despliegue automatizado en Azure con Docker Compose y Nginx SSL.",
    longDescription: "La infraestructura que hace correr Ubik. Implementa el patrón Saga para garantizar que una transacción de reserva+pago sea atómica: si el pago falla, la reserva se revierte automáticamente. Desplegado en Azure con CI/CD, Nginx como reverse proxy y certificados SSL gestionados.",
    technologies: ["Java", "WebFlux", "RabbitMQ", "Kafka", "Docker", "Prometheus", "Nginx", "Azure VM"],
    kpis: [
      { label: "Mensajería", value: "RabbitMQ" },
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
    description: "Sistema de punto de venta e inventario para cliente real. C# .NET 6 con SQLite para operación offline de alta velocidad.",
    longDescription: "Sistema completo de caja y gestión para una cafetería en Armenia. Funciona 100% sin internet (base de datos local SQLite), con módulos de ventas, inventario, reportes y cierre de caja. Entregado en producción a un cliente real con capacitación incluida.",
    technologies: ["C#", ".NET 6", "Windows Forms", "SQLite", "Entity Framework"],
    kpis: [
      { label: "Estado", value: "Producción" },
      { label: "Cliente", value: "Real" },
      { label: "Offline", value: "100%" },
    ],
    architectureType: "desktop",
  },
  {
    number: "04",
    id: "jwt-api",
    title: "JWT Security API",
    category: "Backend · Seguridad",
    year: "2025",
    description: "API de autenticación JWT con Spring Security, roles granulares y ciclo de vida completo del token (emisión, refresco, revocación).",
    longDescription: "Implementación de referencia para seguridad en APIs REST. Maneja el ciclo completo: login → token JWT → refresco → logout con revocación. Incluye sistema de roles (admin, usuario, invitado) y protección granular de endpoints. Base reutilizable para cualquier proyecto.",
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "Maven", "PostgreSQL"],
    kpis: [
      { label: "Auth", value: "JWT" },
      { label: "Roles", value: "RBAC" },
      { label: "Ready", value: "OAuth2" },
    ],
    github: "https://github.com/Juankos0714/JWT-api",
    architectureType: "jwt",
  },
]

export const SKILLS: Record<string, string[]> = {
  "Frontend": ["Angular", "React", "TypeScript", "Tailwind CSS", "RxJS"],
  "Backend": ["Java", "Spring Boot WebFlux", "Node.js", "C#", "PostgreSQL", "Redis"],
  "DevOps & Cloud": ["Docker", "Azure", "Nginx", "GitHub Actions", "Prometheus", "Grafana"],
}

export const SKILL_ENTRIES = Object.entries(SKILLS)

export interface ExperienceItem {
  id: string
  period: string
  role: string
  company: string
  description: string
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "ubik",
    period: "2024 — Presente",
    role: "Desarrollador Fullstack",
    company: "Proyecto Ubik (Portfolio)",
    description: "Arquitectura de microservicios reactivos, integración de pagos con Stripe, despliegue en Azure y stack completo Angular + Spring Boot WebFlux.",
  },
  {
    id: "palo-cafe",
    period: "2024",
    role: "Desarrollador de Software",
    company: "Cliente Palo de Café",
    description: "Sistema POS e inventario con C# .NET 6 y SQLite. Entrega completa a cliente real con módulos de ventas, productos y reportes.",
  },
  {
    id: "sena",
    period: "2024 — 2026",
    role: "Tecnólogo en ADSI",
    company: "SENA",
    description: "Formación en Análisis y Desarrollo de Software. Proyectos prácticos con Java, Angular, Spring Boot y DevOps.",
  },
]
