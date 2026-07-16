# Arun Dhungana — Portfolio

Personal portfolio and interactive learning showcase built with React 19, TypeScript, and GSAP.

## Tech Stack

- **React 19** + **TypeScript** (strict mode)
- **Vite 7** — build tool and dev server
- **Tailwind CSS 4** — utility-first styling
- **GSAP 3** + `@gsap/react` — scroll and entrance animations
- **React Router 7** — client-side routing with SPA fallback
- **Swiper** — hero project carousel
- **Vitest** + **@testing-library/react** — unit and component tests

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, About, Skills, Projects, Experience |
| `/js` | JavaScript learning modules (Week 2–7) |
| `/react-learning` | React mini-apps: Counter, Todo, Weather |

## Getting Started

```bash
npm install
cp .env.example .env        # add VITE_OPENWEATHER_API key
npm run dev
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_OPENWEATHER_API` | Yes (Weather page) | OpenWeatherMap API key |

Get a free key at [openweathermap.org/api](https://openweathermap.org/api).

## Scripts

```bash
npm run dev      # start dev server at localhost:5173
npm run build    # TypeScript check + production build
npm run preview  # serve the production build locally
npm run lint     # ESLint
npm test         # run all unit tests (watch mode)
npm test -- --run  # run all tests once (CI mode)
```

## Project Structure

```
src/
├── component/
│   ├── ui/          # Header, Footer, PrimaryButton, OutlineButton
│   └── animations/  # GSAP utility functions
├── lib/             # gsap plugin setup, shared types
└── page/
    ├── Home/        # Portfolio sections (Hero, About, Skills, …)
    ├── JS/          # JavaScript exercises
    ├── ReactLearn/  # React mini-apps + tests
    └── 404/         # Fallback page
```

## Deploy

Deployed on **Vercel**. The `public/_redirects` file routes all paths to `index.html` for SPA
client-side navigation.

```bash
vercel --prod
```
