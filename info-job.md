# Resumen Ejecutivo

El perfil de GitHub **Juankos0714** (Juan Camilo Rojas) muestra una amplia gama de proyectos personales y académicos. Destacan aplicaciones web modernas (React, Angular), proyectos backend (Java/Spring), y ejercicios de algoritmos y pruebas. En general, usa **TypeScript/React/Angular** para frontend, **Java/Spring Boot** o **Node.js** para backend, y emplea herramientas como **Vite, Tailwind, Docker, Supabase, GitHub Actions**. Muchos repositorios son ejercicios de clase (por ejemplo, ordenamiento burbuja, cronómetro, CSS) o demos (tests con Playwright). Las tecnologías recurrentes incluyen: Angular 17+, React 18, TypeScript, Tailwind CSS, Spring Boot (Java 17), Docker y Supabase【19†L346-L354】【89†L347-L355】. 

- **Arquitectura**: Por ejemplo, el proyecto **Ubik-App** es una SPA en Angular 17+ con arquitectura hexagonal y API propia en Express/Node【19†L346-L354】. El “FrontEnd Angarita” es una app Angular desplegada en Vercel【78†L333-L336】【81†L351-L359】; su backend **BackendAngarita** es un servicio Spring Boot (Java 17) empaquetado en Docker. El proyecto de predicción “Football Match Predictor” usa React+TypeScript en frontend y **Supabase** (PostgreSQL + Auth) en backend【62†L351-L359】【67†L445-L454】. 

- **Construcción/CI**: Se usan Angular CLI (ng build, ng test), Vite (npm run dev/build) y Maven para Java. Varios repos (Ubik, Angarita) usan archivos de configuración para despliegue (por ejemplo `vercel.json`, Dockerfile) pero **no se encontraron workflows de GitHub Actions** específicos. Varios proyectos incluyen configuraciones de **ESLint, Prettier** y **Vitest/Karma** para linters y tests unitarios【19†L346-L354】【78†L311-L320】. 

- **Calidad y seguridad**: En general hay poco código malicioso, aunque el repo **BubbleSort** incluye un archivo `numeros.txt` de ~98 MB en el repositorio, lo cual es un error de práctica (debería ignorarse o usar LFS)【59†L213-L215】. No se hallaron secretos (las claves de Stripe en Ubik son públicas de test) ni dependencias vulnerables obvias. La presencia de linters y tests varía; Ubik y Angular usan linters, mientras proyectos pequeños (ordenamiento, cronómetro) carecen de pruebas formales. 

- **Licencias y docs**: La mayoría de repos con código significativo (Ubik, pruebas Playwright, ejercicio ML) incluyen **MIT License** o similar【30†L353-L359】【64†L594-L602】. Los READMEs principales (Ubik, EjercicioMachineLearning) están completos y explican propósito, tecnologías y uso; otros repos tienen READMEs mínimos o faltantes. No hay guías de contribución formales en los proyectos. 

En conjunto, el perfil demuestra habilidades en desarrollo web full-stack (Angular/React + Java/Spring), pruebas automatizadas (Playwright), despliegue (Docker, Vercel), y buenas prácticas (uso de ESLint, TypeScript). Los proyectos más representativos (p.ej. Ubik-App, Football Predictor, Angarita) reflejan gestión de proyectos complejos y capacidad de integración con servicios externos (Stripe, Supabase, AWS)【19†L346-L354】【62†L351-L359】.

## Repositorios Destacados

A continuación se detallan los repositorios más relevantes. Para cada uno se incluye descripción, tecnologías principales, estructura general, dependencias, y otros aspectos técnicos.

### Ubik-App

- **Descripción**: Aplicación web para gestión y reservas de moteles (plataforma Ubik). Es una SPA frontend en Angular【19†L346-L354】, acompañada de un backend en Express/Node (código `server.js`, APIs en `routes`).  
- **Lenguajes/Tecnologías**: Principalmente **TypeScript (Angular)** (55% TS, 45% HTML)【16†L297-L300】. Usa Tailwind CSS, Angular Material, Leaflet, Stripe para pagos【19†L346-L354】. Dev tools: Angular CLI, Git, Prettier, ESLint.  
- **Arquitectura**: Aplicación monolítica Angular con rutas y componentes (p.ej. páginas login/registro, dashboard de usuario). Según el README incluye arquitectura hexagonal simplificada (distinción entre “cliente” y “propietario”)【19†L346-L354】. Se despliega estático en Vercel (`vercel.json`).  
- **Estructura/Archivos clave**: `src/app/` contiene componentes (p. ej. `habitaciones`, `perfil`), servicios (p. ej. `api.service.ts`), y configuraciones (filtro de roles, guardias de ruta). Tiene `app.module.ts`, `app-routing.module.ts`. En backend (`server.js`) se usa Express con rutas `api/datos`, `api/reservas`.  
- **Dependencias**: En **package.json** aparece Angular 20.3, Express 4.x, Stripe v12, TailwindCSS 3.2, Leaflet 1.9, etc. (Ver tabla resumen en el README)【19†L346-L354】. No se ven dependencias inseguras.  
- **Construcción y despliegue**: Usa Angular CLI. Scripts típicos: `ng serve`, `ng build --prod`. No se detecta CI; solo `vercel.json` indica despliegue automático en Vercel. No hay Docker.  
- **Pruebas y calidad**: Incluye ESLint para TS y configura Prettier. El README sugiere comandos `ng test` (Karma) aunque no se evidencian tests específicos en el repositorio.  
- **Issues/PR**: Ninguna issue o PR activa.  
- **Licencia**: MIT【30†L353-L359】.  
- **Aspectos de interés**: Ejemplo de aplicación Angular real con pagos Stripe (usando clave pública de prueba)【20†L329-L337】. Documento README detallado con objetivos, arquitectura y tecnologías. Por ejemplo, en el README se expone: 

  > “**Tecnologías:** Angular 17+, NodeJS, TailwindCSS, Express, Stripe, Leaflet...”【19†L346-L354】

  Este proyecto puede destacarse en un portafolio para evidenciar experiencia full-stack web moderna.

### EjercicioMachineLearning (Football Match Predictor)

- **Descripción**: Aplicación web educativa de predicción de resultados de fútbol europeo mediante modelos matemáticos (Elo, Poisson, Monte Carlo)【62†L351-L359】. Frontend en **React+TypeScript**, backend mediante **Supabase** (base de datos PostgreSQL + autenticación).  
- **Lenguajes/Tecnologías**: TypeScript (97.8%) y SQL (PLpgSQL, 1.9%)【64†L655-L659】. Usa React 18, Vite, TailwindCSS, Plotly.js para gráficos【62†L391-L399】. En backend utiliza Supabase (no código fuente propio, configuración en archivos `supabase/` y `.env.example`).  
- **Arquitectura**: SPA React que consume APIs de Supabase. El README explica uso de tablas (equipos, partidos, predicciones) y algoritmos personalizados de Elo/Poisson implementados en TypeScript【62†L351-L359】【62†L445-L453】. Soporta autenticación de usuarios con Supabase. Ejemplo: diagrama mermaid simplificado:

  ```mermaid
  flowchart LR
      U(Usuario) -->|navega| R(React + TS + Tailwind)
      R -->|llama APIs| S(Supabase (PostgreSQL + Auth))
      S --> DB(PostgreSQL)
  ```

- **Estructura/Archivos clave**: 
  - `src/`: componentes React (login, dashboard, gráficos), funciones de cálculo (Elo, Poisson, simulación). 
  - Archivos de configuración: `vite.config.ts`, `tsconfig.json`, ESLint config. 
  - `.env.example` con variables VITE_SUPABASE_URL y anon key. 
- **Dependencias**: En **package.json** se incluye `@supabase/supabase-js`, `@tensorflow/tfjs` (para cálculos numéricos), `ml-cart`, `ml-random-forest` (librerías de ML), `react-plotly.js`, `serve`【67†L445-L454】. DevDependencies: ESLint, Vitest, TailwindCSS, etc.  
- **Construcción y despliegue**: Usualmente `npm install`, `npm run dev` (Vite). El repositorio incluye `render.yaml`, sugiriendo despliegue en Render.com. No hay GitHub Actions visibles.  
- **Pruebas y calidad**: Se incluye configuración de **Vitest** (vitest.config.ts) para tests unitarios. También ESLint y Prettier. README es muy completo, con ejemplos de ecuaciones matemáticas y predicciones generadas【62†L445-L453】【64†L594-L602】.  
- **Licencia**: MIT【64†L594-L602】.  
- **Seguridad**: No hay claves sensibles en el repositorio (sólo `.env.example`). Dependencias actualizadas.  
- **Relevancia**: Muestra habilidades en matemáticas aplicadas, simulaciones numéricas y visualización de datos. Destaca uso de React avanzado y servicios backend (Supabase). Texto del README: 

  > “**Stack:** React + TypeScript + Tailwind CSS + Plotly.js; Backend: Supabase (PostgreSQL)”【62†L391-L399】, mostrando un entorno moderno full-stack.

### FrontendAngarita / BackendAngarita

Se analizan juntos como parte del mismo proyecto “Angarita” (p.ej. un sistema de gestión simulado).

- **BackendAngarita** (Java Spring Boot):  
  - **Descripción**: Servicio REST en Java (Spring Boot) usado junto al FrontendAngarita. Incluye Dockerfile multi-stage para construir y correr el JAR【49†L1-L9】【50†L1-L9】.  
  - **Lenguajes/Tecnologías**: Java 17 (100% del código)【48†L297-L300】, Spring Boot, JWT para autenticación (`io.jsonwebtoken` en pom.xml【41†L19-L27】).  
  - **Estructura**: Código fuente en `src/main/java` (controladores, servicios, repositorios), recursos en `src/main/resources`. Maven (`pom.xml`) con dependencias Spring Boot, Lombok, JWT【41†L12-L20】【41†L25-L33】. Dockerfile (multi-stage): usa imagen `maven:3.9.9-eclipse-temurin-17-alpine` para build, luego `eclipse-temurin:17-jre` para runtime【50†L1-L9】.  
  - **CI/Despliegue**: No hay workflows ni Docker Compose visibles (aunque `.dockerignore` incluye `dockerfile`, `docker-compose.yml`【46†L280-L291】). Se puede construir con Maven (`mvn package`).  
  - **Licencia**: No especificada.  
  - **Aspectos**: Proyecto académico sin README; se infiere por dependencias el uso de JWT. Buen ejemplo de despliegue Docker multietapa.

- **FrontendAngarita** (Angular):  
  - **Descripción**: Aplicación Angular 20 (CLI 20.1.5) actuando como frontend del proyecto【77†L7-L15】【78†L275-L283】. Parece ser una “plataforma” simple (README indica solo “# Frontend”).  
  - **Lenguajes/Tecnologías**: TypeScript (60.7%), HTML (38.8%)【78†L379-L384】. Angular 20, RXJS, JWT-Decode (manejo de tokens)【81†L351-L359】. Tailwind CSS no aparece explícito, usa Angular Material por defecto. Desplegada en Vercel (`vercel.json`).  
  - **Estructura**: Creada con Angular CLI. Archivos: `angular.json`, `src/app/`, `src/index.html`. README por defecto del CLI explica cómo servir la app【78†L275-L283】.  
  - **Dependencias**: En **package.json**: `@angular/*@20.1.0`, `jwt-decode@^4.0.0`, `zone.js`, etc【81†L351-L359】. DevDeps: `@angular/cli@20.1.5`, Karma, Jasmine para tests unitarios.  
  - **Pruebas**: Configuración de Karma/Jasmine incluido (nada específico en `src`). Comando `ng test` disponible【78†L311-L320】.  
  - **Despliegue**: Vercel (URL en README【78†L333-L336】). No CI ni Docker.  
  - **Licencia**: No aplica (no file).  
  - **Relevancia**: Ejemplo de aplicación Angular moderno, aunque parece inacabado. Su interés principal es demostrar uso de Angular CLI y despliegue web. 

### Crucigrama_Playwright y Test_Playwright

Pequeños demos de testing automatizado con Playwright/Vite:

- **Crucigrama_Playwright**: Aplicación de crucigrama (puzzle) para clase de Playwright. Código en **TypeScript** (94%), con UI en HTML/CSS【26†L1-L4】. No hay README aparte, sólo la descripción “actividad para la clase de playwright”【26†L1-L4】. Usa Playwright para pruebas E2E (configuración presumiblemente en archivos `tests/`), y está publicada con Vercel (Vercel.app link). No contiene linter ni CI; es un ejercicio puntual.

- **Test_Playwright (TechStore Demo)**: Demo educativo con **HTML/CSS/JS** (98% HTML) y pruebas en Playwright. Tiene README en español explicando la app y comando `npm test`【30†L355-L359】. Dependencias: `@playwright/test`, Vite (dev). Licencia MIT presente【30†L353-L359】. Sirve de muestra de tests automáticos, sin más funcionalidades.

### BubbleSort

- **Descripción**: Ejercicio Java de ordenamiento por burbuja.  
- **Lenguajes/Tecnologías**: Java (archivo único `OrdenadorNumeros.java` en `src/`). Sin frameworks externos.  
- **Funcionalidad**: Genera `numeros.txt` con números aleatorios (1–9 dígitos), luego los ordena con burbuja y muestra estadísticas (tiempo, método). Código claro, con manejo de excepciones e I/O. Por ejemplo, el método de ordenamiento básico: 

  ```java
  public static void bubbleSort(List<Integer> lista) {
      int n = lista.size();
      boolean intercambio;
      for (int i = 0; i < n - 1; i++) {
          intercambio = false;
          for (int j = 0; j < n - i - 1; j++) {
              if (lista.get(j) > lista.get(j + 1)) {
                  int temp = lista.get(j);
                  lista.set(j, lista.get(j + 1));
                  lista.set(j + 1, temp);
                  intercambio = true;
              }
          }
          if (!intercambio) break;
      }
  }
  ``` 

  Este fragmento (citado de su código【58†L672-L680】) ilustra la implementación educativa del algoritmo.  
- **Archivos**: `OrdenadorNumeros.java` en `src/`, `.idea/` (Proyecto IntelliJ), `.gitignore`. Hay un archivo `numeros.txt` de ~98 MB pre-generado【59†L213-L215】. **Nota:** Este archivo grande es un problema (no debería incluirse en el repo), marcando falta de buena práctica de control de versiones.  
- **Pruebas/CI**: Ninguna. Simple aplicación de consola, compilable con `javac`.  
- **Licencia**: No hay.  
- **Observaciones**: Proyecto de aprendizaje para algoritmos (no apto para producción). El archivo grande sugiere mejora necesaria (ignore).

### Otros repositorios breves (resumen)

Muchos repositorios pequeños son ejercicios académicos o prototipos. Entre ellos:

- **Cronometro**: HTML/CSS/JS (30 oct 2025). Contiene cronómetro digital, sin frameworks (leng. principal HTML).  
- **Parqueadero, Cafe, Inventario_Cafe**: Ejercicios CRUD en C# y Angular para clases (2025). Por ejemplo, “Parqueadero” tiene frontend Angular y backend ASP.NET.  
- **Docker-1/2/3, dockerizar, dockerizando**: Guías de aprendizaje de Docker (contenedorizar apps Java).  
- **Semillero_React**: Proyecto React con TypeScript (Nov 2025). Sin README visible, presumiblemente ejercicio interno.  
- **SegundaAppAngular**: Proyecto Angular de ejemplo (Sep 2025).  
- **ManejoDelDom, Ejercicios-FlexBox, Clase-Henry**: Talleres de JavaScript/CSS del bootcamp Henry.  
- **Api_Proveedores, JWT-api, micro**: Servidores Java/Spring con JWT, microservicios académicos.  
- **Tutorial Projects (Proyecto-*, Proyecto_Axit, etc.)**: Varios proyectos de front/back sin detalle, típicamente HTML/CSS o JS puro. Generalmente sin README.  
- **Python-Prep (fork)**: Fork del repo de Henry de preparación de Python.  
- **Otros (Discord_Bot, Totoro_Sketch)**: Bot Discord, ejercicios de arte, etc. Tecnologías variadas (JavaScript, HTML).

En la práctica, muchos repos contienen pocos archivos y sin documentación. Son usados principalmente para el aprendizaje de frameworks, sin elementos de CI/CD o despliegue reales. 

## Comparativa de Repositorios

A continuación, una tabla resumida con algunos proyectos representativos para comparar tecnologías clave, actividad y méritos. Solo se incluyen repos seleccionados por importancia técnica:

| Repositorio              | Lenguajes/Tecnologías principales      | Estrellas / Forks | Última actualización | Descripción breve                         |
|--------------------------|----------------------------------------|-------------------|----------------------|-------------------------------------------|
| **Ubik-App**             | Angular 17+, TS, Tailwind, Express, Stripe【19†L346-L354】  | ★1 / 1           | Abr 2026            | SPA de reservas de moteles (frontend Angular + backend Express). |
| **ejercicioMachineLearning** | React 18+ TS, Vite, Tailwind, Supabase【62†L391-L399】【67†L445-L454】 | ★0 / 0           | Nov 2025            | Predicción de partidos de fútbol (UI React, ML en TS, backend Supabase). |
| **FrontendAngarita**     | Angular 20, TypeScript, JWT-decode【78†L275-L283】【81†L351-L359】    | ★0 / 0           | Nov 2025            | Frontend Angular de proyecto “Angarita”. Deployed en Vercel. |
| **BackendAngarita**      | Java 17, Spring Boot, Maven, Docker【50†L1-L9】         | ★0 / 0           | Nov 2025            | API Java/Spring para “Angarita” (microservicio con Dockerfile). |
| **JobFInder**            | React 18 TS, Vite, Supabase【89†L345-L354】   | ★0 / 0           | Nov 2025            | App de búsqueda de empleos. React + Supabase (estructura similar a EjML). |
| **BubbleSort**           | Java                                    | ★0 / 0           | Dic 2025            | Ejercicio de algoritmo (ordenamiento burbuja) con un gran archivo de datos. |
| **Test_Playwright**      | HTML/CSS, Playwright                    | ★0 / 0           | Mar 2026            | Demo de pruebas E2E con Playwright.       |
| **Cronometro**           | HTML/CSS/JS                             | ★0 / 0           | Oct 2025            | Simple cronómetro en web (ejercicio de JS básico). |

En general, los repositorios más activos (con commits recientes y multi-tecnología) son **Ubik-App**, **ejercicioMachineLearning**, **Angarita** y **JobFinder**. Los demás son más estáticos o académicos. La diversidad de lenguajes (TS, Java, C#, Python) resalta una versatilidad en aprendizaje.  

## Perfil Profesional Consolidado

**Skills clave identificadas:** Desarrollo full-stack web (Angular, React, Spring Boot), experiencia con TypeScript, pruebas automatizadas (Playwright), y manejo de contenedores (Docker). Ha trabajado con **bases de datos y autenticación** (JWT, Supabase) y tecnologías de despliegue (Vercel, AWS, Render). Además, demuestra sólidos fundamentos en algoritmos (implementó bubble sort) y patrones (repos sobre microservicios). 

**Roles adecuados:** Desarrollador Frontend (Angular/React) y Backend (Java/Node), DevOps básico (Docker), o ingeniero de QA/Test (por conocimiento de Playwright). **Tareas destacadas para destacar:** creación de una SPA Angular profesional (Ubik-App), desarrollo de un motor de simulaciones matemáticas (EjercicioML), y proyectos con microservicios Dockerizados (BackendAngarita).

**Puntos para portafolio profesional:** 
- Mencionar liderazgo en **proyecto full-stack Angular+Node** para sector turismo (Ubik-App) con pagos integrados. 
- **Experimentación con ML** en web (Football Predictor con React+Supabase) usando algoritmos estadísticos avanzados【62†L351-L359】【64†L594-L602】. 
- Integración de prácticas de CI/CD y contenedores (Dockerfile multietapa en BackendAngarita【50†L1-L9】). 
- Ejercicios de testing automatizado (Playwright) y buenas prácticas de código (uso de linter, TypeScript). 

Las experiencias en proyectos académicos indican capacidad de aprendizaje y adaptabilidad a distintas tecnologías de frontend/backend. Recomendable limpiar repos (ej. remover archivos de datos pesados) y documentar mejor los más profesionales. En resumen, el perfil se presenta como un **desarrollador web full-stack con enfoque en tecnologías modernas JS/TS y backend Java, acostumbrado a entornos colaborativos y herramientas de despliegue cloud**.

**Referencias:** Información tomada directamente de los repositorios públicos del usuario (README, código, archivos de configuración)【19†L346-L354】【62†L351-L359】【81†L351-L359】【89†L345-L354】. Cada hallazgo aquí se basa en inspección de esos archivos fuente.