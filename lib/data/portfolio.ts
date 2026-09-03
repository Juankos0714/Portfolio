export type ArchitectureType = "microservices" | "devops" | "desktop" | "supabase" | "security" | "realtime"

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
    category: "Product Engineering · Reactive Microservices",
    year: "2024–2025",
    description: "Distributed hotel & motel booking platform with reactive microservices, real-time dashboards and production-grade observability.",
    longDescription: "A full-booking platform evolved from a university project to production. The frontend is an Angular 17+ SPA with Tailwind CSS, Leaflet maps and RxJS. The backend is a reactive microservices architecture: 7 independent Spring Boot WebFlux services with Project Reactor and R2DBC, communicating through Kafka and RabbitMQ. Deployed on Azure VM with Docker Compose, Nginx reverse proxy with SSL, and systemd for auto-restart. Includes CQRS + Event Sourcing, Saga Pattern for distributed transactions, Prometheus/Grafana monitoring, and an AI assistant powered by Ollama/Llama 3. Production work included timezone fixes (Colombia/Bogota), soft delete, password reset flow, real-time dashboard via SSE, role-based routing, and Angular bundle optimization.",
    technologies: ["Spring Boot WebFlux", "Angular 17+", "Kafka", "RabbitMQ", "PostgreSQL", "Redis", "Docker", "Azure VM", "Nginx", "Prometheus", "Grafana"],
    kpis: [
      { label: "Services", value: "7 microservices" },
      { label: "Messaging", value: "Kafka + RabbitMQ" },
      { label: "Deploy", value: "Azure + Docker" },
    ],
    github: "https://github.com/Juankos0714/Ubik-App",
    architectureType: "microservices",
  },
  {
    number: "02",
    id: "stargo",
    title: "StarGo",
    category: "Product Engineering · Real-Time Delivery Platform",
    year: "2025",
    description: "End-to-end delivery platform with real-time order tracking, role-based workflows, dynamic/historical pricing engine, automated testing and production monitoring.",
    longDescription: "A complete delivery platform for Armenia with differentiated roles (client, admin, delivery driver). Built with SvelteKit 5 (runes) and Supabase (Auth, PostgreSQL/RLS, Realtime). Features a zone-based pricing matrix derived from real messenger tariffs, configurable surcharges, and historical commission freezing via RPC. Real-time order state updates across all three dashboards without page reload. Packaged as native mobile apps via Capacitor (Android APK + iOS TestFlight). Testing stack: Vitest (90%+ coverage), Playwright, RLS test suites, k6 performance tests, Lighthouse audits. Monitoring: Sentry, CI-integrated security audit.",
    technologies: ["SvelteKit 5", "Supabase", "PostgreSQL", "Capacitor", "Vitest", "Playwright", "k6", "Sentry", "PWA"],
    kpis: [
      { label: "Roles", value: "3 (client/admin/driver)" },
      { label: "Testing", value: "Vitest + Playwright + k6" },
      { label: "Mobile", value: "Capacitor (APK + iOS)" },
    ],
    github: "https://github.com/Juankos0714/Stargo",
    architectureType: "realtime",
  },
  {
    number: "03",
    id: "ventadelotes",
    title: "VentaDeLotes",
    category: "Professional Work · Ingesoc S.A.S.",
    year: "2025",
    description: "Real-estate lot commercialization platform for La Holanda (Quimbaya, Quindio). React 19 + Supabase with interactive maps, admin dashboard and 257+ unit tests.",
    longDescription: "Portal digital de inversion y vitrina inmobiliaria for a rural development project. Built with React 19, TypeScript, Vite 8, Tailwind CSS v4 and Supabase (Auth, PostgreSQL, RLS, RPC). Features interactive Leaflet maps, a full admin dashboard with KPIs (lot inventory, lead tracking, 14-day visit analytics), Cloudinary media management, PWA support, and role-based access via RPC (is_admin, has_backstage_access). CI pipeline (GitHub Actions) runs 257 unit tests (Vitest), 146 e2e tests (Playwright), React Doctor 100/100, and security audit on every push. Developed professionally for Ingesoc S.A.S.",
    technologies: ["React 19", "TypeScript", "Vite 8", "Tailwind CSS v4", "Supabase", "Leaflet", "Playwright", "Cloudinary", "PWA"],
    kpis: [
      { label: "Tests", value: "257 unit + 146 e2e" },
      { label: "React Doctor", value: "100/100" },
      { label: "Client", value: "Ingesoc S.A.S." },
    ],
    github: "https://github.com/Ingesoc/VentaDeLotes",
    architectureType: "supabase",
  },
  {
    number: "04",
    id: "nullbot",
    title: "NullBot",
    category: "Open Source · Defensive Security",
    year: "2025",
    description: "Open-source botnet detection tool for Windows. C++20 detection engine, .NET 8 WPF UI, YARA rules, DGA/C2 detection and encrypted quarantine.",
    longDescription: "An open-source defensive security tool that detects and blocks botnet activity on Windows. The detection engine is written in C++20 (CMake + Ninja) with YARA rules, PE analysis, Shannon entropy scoring, DGA domain detection, C2 beaconing analysis, DNS blacklists and IP reputation checks. The UI is a .NET 8 WPF application following MVVM. Features encrypted quarantine (Windows CNG, AES-256-GCM, SHA-256), an auto-updater (Python), and a WiX MSI installer. Testing: 51 tests across CTest and pytest. Licensed under GPL-3.0.",
    technologies: ["C++20", ".NET 8", "WPF", "SQLite", "YARA", "CMake", "Python", "WiX"],
    kpis: [
      { label: "Engine", value: "C++20" },
      { label: "Detection", value: "YARA + DGA + C2" },
      { label: "Tests", value: "51 (CTest + pytest)" },
    ],
    github: "https://github.com/Juankos0714/NullBot",
    architectureType: "security",
  },
  {
    number: "05",
    id: "football-predictor",
    title: "Football Predictor",
    category: "Data Science · Mathematical Modeling",
    year: "2025",
    description: "Football match prediction engine using Elo ratings, Poisson distribution, Monte Carlo simulations and interactive Plotly visualizations.",
    longDescription: "A mathematical analysis engine for predicting European football match outcomes. Implements four prediction models: Elo rating system with home advantage factors, bivariate Poisson PMFs for exact score predictions, Monte Carlo simulations (10,000 iterations) for probability convergence, and expected goals (xG) based on shots and possession metrics. Built with React 18, TypeScript, Vite, Tailwind CSS and Plotly.js for interactive visualizations (probability charts, score distribution heatmaps, simulation histograms). Backend data and authentication via Supabase (PostgreSQL + RLS). Brier Score target < 0.2 for calibrated predictions.",
    technologies: ["React 18", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Plotly.js", "Tailwind CSS", "Vitest"],
    kpis: [
      { label: "Models", value: "4 (Elo/Poisson/MC/xG)" },
      { label: "Simulations", value: "10,000 iterations" },
      { label: "Leagues", value: "5 European" },
    ],
    github: "https://github.com/Juankos0714/ejercicioMachineLearning",
    architectureType: "supabase",
  },
]

export const SKILLS: Record<string, string[]> = {
  "Frontend": ["Angular 17+", "React 19", "Next.js", "SvelteKit 5", "Flutter", "TypeScript", "Tailwind CSS"],
  "Backend": ["Java", "Spring Boot WebFlux", "FastAPI", "Node.js", "Express", "C#", ".NET 8"],
  "Data & AI": ["PostgreSQL", "Redis", "Supabase", "Firebase", "PyTorch", "Ollama"],
  "DevOps & Cloud": ["Docker", "Azure", "Nginx", "GitHub Actions", "Vercel", "Prometheus", "Grafana"],
  "Testing": ["Vitest", "Playwright", "pytest", "CTest", "k6", "Lighthouse"],
  "Security": ["YARA", "JWT", "RLS", "AES-256", "C2 Detection"],
}

export const SKILL_ENTRIES = Object.entries(SKILLS)
