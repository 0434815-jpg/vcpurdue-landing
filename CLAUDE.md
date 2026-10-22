# VCPurdue website

Marketing site for **VCPurdue — Venture Capital Club at Purdue**, a student-led venture capital organization at Purdue's Daniels School of Business. Maintained by Jake White, Partner of Marketing.

Live: https://vcpurdue.com (Vercel deploys `main`; every branch/PR gets a preview URL).

**Never push directly to `main`.** Work on a branch, open a PR, review the Vercel preview, then merge.

## Stack

React 19 · Vite 8 · Tailwind 4 (via `@tailwindcss/vite`) · react-router-dom 7

No TypeScript, no component library, no animation library. Plain JSX + Tailwind utility classes.

```bash
npm run dev      # local dev
npm run build    # production build
npm run lint
```

## Architecture

**All content lives in two config files. Never hardcode content into components.**

- `src/config/site.js` — links, club facts, class makeup, partners, events, VCIC, project write-ups, member tracks, and a TODO list of facts we still need
- `src/config/team.js` — every person, grouped: `executiveBoard`, `seniorAssociates`, `advisors`, `founders`

Pages in `src/pages/` compose sections inline. Shared pieces in `src/components/`:

- `Reveal.jsx` (+ `stagger.js`) — scroll reveal, IntersectionObserver, no dependencies. Wrap blocks, cards, photos. Fades in + rises 16px once at ~15% visible; hides only after mount; does nothing under `prefers-reduced-motion`.
- `Eyebrow.jsx` — tracked-caps label with a gold rule. `dark` on dark sections.
- `Button.jsx` — all buttons (`to` = in-app route, `href` = anything else; https opens a new tab).
- `LinkCard.jsx` — a card that is one big external link (gold left rule, gold border + arrow on hover).
- `StatStrip.jsx` — `StatStrip` (big gold numerals), `FactStrip` (label/value cells), `StatStack` (vertical numerals).
- `SplitBar.jsx` — proportional bar with legend (no chart library).
- `ApplyButton.jsx` — links to the application only while `applyOpen` is true; otherwise goes to the on-site `/apply` page.
- `PersonCard.jsx` — 4:5 portrait + name/title; bio modal if `bio` is set, else LinkedIn.
- `SidePhoto.jsx` — a photo beside a text section at its native aspect ratio, with an offset gold frame.
- `Navbar.jsx`, `Footer.jsx`

Routes: `/` `/team` `/projects` `/apply` `/events` `/venture-capital` `/partners`

`vercel.json` rewrites all paths to `index.html` so deep links don't 404.

## Design system

Tokens are in `src/index.css` under `@theme`. Use the Tailwind classes, not raw hex. **The palette is locked** (SAO brand review) — don't add colors; use alpha (`white/5`, `ink/70`) of these.

| Token | Value | Use |
|---|---|---|
| `ivory` | `#F5EEDD` | light section background |
| `ink` | `#0A0A0A` | dark section background, body text |
| `gold` | `#B5942C` | accents, numerals, CTAs |
| `gold-light` | `#D4B66A` | gold hover, highlights |

- Fonts: headings/numerals use `--font-display` (`font-display`; `font-serif` is a legacy alias to the same font). Body, nav, buttons: Lato (`--font-sans`, 400 and 700); headings are Lora. The "VCPurdue" wordmark (`font-wordmark`, Navbar + Footer) is Lora too. To change the heading font, edit `--font-display`, `--font-wordmark`, the `--font-serif` alias, and the Google Fonts link in `index.html` — nothing else.
- Type scale classes (in `index.css`): `type-hero` (~62px desktop, 36px mobile), `type-h2` (44px / 36px), `type-h3`, `type-numeral`. Body is 18px / 1.6.
- Gold text only goes on dark backgrounds (it's too faint on ivory); on ivory use ink with a gold rule/underline. Secondary text is `ink/70`+ on ivory and `white/70`+ on ink.
- Sections alternate `bg-ivory` and `bg-ink`. Section padding `py-24`, `px-6`; containers `max-w-6xl` / `max-w-5xl` / `max-w-4xl`.
- Visual language mirrors the club's Instagram graphics: black ground, thin gold rules/frames, tracked gold small-caps eyebrows, big gold numerals, numbered gold blocks, cards with a gold left border.
- Motion: only `Reveal` and small hover transitions. No parallax, scroll-jacking, animated counters, or re-animating.

## Rules

**Never ship a placeholder URL as a live href.** The Apply button once pointed at `forms.gle/placeholder` for months. `applyOpen` / `boilerlinkLive` gate those links. If a destination doesn't exist yet, gate it — don't link it.

**Photos use `object-cover` inside a fixed-ratio box.** Never stretch. Never commit originals — web copies only (max ~2000px long edge, JPEG ~80, under ~500KB; `sips` is fine). Tall group shots: don't crop into thin banners or cut off the front row. Team photos are 4:5 crops with eyes in the upper third; import them in `team.js` (never a raw `/src/...` string path — it breaks in production builds).

**No invented claims or numbers.** Only facts the club has confirmed live in `site.js`. If a stronger number would help, add it to the TODO list at the bottom of `site.js` instead of guessing. Never show per-tier (Analyst/Associate) counts for the current class; the Spring 2026 Charmides numbers are historical and labeled as such.

**Say "VCPurdue" or "Venture Capital Club at Purdue"** — never "Purdue VC" (Purdue policy forbids a club name starting with "Purdue"). The old slogan "Where Founders, Investors & Ventures Converge" belongs to an IU club — never use it.

**VCIC:** VCPurdue hosts the Purdue VCIC internal round (Oct 24, 2026) and represents Purdue at the Midwest Regional and Global Finals, which VCIC runs. Don't say VCPurdue organizes the Regional or Finals. Purdue VCIC is competitors and judges only.

**Campus photos:** exactly two, both from Purdue Marketing's public PhotoShelter gallery — the Memorial Union at dusk (homepage hero) and the Bell Tower (slim divider on /events). Purdue's terms: non-commercial use only, nothing that implies Purdue endorsement, sponsorship, or affiliation. Don't add more campus or stock photos; club photos (Ruby Kivett) are the imagery everywhere else. The footer carries the credit and the trademark/non-endorsement line on every page (`club` in `site.js`). Don't write copy that implies Purdue runs the club (e.g. "Purdue's student-led…").

**Don't add dependencies** without asking. The value of this repo to a student org is that the next person can read it.

**Prefer editing config over editing components.** If a task looks like "change the text/people/dates," it's a config edit.

## Current state (Fall 2026)

- Applications are **closed** (`applyOpen: false`). `/apply` shows the closed page; the nav says "Recruiting". Next semester's dates are not announced.
- Fall 2026 class: 98 members, 9 Purdue colleges, 6 project teams across 4 partners (Elevate Ventures, Purdue HIVE, Purdue Research Foundation, Purdue Innovates).
- VCIC: Purdue VCIC is Sat Oct 24, 2026 (Purdue HIVE, BHEE 270), hosted by VCPurdue. **After it passes, update `events` and `vcic.path` in `site.js`** (TODO comment is there).
- BoilerLink registration pending (`boilerlinkLive: false`).

### Open TODOs

See the TODO block at the bottom of `src/config/site.js` (testimonials, firm-facing proof and intake process, partner logos with permission, student time commitment / meeting time, club monogram SVG).

## Voice

Confident, specific, active voice. This is a working investment team, not a study group. Name real firms, real deliverables, real numbers. Avoid "empowering students," "passion for finance," "innovative ecosystem." Don't oversell — the Charmides engagement is impressive on its own without adjectives.
