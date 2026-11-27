# software-smith.in

Personal site of **Nehal SK** — full-stack engineer, Kolkata.

Built with [Astro](https://astro.build) and Tailwind CSS v4. Produces static output in `dist/`; `public/_headers` is the Cloudflare Pages cache header.

## Commands

| Command            | Action                                          |
| ------------------ | ----------------------------------------------- |
| `bun install`      | Install dependencies                            |
| `bun run dev`      | Dev server at `localhost:4321`                  |
| `bun run build`    | `astro check`, then `astro build` into `./dist/` |
| `bun run preview`  | Preview the build locally                       |
| `bun run format`   | Prettier (includes the Tailwind class sorter)   |
| `bun run lint`     | ESLint                                          |

## Where things live

- `src/data/*.json` — projects, work experience, education, socials. All page copy lives here; components just map over it.
- `src/components/` — one component per section or card.
- `src/layouts/Layout.astro` — `<head>`, fonts, meta/OG tags, background.
- `src/styles/global.css` — palette, gradients, shared utilities.

## Environment

`.env` is git-ignored and needs:

- `READY` — set to `TRUE` to publish. Anything else rewrites `/` to `/coming-soon`.
- `WEB3FORMS_ACCESS_KEY` — Web3Forms key for the contact form. Without it the form renders in sandbox mode and shows a warning instead of sending.
