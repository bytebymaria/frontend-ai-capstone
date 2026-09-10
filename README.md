# Frontend AI Capstone

Capstone project for the **Front-End AI Engineering Internship at FlyRank AI**.

The project is currently being developed as **Main Character Café**, a fictional coffee and lifestyle brand that will evolve into an AI-powered café experience.

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Git & GitHub
* Vercel

## Project

### Main Character Café ☕✨

> Coffee for whatever chapter you're in.

Main Character Café is a fictional café concept designed around an AI-powered "Find Your Vibe" experience. Users will eventually be able to interact with an AI assistant to discover a café recommendation based on their current mood or vibe.

The project is being developed incrementally as part of the internship capstone.

## Current Progress

### Week 3 — Capstone Skeleton

* Next.js application scaffold
* Shared root layout and navigation
* Responsive homepage
* Placeholder routes for all planned screens
* Tailwind CSS design tokens
* Health check API endpoint
* Health check page with fetched API data
* Environment variable structure
* Mobile and desktop responsive layouts
* Production build verification

## Routes

| Route          | Purpose          |
| -------------- | ---------------- |
| `/`            | Homepage         |
| `/menu`        | Café menu        |
| `/vibe`        | Find Your Vibe   |
| `/vibe/result` | Vibe result      |
| `/story`       | Our Story        |
| `/journal`     | Journal          |
| `/locations`   | Locations        |
| `/favorites`   | Favorites        |
| `/health`      | Health check     |
| `/api/health`  | Health check API |

## Environment Variables

Local environment variables are stored in `.env.local` and are excluded from version control.

```env
AI_API_KEY=
```

No API keys or secrets are committed to the repository.

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The project currently builds successfully with no compilation or TypeScript errors.

## Internship Roadmap

The capstone will be developed across the internship tasks, gradually introducing:

* Accessible React components
* Streaming AI interaction
* AI-powered "Find Your Vibe" experience
* Tool calls and tool results
* Structured AI output
* Production deployment
