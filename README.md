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
| Animation | [GSAP](https://gsap.com/) + ScrollTrigger (via `@gsap/react`) |
| Routing | [React Router 7](https://reactrouter.com/) (non-home routes are lazy-loaded) |
| Icons | lucide-react |
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
│   ├── site/            SiteHeader + SiteFooter, shared by every page
│   ├── ui/              Small primitives (typography, slider, bouncing arrow)
│   └── *.tsx            Interactive demos embedded in project write-ups
├── data/
│   ├── projects.tsx     The project registry — title, copy, cover art, and case-study body
│   └── project-utils.ts projectHref() / hasWriteUp() helpers
├── hooks/               use-breakpoint, use-page-meta (per-page title + description)
├── lib/                 Utilities (cn())
├── pages/
│   ├── home/            The animated landing page (hero → about morph, featured panels, showcase)
│   ├── blog/            Blog index and post pages; posts live in blog/posts/
│   ├── contact/         Contact page
│   ├── project/         Project detail page
│   └── NotFoundPage.tsx 404 + error page
└── router.tsx           Route definitions + GA page-view tracking
```

The `@` import alias points at `src/` (configured in `vite.config.ts`).

### Routes

| Path | Page |
| --- | --- |
| `/` | Animated home page (`/#about` and `/#projects` scroll to those sections) |
| `/about` | Redirects to `/#about` |
| `/contact` | Contact |
| `/blog` | Blog index |
| `/blog/posts/:postId` | Individual post |
| `/projects/:projectId` | Project case study |
| `*` | 404 page |

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
an `overview`, and a `body` (the case-study content). Optional `year` and `role`
show as a "2026 · Founder" line on the home page's featured panels. Projects with
an empty overview and body stay in the showcase list but aren't linked. Featured
ordering lives in `FEATURED` in `HomePage.tsx`; the hero list is in
`SelectedProjectsList.tsx`.

## Styling

Colours are tokens defined in `src/index.css` (`@theme`) and work both as
Tailwind classes (`text-ink`, `bg-paper`, `border-line`…) and as
`var(--color-ink)` in inline styles. Light surfaces use `ink`, `dim`, `faint`,
`line`, `line-strong`, `wash`, `paper`, and `mist`; the dark panels and footer
use `night`, `night-line`, `night-edge`, `night-faint`, and `night-text`. Use a
token rather than a hex value so the palette stays in one place.

## Performance notes

The home page runs several pinned, scrubbed GSAP timelines and ships a fair
amount of media, so a few conventions keep it smooth — especially on mobile:

- **Optimized media.** Cover images are resized WebP (`cwebp -q 80`); cover
  videos are downscaled, `faststart` MP4 (`ffmpeg ... -crf 28 -movflags
  +faststart`). Keep new art well under ~400 KB.
- **Lazy media.** Below-the-fold cover images/video load only when their panel
  nears the viewport (IntersectionObserver in `FeaturedProject.tsx`), so they
  don't compete with the hero animation on first paint.
- **The Austin map.** The ~2 MB hero SVG is fetched from its asset URL rather
  than bundled into the JS, and is only injected/animated at desktop widths.

## Deployment

Built and hosted on **Netlify**.

- Build command: `npm run build`
- Publish directory: `dist`

Pushing to `main` triggers a deploy.
