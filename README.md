# Alex Chen — Portfolio

A minimal, single-page portfolio built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). Features a monochrome aesthetic and dark/light mode.

## Stack

| Layer | Technology |
|---|---|
| Framework | [Astro 6](https://astro.build) — static site generation, `.astro` components |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) — CSS-first config via `@theme` |
| Font | [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) — monospace throughout |
| Build | Vite (via Astro) with `@tailwindcss/vite` plugin |

## Project Structure

```
src/
├── components/          # 13 Astro components
│   ├── Badge.astro             # Inline tag/badge (e.g. tech names, statuses)
│   ├── BlogPosts.astro         # Lists blog posts from data
│   ├── Contact.astro           # Email and booking links
│   ├── ExperienceItem.astro    # Single job entry with timeline dot
│   ├── Hero.astro              # Avatar, name, role, bio, CTA buttons
│   ├── ProjectCard.astro       # Single project card with icon + status
│   ├── Projects.astro          # Grid of ProjectCards
│   ├── SectionHeading.astro    # Reusable section label + title
│   ├── SocialButton.astro      # Styled social link button
│   ├── SocialLinks.astro       # Row of SocialButtons
│   ├── TechStack.astro         # Badge list of technologies
│   ├── ThemeToggle.astro       # Dark/light toggle with View Transition circular reveal
│   └── WorkExperience.astro    # Timeline of ExperienceItems
├── data/
│   └── site.ts          # All portfolio content (info, tech, jobs, projects, posts, links)
├── layouts/
│   └── Layout.astro     # Root HTML shell, fonts, dark-mode script, slot
├── pages/
│   └── index.astro      # Single page composing all sections
└── styles/
    └── global.css       # Tailwind v4 entry, theme tokens, base resets, view-transition keyframes
```

## Architecture

### Data-driven content

All content lives in `src/data/site.ts` — tech stack, work experience, projects, blog posts, social links, and personal info. Components import this data and render it. To update the portfolio, edit only this file.

### Single-page layout

`src/pages/index.astro` imports the `Layout` shell and renders sections in order:

1. **ThemeToggle** — fixed top-right corner
2. **Hero** — avatar, name, role, bio, CTA buttons, availability
3. **TechStack** — badge grid of technologies
4. **WorkExperience** — timeline with company, role, achievements, tags
5. **Projects** — 2-column card grid with status badges
6. **BlogPosts** — simple list with source labels
7. **SocialLinks** — row of styled platform buttons
8. **Contact** — email and booking URL
9. **Footer** — copyright and tech attribution

Sections are separated by thin horizontal rules.

### Dark mode

Dark mode uses the `.dark` class on `<html>`, activated by:
- An **inline script** in `Layout.astro` that reads `localStorage.getItem("theme")` before paint (prevents flash)
- Falling back to `prefers-color-scheme: dark`
- The `ThemeToggle` component toggles the class and persists to `localStorage`

The toggle uses `document.startViewTransition()` for a smooth circular reveal animation.
The button's bounding rect determines the clip‑path origin (`--toggle-x`, `--toggle-y`), and `Math.hypot` computes the radius needed to cover the viewport. The animation runs at 300 ms with `ease-out` easing, and the default view‑transition group fade‑in is disabled to prevent competing opacity transitions.

Tailwind v4 uses `@custom-variant dark (&:where(.dark, .dark *))` to scope dark styles. Every utility that differs between modes uses the `dark:` prefix.

### Styling approach

All styling uses Tailwind utility classes directly in templates. No CSS modules, no styled-components, no component `<style>` tags. The only CSS file is `global.css`, which serves as Tailwind v4 entry, token definition, and base resets.

Custom theme tokens:

| Token | Value | Usage |
|---|---|---|
| `--font-family-sans` | IBM Plex Mono | Global monospace |

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server (default http://localhost:4321)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

Requires Node.js >= 22.12.

## Customization

### Content

Edit `src/data/site.ts` — all text, links, and lists come from this file.

### Theme tokens

Edit the `@theme` block in `global.css` to change the font family.
