---
version: alpha
name: ibm-documentation
description: "IBM Documentation portal — Carbon Design System on a documentation product surface: dark hero leadspace with oversized search, light gray content bands, 1px-gap card grids, and IBM Blue (#0f62fe) as the sole interactive accent. IBM Plex Sans throughout; display at weight 300. Square corners (0px). Depth from surface layering and hairlines, not shadows. Built for developers searching product docs, not IBM.com marketing."

colors:
  primary: "#0f62fe"
  on-primary: "#ffffff"
  ink: "#161616"
  ink-muted: "#525252"
  ink-helper: "#6f6f6f"
  ink-subtle: "#8d8d8d"
  canvas: "#ffffff"
  surface-1: "#f4f4f4"
  surface-2: "#e0e0e0"
  inverse-canvas: "#161616"
  inverse-surface-1: "#262626"
  inverse-surface: "#393939"
  inverse-ink: "#ffffff"
  inverse-ink-muted: "#c6c6c6"
  inverse-link: "#78a9ff"
  hairline: "#e0e0e0"
  hairline-subtle: "#d4d4d4"
  hairline-strong: "#a8a8a8"
  blue-60: "#0043ce"
  blue-80: "#002d9c"
  blue-hover: "#0043ce"
  search-bg: "#262626"
  search-border: "#525252"
  search-text: "#f4f4f4"
  semantic-success: "#24a148"
  semantic-warning: "#f1c21b"
  semantic-error: "#da1e28"
  semantic-info: "#0043ce"

typography:
  display-hero:
    fontFamily: IBM Plex Sans
    fontSize: 42px
    fontWeight: 300
    lineHeight: 1.199
    letterSpacing: 0
  display-md:
    fontFamily: IBM Plex Sans
    fontSize: 42px
    fontWeight: 300
    lineHeight: 1.20
    letterSpacing: 0
  headline:
    fontFamily: IBM Plex Sans
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.286
    letterSpacing: 0
  card-title:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  subhead:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: 0
  body:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0.16px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: 0.16px
  body-emphasis:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: 0.16px
  caption:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0.32px
  button:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: 0.16px
  eyebrow:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: 0
  search-input:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xs: 1px
  sm: 2px
  md: 4px
  lg: 8px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 16px
  button-primary-pressed:
    backgroundColor: "{colors.blue-80}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 16px
  button-tertiary:
    backgroundColor: transparent
    textColor: "{colors.inverse-link}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 40px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 16px
  masthead:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    height: 48px
  leadspace-hero:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.search-text}"
    typography: "{typography.display-hero}"
    rounded: "{rounded.none}"
    height: 320px
  search-bar:
    backgroundColor: "{colors.search-bg}"
    textColor: "{colors.search-text}"
    typography: "{typography.search-input}"
    rounded: "{rounded.none}"
    height: 64px
    padding: 0 16px
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 11px 16px
  text-input-focused:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 11px 16px
  text-input-error:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 11px 16px
  docs-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 16px
    minHeight: 224px
  docs-card-blue:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.card-title}"
    rounded: "{rounded.none}"
    padding: 16px
    minHeight: 224px
  docs-card-blue-hover:
    backgroundColor: "{colors.blue-60}"
    textColor: "{colors.on-primary}"
    typography: "{typography.card-title}"
    rounded: "{rounded.none}"
  docs-card-inverse:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.none}"
    padding: 16px
    minHeight: 224px
  docs-card-featured:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-emphasis}"
    rounded: "{rounded.none}"
    height: 160px
  resource-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.none}"
    padding: 16px
    minHeight: 160px
  product-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 16px 20px
  product-tab-selected:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-emphasis}"
    rounded: "{rounded.none}"
    padding: 16px 20px
  top-nav:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    height: 48px
  docs-footer:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 16px
  dotcom-footer:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    height: 48px
  toc-sidebar:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
---

## Overview

[IBM Documentation](https://www.ibm.com/docs/en) is IBM's unified product documentation portal — a **documentation product surface** on **Carbon Design System** and **Carbon for IBM.com**, not the IBM.com marketing site. The homepage is search-first: a dark hero with an oversized search field, trending product cards, Cloud Pak editorial content, a featured-docs carousel, offline-docs promotion, and a resources grid.

**Source:** Static analysis of `https://www.ibm.com/docs/en` — HTML shell, `/docs/css/style.css`, Carbon `cds--` / `c4d--` classes (June 2026). Authored manually from live page CSS; not copied from `versions/v4/DESIGN.md` (IBM marketing) or other versions.

**Key Characteristics:**
- **Dark hero + light body** — `{colors.inverse-canvas}` leadspace on `{colors.canvas}` / `{colors.surface-1}` bands.
- **Search-first** — `{search-bar}` at 64px on `{colors.search-bg}` is the primary homepage interaction.
- **Card grids with 1px gaps** — `column-gap: 1px; row-gap: 1px`; separation by surface color, not shadow.
- **One accent color** — `{colors.primary}` IBM Blue for links, blue CTA cards, focus rings; hover `{colors.blue-60}`.
- **Light-weight display** — Plex Sans weight **300** at 42px on the hero title.
- **Square geometry** — `{rounded.none}` on cards, inputs, buttons.
- **Dual footer** — light `{docs-footer}` plus dark `{dotcom-footer}` legal bar.
- **Page rhythm:** masthead → dark hero + search → trending cards → Cloud Paks band → featured carousel → offline promo → resources grid → docs footer → dotcom footer.

## Colors

> Source page: [ibm.com/docs/en](https://www.ibm.com/docs/en) homepage; topic-page tokens from shared `/docs/css/style.css`.

### Brand & Accent
- **IBM Blue** (`{colors.primary}`): Links, arrow icons, blue CTA cards, focus rings, TOC active border.
- **Blue 60** (`{colors.blue-60}`): Hovered link and blue-card state (`#0043ce`).
- **Blue 80** (`{colors.blue-80}`): Pressed primary button.
- **Blue Hover** (`{colors.blue-hover}`): Alias for blue-60 on this surface.
- **Inverse link** (`{colors.inverse-link}`): Links on dark / inverse surfaces (`#78a9ff`).

### Surface
- **Canvas** (`{colors.canvas}`): Default card and content background.
- **Surface 1** (`{colors.surface-1}`): Alternate section bands (Cloud Paks, Offline, docs footer).
- **Surface 2** (`{colors.surface-2}`): Selected TOC row, hover fills.
- **Inverse Canvas** (`{colors.inverse-canvas}`): Hero leadspace, masthead, dotcom footer.
- **Inverse Surface 1** (`{colors.inverse-surface-1}`): Search input background (`#262626`).
- **Inverse Surface** (`{colors.inverse-surface}`): Entitled / restricted cards (`#393939`).
- **Hairline** (`{colors.hairline}`): Dividers, TOC borders, section separators.
- **Hairline Strong** (`{colors.hairline-strong}`): Docs footer top border (`#a8a8a8`).
- **Search field** (`{colors.search-bg}` / `{colors.search-border}`): Homepage search chrome.

### Text
- **Ink** (`{colors.ink}`): Primary headings and body on light surfaces.
- **Ink Muted** (`{colors.ink-muted}`): Card copy, eyebrows, secondary nav.
- **Ink Helper** (`{colors.ink-helper}`): Breadcrumb helpers, filter metadata.
- **Ink Subtle** (`{colors.ink-subtle}`): Disabled, tertiary captions.
- **Inverse Ink** (`{colors.inverse-ink}`): Text on dark hero and inverse cards.
- **Inverse Ink Muted** (`{colors.inverse-ink-muted}`): Dotcom footer link default.

### Semantic
- **Success** (`{colors.semantic-success}`): Carbon green — positive states.
- **Warning** (`{colors.semantic-warning}`): Carbon yellow — caution states.
- **Error** (`{colors.semantic-error}`): Carbon red — errors, validation.
- **Info** (`{colors.semantic-info}`): `#0043ce` — informational highlights.

## Typography

### Font Family

- **IBM Plex Sans** — sole UI typeface on the documentation portal. Geometric, enterprise-focused. Fallback: `Helvetica Neue, Arial, sans-serif`.
- **IBM Plex Mono** — code blocks and inline code inside topic pages only; not used on the homepage card grid.

Hierarchy is carried by **size + weight**, not font-family switching.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-hero}` | 42px | 300 | 1.199 | 0 | Hero "IBM Documentation" title |
| `{typography.display-md}` | 42px | 300 | 1.20 | 0 | Offline page hero (4rem display) |
| `{typography.headline}` | 28px | 400 | 1.286 | 0 | Section headings (Trending, Resources) |
| `{typography.card-title}` | 20px | 400 | 1.4 | 0 | Trending / docs card titles |
| `{typography.subhead}` | 20px | 400 | 1.4 | 0 | Offline section titles |
| `{typography.search-input}` | 20px | 400 | 1.4 | 0 | Homepage search input |
| `{typography.body-lg}` | 16px | 400 | 1.375 | 0 | Section descriptions, resource copy |
| `{typography.body}` | 14px | 400 | 1.43 | 0.16px | Default body, card eyebrows |
| `{typography.body-sm}` | 14px | 400 | 1.29 | 0.16px | Masthead, footer columns |
| `{typography.body-emphasis}` | 14px | 600 | 1.29 | 0.16px | Resource card titles, selected tabs |
| `{typography.caption}` | 12px | 400 | 1.33 | 0.32px | Docs footer, legal meta |
| `{typography.button}` | 14px | 400 | 1.29 | 0.16px | Carbon button labels |
| `{typography.eyebrow}` | 14px | 400 | 1.29 | 0 | Card eyebrows (sentence case) |

### Principles

- **Light-weight display is the brand voice** on the dark hero — do not bold the main title.
- **Carbon `letter-spacing: 0.16px`** on compact body sizes — keep it.
- **Sentence-case eyebrows** at 14px — no all-caps tracked labels.
- List items in editorial sections use `line-height: 1.65`.

### Note on Font Substitutes

IBM Plex Sans is **free and open-source** (SIL OFL) on [Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans). Plex Mono is available for topic-page code rendering.

## Layout

### Spacing System

- **Base unit**: 4px (Carbon mini-unit).
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 64px.
- Card section vertical padding: `{spacing.xl}` 32px (`2rem`).
- Hero padding: `{spacing.section}` 64px (`4rem`) above/below title and search.
- Button padding: 12px vertical · 16px horizontal — Carbon spec.
- Form input padding: 11px vertical · 16px horizontal (topic pages).

### Grid & Container

- Carbon 16-column grid; max width ~1584px (`99rem`).
- Homepage card grid: **3-up** desktop → **2-up** below 1056px → **1-up** below 672px.
- Card gaps: **1px** grid gap (not margin).
- Featured documentation: horizontal scroll row of `{docs-card-featured}` tiles.
- Topic pages: TOC sidebar ~25% + content ~75%.

### Whitespace Philosophy

Sections alternate `{colors.canvas}` and `{colors.surface-1}` bands. Cards are tall (min 224px) with eyebrow → title → copy → bottom-aligned arrow footer. Dense by design — documentation users scan grids, not marketing whitespace.

### Motion

- Durations: 70ms micro · 110ms fast · 150ms normal.
- Easing: `cubic-bezier(0.2, 0, 0.38, 0.9)`.
- Card hovers: background-color transition on blue and inverse cards.
- Respect `prefers-reduced-motion`.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow | Default cards on white |
| 1 (hairline) | 1px grid gap / `{colors.hairline}` border | Card grid separation |
| 2 (surface lift) | `{colors.surface-1}` on `{colors.canvas}` | Cloud Paks, Offline bands |
| 3 (focus ring) | Inset `#0f62fe` + white ring | Focused blue CTA cards |
| 4 (dropdown) | `0 2px 8px rgba(0,0,0,.2)` | Mobile TOC selector only |

Carbon docs surfaces **avoid drop shadows** on cards. Blue card focus-within:
`inset 0 0 0 1px #0f62fe, inset 0 -1px 0 1px #0f62fe, inset 0 0 0 3px #ffffff`.

### Decorative Depth

- **Hero background image** on desktop leadspace (abstract mesh illustration); removed below 672px — flat `#161616` only.
- **No atmospheric gradients** on content cards. Depth is surface change and 1px hairlines only.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Default — cards, buttons, inputs, tiles |
| `{rounded.xs}` | 1px | TOC filter dropdown (rare) |
| `{rounded.sm}` | 2px | Slug button corners (topic AI labels) |
| `{rounded.md}` | 4px | Rare Carbon exceptions |
| `{rounded.lg}` | 8px | Documented for completeness |
| `{rounded.pill}` | 9999px | Not used on IBM Docs homepage |

### Photography & Illustration Geometry

- Product icons in grey solution cards: **48×48px** (`3rem`), flat, no rounded frame.
- Hero leadspace uses full-bleed responsive background photography/illustration.
- Featured carousel tiles are text-only on white — no image frames.
- Video embed in Cloud Paks section: flat rectangular frame, no rounded corners.

## Components

### Buttons

**`button-primary`** — Solid blue CTA (e.g. offline download).
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding 12px 16px, rounded `{rounded.none}`.
- Pressed: `button-primary-pressed` → `{colors.blue-80}`.

**`button-secondary`** — Charcoal on dark hero contexts.
- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink}`, type `{typography.button}`, padding 12px 16px.

**`button-tertiary`** — Ghost on dark hero (offline secondary CTA).
- Background transparent, text `{colors.inverse-link}`, padding 12px 40px.

**`button-ghost`** — Text + arrow link pattern on light surfaces.
- Background transparent, text `{colors.primary}`, type `{typography.button}`.

### Cards & Containers

**`docs-card`** — Standard trending / documentation tile.
- Background `{colors.canvas}`, min-height 224px, padding 16px.
- Eyebrow `{typography.eyebrow}` `{colors.ink-muted}` · title `{typography.card-title}` · copy muted · footer arrow `{colors.primary}`.

**`docs-card-blue`** / **`docs-card-blue-hover`** — "View all products" CTA card.
- Background `{colors.primary}`; hover `{colors.blue-60}`. White text and arrows. Focus ring per Elevation.

**`docs-card-inverse`** — Entitled / restricted documentation.
- Background `{colors.inverse-surface}`; hover `#474747`. Footer link `{colors.inverse-link}`.

**`docs-card-featured`** — Featured documentation carousel tile.
- Height 160px; product name only; white background.

**`resource-card`** — Resources grid (Support Portal, Fix Central, …).
- Title `{typography.body-emphasis}`; copy `{typography.body-lg}` muted; min-height 160px.

**`section-band`** — Gray editorial block (Cloud Paks, Offline).
- Background `{colors.surface-1}`; padding 48px vertical; title `{typography.headline}`.

### Inputs & Forms

**`search-bar`** — Homepage global search (distinct from standard text input).
- Height 64px; background `{colors.search-bg}`; border-bottom `{colors.search-border}`.
- Text `{colors.search-text}`; type `{typography.search-input}`.
- Clear button 64×64px; hover `{colors.inverse-surface}`.

**`text-input`** + **`text-input-focused`** + **`text-input-error`** — Carbon input on topic / filter surfaces.
- Background `{colors.surface-1}`, text `{colors.ink}`, padding 11px 16px, rounded `{rounded.none}`.
- Focus: 2px `{colors.primary}` bottom underline (Carbon signature).
- Error: 2px `{colors.semantic-error}` bottom underline.

### Tabs

**`product-tab`** + **`product-tab-selected`** — Version selector and horizontal nav on product landing pages.
- Default: `{colors.canvas}`, `{colors.ink-muted}`, padding 16px 20px, bottom 1px hairline.
- Selected: `{colors.ink}`, `{typography.body-emphasis}`, bottom 2px `{colors.primary}` underline.

### Navigation

**`masthead`** / **`top-nav`** — Carbon for IBM.com L0 shell.
- Background `{colors.inverse-canvas}`, height 48px. IBM logo + "Documentation".
- Below 672px: hamburger visible; language selector and dark-mode toggle hidden in masthead CSS.

**`toc-sidebar`** — Topic page table of contents.
- Background `{colors.surface-1}`; right border `{colors.hairline-subtle}`.
- Active row: `{colors.surface-2}` fill + 4px left `{colors.primary}` border.

### Footer

**`docs-footer`** — Documentation-specific footer.
- Background `{colors.surface-1}`; top border `{colors.hairline-strong}`.
- Copyright `{typography.caption}`; optional GitHub feedback panel on white sub-tile.

**`dotcom-footer`** — IBM.com global legal nav.
- Background `{colors.inverse-canvas}`; links `{colors.inverse-ink-muted}`, hover `{colors.search-text}` with underline.

## Do's and Don'ts

### Do

- Use `{colors.inverse-canvas}` dark hero with `{search-bar}` — homepage signature.
- Keep `{rounded.none}` on cards, inputs, and buttons; use 1px grid gaps.
- Reserve `{colors.primary}` for links, one blue CTA card per grid, focus, TOC active indicator.
- Set hero title to Plex Sans **300** at 42px.
- Alternate `{colors.canvas}` and `{colors.surface-1}` section bands.
- Use arrow-link footers on cards (text + chevron SVG).
- Apply `letter-spacing: 0.16px` on compact body sizes.

### Don't

- Don't apply IBM.com **marketing** patterns from `versions/v4/DESIGN.md` (white hero, 76px display, newsletter banner).
- Don't use drop shadows on documentation cards.
- Don't round card corners.
- Don't bold the hero "IBM Documentation" title.
- Don't use charcoal for the docs-specific footer — only `{dotcom-footer}` inverts.
- Don't introduce a second brand color beyond IBM Blue and semantic status colors.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Max | 1584px | Carbon max grid |
| Desktop-XL | 1312px | Hero background image tier |
| Desktop | 1056px | Card grid 3-up → 2-up |
| Tablet | 672px (42rem) | Hero image removed; 1-col cards; hamburger nav |
| Mobile | 320px | Single-column; footer stacks |

### Touch Targets

- Carbon spec: **48px** minimum tap target.
- Search clear button: 64×64px.
- Masthead and TOC control buttons: 48px height.
- Card entire tile is clickable (Carbon `cds--tile--clickable`).

### Collapsing Strategy

- **Masthead**: hamburger below 672px; product name hidden on smallest breakpoints.
- **Hero**: background illustration removed below 672px; search stays full-width 64px tall.
- **Card grid**: 3-up → 2-up at 1056px → 1-up below 672px.
- **Featured docs**: horizontal scroll on all mobile widths.
- **TOC sidebar**: collapses to 48px rail; hidden entirely below 672px on topic pages.
- **Footer**: docs footer stacks; dotcom legal links wrap.

### Image Behavior

- Hero leadspace background swaps at 1312px / 1056px breakpoints (separate CDN assets).
- Product icons in solution cards maintain 48×48px aspect ratio.
- Cloud Pak video scales to `max-width: 100%` below 1056px; editorial copy margin-right clears to 0.

## Iteration Guide

1. Focus on ONE component at a time; reference its `components:` token name.
2. Default body to `{typography.body}` at weight 400 with `letter-spacing: 0.16px`.
3. When adding a section, pick `{colors.canvas}` or `{colors.surface-1}` — maintain the two-surface rhythm.
4. Run `npx @google/design.md lint DESIGN.md` after edits.
5. Add state variants as separate entries (`docs-card-blue-hover`, `text-input-focused`, `button-primary-pressed`).
6. Treat IBM Blue as scarce: links, one blue CTA card, focus underline, TOC active border.
7. Test at **375×812** for mobile portfolio implementations in this repo.

## Known Gaps

- Homepage is a React SPA; masthead loads from `c4d-*` web components — spacing may shift with Carbon for IBM.com version bumps.
- Automated extractors (`designmaxxing`, `skillui`) returned empty tokens for this URL; this file is from manual CSS/HTML analysis.
- Watsonx AI search stream (`ui.watsonxStreamApi`) is disabled in production config inspected.
- Reference mobile snapshot (`reference/ibm-docs-en/mobile.png`) is missing from the repo.
- **Topic pages** (not fully extracted): breadcrumbs, version dropdown, save/feedback/share toolbar, data tables, code snippets, inline notifications, dark-mode full g100 theme swap (`ui.darkMode.enabled: true`).
- **Announcements / Redbooks** sub-pages use larger leadspace headings (40px) and dedicated search bars — follow same Carbon tokens but were not individually audited.
