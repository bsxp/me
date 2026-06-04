# chris-site-v2

Chris Porter's personal portfolio and blog — [chrisporter.org](https://chrisporter.org).

A single-page React app with a heavily animated, scroll-driven home page, a
blog where each post is a React component, and a project gallery driven from a
single content registry.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite 7](https://vite.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| UI primitives | [Radix UI](https://www.radix-ui.com/) (shadcn-style components in `src/components/ui`) |
| Animation | [GSAP](https://gsap.com/) + ScrollTrigger (via `@gsap/react`) |
| Routing | [React Router 7](https://reactrouter.com/) |
| Forms / validation | react-hook-form + [Zod](https://zod.dev/) |
| State | [Zustand](https://github.com/pmndrs/zustand) (used sparingly) |
| Charts | [Recharts](https://recharts.org/) |
| Icons | lucide-react, react-icons |
| Analytics | Google Analytics 4 (manual page-view events) |
| Hosting | Netlify |

## Getting started

Requires **Node 22+** and npm.

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
```

### Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint over the project |

## Project structure

```
src/
├── assets/              Images, video, and the Austin map SVG (project art under assets/projects/)
├── components/
│   ├── ui/              shadcn-style primitives (button, dialog, etc.)
│   └── util/            Shared helpers
├── data/
│   ├── projects.tsx     The project registry — title, copy, cover art, and case-study body
│   └── articles.ts      Article metadata
├── hooks/               Custom hooks (breakpoints, mobile detection)
├── lib/                 Utilities (cn(), etc.)
├── pages/
│   ├── home/            The animated landing page (hero → about morph, featured carousel)
│   ├── about/           About page
│   ├── blog/            Blog index, category, and post pages; posts live in blog/posts/
│   ├── contact/         Contact page
│   └── project/         Project detail page
└── router.tsx           Route definitions + GA page-view tracking
```

The `@` import alias points at `src/` (configured in `vite.config.ts`).

### Routes

| Path | Page |
| --- | --- |
| `/` | Animated home page |
| `/about` | About |
| `/contact` | Contact |
| `/blog` | Blog index |
| `/blog/categories/:category` | Posts filtered by category |
| `/blog/posts/:postId` | Individual post |
| `/projects/:projectId` | Project case study |

## Authoring content

### Add a blog post

1. Create `src/pages/blog/posts/<m-d-yyyy>-<slug>.tsx`. Export a `POST_META`
   object (`slug`, `title`, `description`, `tags`, `date`) and a default
   component that returns the article JSX.
2. Register it in `src/pages/blog/posts/index.ts` by importing its `POST_META`
   and component and adding an entry to the `POSTS` array (newest first).

Posts are plain React components, so they can embed interactive demos, code
blocks, images, and links — not just markdown.

### Add a project

Add an entry to the `projects` array in `src/data/projects.tsx`. Each project
has an `id`, `title`, `description`, `coverImage` (and optional `coverVideo`),
an `overview`, and a `body` (the case-study content). Featured ordering for the
home page lives in `src/pages/home/SelectedProjectsList.tsx` and `HomePage.tsx`.

## Performance notes

The home page runs several pinned, scrubbed GSAP timelines and ships a fair
amount of media, so a few conventions keep it smooth — especially on mobile:

- **Optimized media.** Cover images are resized WebP (`cwebp -q 80`); cover
  videos are downscaled, `faststart` MP4 (`ffmpeg ... -crf 28 -movflags
  +faststart`). Keep new art well under ~400 KB.
- **Lazy media.** Below-the-fold cover images/video load only when their panel
  nears the viewport (IntersectionObserver in `FeaturedProject.tsx`), so they
  don't compete with the hero animation on first paint.
- **`?perf` FPS overlay.** Append `?perf` to any URL to show a live FPS /
  rolling-min readout (`src/components/PerfOverlay.tsx`) — handy for diagnosing
  scroll jank on a real device. It's invisible without the query param.

## Deployment

Built and hosted on **Netlify**.

- Build command: `npm run build`
- Publish directory: `dist`

Pushing to `main` triggers a deploy.
