# Main Character Café ☕✨

A fictional coffee and lifestyle brand built as the capstone project for the **Front-End AI Engineering Internship at FlyRank AI**.

> Coffee for whatever chapter you're in.

The project is being developed as an AI-powered café experience where users can eventually discover a coffee recommendation based on their current mood or "vibe."

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Git & GitHub
* Vercel

## Current Features

* Responsive homepage
* Main navigation
* Café menu route
* Find Your Vibe route
* Vibe result route
* Our Story route
* Journal route
* Locations route
* Favorites route
* Health check page with fetched API data
* Server-side health API endpoint
* Responsive layouts for desktop and mobile

## Routes

| Route          | Purpose                    |
| -------------- | -------------------------- |
| `/`            | Homepage                   |
| `/menu`        | Café menu                  |
| `/vibe`        | Find Your Vibe             |
| `/vibe/result` | Vibe recommendation result |
| `/story`       | Our Story                  |
| `/journal`     | Café journal               |
| `/locations`   | Café locations             |
| `/favorites`   | Saved recommendations      |
| `/health`      | Application health status  |
| `/api/health`  | Health check API           |

## Project Structure

```text
app/
├── api/
│   └── health/
│       └── route.ts
├── favorites/
├── health/
├── journal/
├── locations/
├── menu/
├── story/
├── vibe/
│   └── result/
├── globals.css
├── layout.tsx
└── page.tsx

components/
└── Navbar.tsx
```

## Environment Variables

Environment variables are stored locally in `.env.local` and are excluded from version control.

```env
AI_API_KEY=
```

No API keys or secrets are committed to the repository.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production Build

To create a production build:

```bash
npm run build
```

The project currently builds successfully with no TypeScript or compilation errors.

## Internship Progress

This repository is being developed incrementally throughout the **Front-End AI Engineering Internship**.

### Week 3 — Capstone Skeleton

* Next.js application scaffold
* Application routes
* Shared navigation and layout
* Tailwind design tokens
* Health check API
* Fetched health data
* Environment variable structure
* Responsive layout
* Production build verification
* Vercel deployment

### Coming Next

The next stage will introduce the AI interaction for **Find Your Vibe**, followed by streaming responses, tool calls, and structured AI output.
