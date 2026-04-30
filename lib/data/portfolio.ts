export type ArchitectureType = "microservices" | "devops" | "desktop" | "supabase"

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
    category: "Fullstack · Plataforma Web",
    year: "2024–2025",
    description: "Plataforma de reservas para moteles. SPA en Angular con backend Express/Node.js, pagos con Stripe y mapas interactivos con Leaflet.",
    longDescription: "Ubik es una plataforma completa para gestión y reserva de habitaciones. El frontend es una SPA en Angular 17+ con Tailwind CSS y Angular Material. El backend en Express/Node.js expone una API REST que gestiona usuarios, reservas y pagos. Los cobros se procesan de forma segura con Stripe y la ubicación de establecimientos se muestra con Leaflet. Desplegado en Vercel con arquitectura hexagonal simplificada separando roles de cliente y propietario.",
    technologies: ["Angular 17+", "TypeScript", "Express", "Node.js", "Stripe", "Leaflet", "Tailwind CSS", "Vercel"],
    kpis: [
      { label: "Frontend", value: "Angular" },
      { label: "Pagos", value: "Stripe" },
      { label: "Deploy", value: "Vercel" },
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
    description: "Infraestructura backend reactiva con microservicios Spring Boot WebFlux, patrón Saga y despliegue en Azure con Docker Compose y Nginx SSL.",
    longDescription: "Capa de infraestructura de Ubik. Implementa el patrón Saga para garantizar atomicidad en la transacción reserva+pago: si el pago falla, la reserva se revierte automáticamente. Cada servicio corre en su propio contenedor Docker y se comunica a través de RabbitMQ. Desplegado en Azure con Nginx como reverse proxy y certificados SSL gestionados. Métricas en tiempo real con Prometheus y Grafana.",
    technologies: ["Java", "Spring Boot WebFlux", "RabbitMQ", "Docker", "Prometheus", "Grafana", "Nginx", "Azure VM"],
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
    description: "Sistema de punto de venta e inventario para cliente real en Armenia. C# .NET 6 con SQLite para operación 100% offline.",
    longDescription: "Sistema completo de caja y gestión para una cafetería en Armenia, Colombia. Funciona sin conexión a internet con base de datos local SQLite, incluyendo módulos de ventas, inventario, reportes y cierre de caja. Entregado en producción a un cliente real con capacitación y soporte técnico incluidos.",
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
    id: "football-predictor",
    title: "Football Predictor",
    category: "Frontend · Data Science",
    year: "2025",
    description: "Aplicación de predicción de resultados de fútbol europeo mediante modelos matemáticos Elo, Poisson y simulaciones Monte Carlo implementados en TypeScript.",
    longDescription: "Herramienta de análisis estadístico construida con React 18 y TypeScript. Implementa tres modelos de predicción: ratings Elo para medir la fuerza relativa de equipos, distribución de Poisson para calcular goles esperados y simulaciones Monte Carlo para estimar probabilidades de resultado. Los datos y la autenticación corren sobre Supabase (PostgreSQL + Auth con JWT), y los resultados se visualizan con Plotly.js.",
    technologies: ["React 18", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Plotly.js", "Tailwind CSS"],
    kpis: [
      { label: "Modelos", value: "3" },
      { label: "Algoritmos", value: "Elo · Poisson" },
      { label: "Backend", value: "Supabase" },
    ],
    github: "https://github.com/Juankos0714/ejercicioMachineLearning",
    architectureType: "supabase",
  },
]

export const SKILLS: Record<string, string[]> = {
  "Frontend": ["Angular 17+", "React 18", "TypeScript", "Tailwind CSS", "RxJS"],
  "Backend": ["Java", "Spring Boot WebFlux", "Express", "Node.js", "C#", "PostgreSQL"],
  "DevOps & Cloud": ["Docker", "Azure", "Nginx", "Supabase", "GitHub Actions", "Vercel"],
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
    description: "Plataforma web fullstack para gestión de reservas: SPA Angular 17+, backend Express/Node.js, pagos con Stripe y despliegue en Vercel. Backend de microservicios con Spring Boot WebFlux y Docker en Azure.",
  },
  {
    id: "palo-cafe",
    period: "2024",
    role: "Desarrollador de Software",
    company: "Cliente Palo de Café — Armenia",
    description: "Sistema POS e inventario con C# .NET 6 y SQLite. Entrega completa a cliente real con módulos de ventas, productos, reportes y capacitación presencial.",
  },
  {
    id: "sena",
    period: "2024 — 2026",
    role: "Tecnólogo en ADSI",
    company: "SENA",
    description: "Análisis y Desarrollo de Software. Formación práctica en Java, Angular, React, Spring Boot, Docker y despliegue en nube.",
  },
]
