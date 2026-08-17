# VCPurdue website

Marketing site for **Venture Capital at Purdue (VCPurdue)** — a student-led venture capital organization at Purdue's Daniels School of Business. Maintained by Jake White, Partner of Marketing.

Deployed on Vercel: https://vcpurdue-landing.vercel.app/

## Stack

React 19 · Vite 8 · Tailwind 4 (via `@tailwindcss/vite`) · react-router-dom 7

No TypeScript, no shadcn, no component library. Plain JSX + Tailwind utility classes.

```bash
npm run dev      # local dev
npm run build    # production build
npm run lint
```

## Architecture

**All content lives in two config files. Never hardcode content into components.**

- `src/config/site.js` — links, club stats, partners, events, project write-ups, member tracks
- `src/config/team.js` — every person, grouped: `executiveBoard`, `seniorAssociates`, `advisors`, `founders`

Pages in `src/pages/` compose sections inline. Shared pieces in `src/components/`:

- `ApplyButton.jsx` — every Apply/Join CTA on the site. Reads `links.apply` + `applyOpen`.
- `PersonCard.jsx` — avatar + name + title. Opens a bio modal if `bio` is set, else links to LinkedIn.
- `Navbar.jsx` / `Footer.jsx`

Routes: `/` `/team` `/projects` `/apply` `/events` `/venture-capital` `/partners`

`vercel.json` rewrites all paths to `index.html` so deep links don't 404.

## Design system

Tokens are in `src/index.css` under `@theme`. Use the Tailwind classes, not raw hex.

| Token | Value | Use |
|---|---|---|
| `ivory` | `#F5EEDD` | light section background |
| `ink` | `#0A0A0A` | dark section background, body text |
| `gold` | `#B5942C` | accents, eyebrows, CTAs |
| `gold-light` | `#D4B66A` | gold hover state |

- Display type: `font-serif` (Playfair Display). Body: `font-sans` (Inter).
- Sections alternate `bg-ivory` and `bg-ink`. Keep that rhythm.
- Section padding: `py-24` or `py-28`, `px-6`. Containers: `max-w-4xl` / `max-w-5xl` / `max-w-6xl`.
- Recurring motifs: gold italic eyebrow label above headings; `w-8 h-px bg-gold` divider under headings; grid "hairlines" via `gap-px bg-gold/20` on a bordered parent.
- Transitions are `duration-200` (interactive) or `duration-300` (hover reveals).

## Rules

**Never ship a placeholder URL as a live href.** The Apply button pointed at `forms.gle/placeholder` in three files for months and shipped to production. That's why `ApplyButton` exists and why `applyOpen` / `boilerlinkLive` flags gate those links. If a destination doesn't exist yet, gate it — don't link it.

**Photos use `object-cover` inside a fixed-size container.** Source images are arbitrary aspect ratios. Stretched photos were explicit feedback from the club president.

**Don't add dependencies** without asking. The value of this repo to a student org is that the next person can read it.

**Prefer editing config over editing components.** If a task looks like "change the text/people/dates," it's a config edit.

## Current state

Applications are **closed** (`applyOpen: false`) — buttons render "Applications Open Soon". BoilerLink registration is pending (`boilerlinkLive: false`) so those buttons are hidden.

### Open TODOs

- `src/config/site.js` — real Google Form URL, then `applyOpen: true`
- `src/config/team.js` — `founders` array is empty; club president asked for Founders/Co-Founders placement but hasn't said who
- `src/config/team.js` — "Prof. Matthew" needs a last name; no `photo` set on any of the 11 people
- `src/pages/Apply.jsx` — the 4 recruiting steps have placeholder timing ("First week of classes"), needs real dates
- Delete orphaned pre-router components: `Hero` `WhoWeAre` `Mission` `Values` `OurWork` `JoinUs` `Team` `Partners` `Events` in `src/components/`. Nothing imports them.

## Club facts (for copy)

- Founded Spring 2026 as a rebrand of SMVF. Legal name change still in progress.
- ~40 members. Tracks: Analyst → Associate → Senior Associate → Partner (exec board).
- Exec board of 6 structured as Partners. President: José Sándigo.
- Partners: Charmides Capital, Elevate Ventures, Purdue Innovates.
- Advisor: Prof. Fabrício d'Almeida, Daniels School of Business.
- Spring 2026: 5 Associates + 30+ Analysts ran a research engagement for Charmides Capital — B2B AI software thesis, $500K–$2.5M revenue, teams under 15 — and delivered a Tier 1/2/3 market ranking presented directly to Charmides' investors. This is the club's strongest credibility asset; it's already public on LinkedIn.
- Contact: pusmvf@purdue.edu (new official address pending SAO approval)

## Voice

Confident, specific, active voice. This is a working investment team, not a study group. Name real firms, real deliverables, real numbers. Avoid "empowering students," "passion for finance," "innovative ecosystem." Don't oversell — the Charmides engagement is impressive on its own without adjectives.
