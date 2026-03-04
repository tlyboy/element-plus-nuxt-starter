# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Project Overview

This is a starter template based on Nuxt 4 + Element Plus + Tailwind CSS 4.

## Common Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm preview    # Preview production build
pnpm generate   # Static generation
```

## Tech Stack

- **Nuxt 4** - Vue 3 full-stack framework
- **Element Plus** - UI component library, using SCSS for style imports, with dark theme support
- **Tailwind CSS 4** - Integrated via Vite plugin
- **@nuxtjs/color-mode** - Dark mode toggle
- **pnpm** - Package manager

## Architecture

### Directory Structure

- `app/` - Nuxt application directory (Nuxt 4 new structure)
  - `pages/` - Page routes
  - `components/` - Vue components
  - `layouts/` - Layout components
  - `assets/css/main.css` - Tailwind entry point and global styles
  - `assets/scss/element/` - Element Plus theme customization
- `server/` - Nitro server
- `public/` - Static assets

### Element Plus Theme

Theme colors are overridden via SCSS variables (`app/assets/scss/element/`), with the primary color set to `#3498db`. Dark mode is configured separately using `dark.scss`.

### Tailwind Icons

Uses the `@egoist/tailwindcss-icons` plugin. Icons are used as classes with the `i-` prefix, e.g., `i-carbon-sun`.

## Code Style

- Prettier config: no semicolons, single quotes
- Element Plus defaults to Chinese language pack (zh-cn)
