# API Rick and Morty - Frontend Challenge

Aplicación web desarrollada con React + TypeScript para explorar personajes de Rick and Morty consumiendo una API pública. Este proyecto está orientado a demostrar criterio de arquitectura frontend, manejo de estado, consumo de datos asíncronos y experiencia de usuario.

## Resumen

Este proyecto resuelve un escenario real de frontend: listar, filtrar, paginar y consultar detalle de entidades remotas con una interfaz rápida y mantenible.

Que quiero reflejar con este proyecto:

- Capacidad para estructurar una app escalable con separación por capas.
- Manejo moderno de estado local/global y caché de servidor.
- Buenas prácticas de tipado en TypeScript.
- Criterio UX para estados de carga, error y vacío.

## Demo funcional

El flujo principal permite:

- Visualizar personajes en formato lista/tarjeta.
- Filtrar por especie (Human/Alien).
- Buscar por nombre con debounce para optimizar consultas.
- Navegar por páginas de resultados.
- Consultar el detalle de un personaje.
- Navegar a una vista 404 en rutas no existentes.

## Stack tecnológico

- React 19
- TypeScript
- Vite
- React Router
- TanStack Query (React Query)
- Zustand
- Axios
- Tailwind CSS
- ESLint

## Arquitectura del proyecto

La estructura sigue un enfoque por responsabilidades:

- pages: vistas de alto nivel de cada ruta.
- components: bloques UI reutilizables.
- hooks: lógica de negocio reutilizable y orquestación de datos.
- services: acceso a API y encapsulación de requests.
- store: estado global y acciones con Zustand.
- utils: helpers puros para transformación de datos.
- @types: contratos tipados para respuestas y entidades.

Esta separación facilita mantenimiento, testing futuro y evolución de features.

## Decisiones técnicas relevantes

- Server state con TanStack Query para caching, loading state y control de errores de forma consistente.
- Estado global de filtros/paginación con Zustand para evitar prop drilling.
- Debounce en búsqueda para reducir llamadas innecesarias a la API.
- Lazy loading de páginas con Suspense para mejorar performance percibida.
- Diseño de componentes desacoplados para reuso y legibilidad.

## Cómo ejecutarlo localmente

### Requisitos

- Node.js 22+
- pnpm 10+

### Instalación y ejecución

```bash
pnpm install
pnpm dev
```

La aplicación se levanta en el puerto mostrado por Vite (por defecto: `http://localhost:5173`).

## Scripts disponibles

```bash
pnpm dev      # entorno de desarrollo
pnpm build    # build de producción
pnpm preview  # previsualizar build
pnpm lint     # análisis estático con ESLint
```

## Qué quiero evaluar en este proyecto

- Organización de código y criterio de modularidad.
- Calidad de tipado y consistencia técnica.
- Manejo de estados de UI en escenarios reales de red.
- Dominio de librerías del ecosistema React actual.
- Claridad para escalar el proyecto hacia nuevas funcionalidades.

## Próximas mejoras

- Sincronización de filtros/página en query params.
- Testing (unitario e integración) con Vitest + Testing Library.

## Contacto

- GitHub: https://github.com/Mooenz
- LinkedIn: https://linkedin.com/in/mooenz
- Sitio web: https://twitter.com/mooenz

¡Gracias por revisar mi proyecto! Estoy abierto a feedback y oportunidades de colaboración.