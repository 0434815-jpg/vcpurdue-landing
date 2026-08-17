// ============================================================
//  VCPurdue — single source of truth
//  Edit values here; every page picks them up automatically.
// ============================================================

// ---- LINKS -------------------------------------------------
export const links = {
  apply: 'https://docs.google.com/forms/d/e/1FAIpQLSc1jeMiUUKdBlJif2qESicBuSnBCtp1PE7Z4TuJLuPucregjA/viewform',
  boilerlink: 'https://boilerlink.purdue.edu/organization/vcpurdue',
  linkedin: 'https://www.linkedin.com/company/purduevc',
  instagram: 'https://www.instagram.com/pusmvf',
  email: 'pusmvf@purdue.edu',
}

// Set to false until the Google Form is live — Apply buttons
// will show "Applications open soon" instead of a dead link.
export const applyOpen = true

// Set to false until BoilerLink registration is approved.
export const boilerlinkLive = false

// ---- CLUB FACTS --------------------------------------------
export const club = {
  name: 'VCPurdue',
  fullName: 'Venture Capital at Purdue',
  legalNote: 'An independent student organization at Purdue University.',
  school: 'Mitchell E. Daniels, Jr. School of Business',
  founded: 'Spring 2026',
  memberCount: '40+',
  associateCount: '5',
  analystCount: '30+',
}

// ---- PARTNERS ----------------------------------------------
export const partners = [
  {
    name: 'Charmides Capital',
    href: 'https://charmidescapital.com',
    role: 'Venture Partner',
    blurb:
      'An Indiana-based venture firm investing across the Midwest. Our members completed a full research engagement for Charmides and presented findings directly to their investors.',
  },
  {
    name: 'Elevate Ventures',
    href: 'https://elevateventures.com',
    role: 'Venture Partner',
    blurb:
      "Indiana's most active early-stage investor, backing high-potential startups across the state. A confirmed project partner for the fall semester.",
  },
  {
    name: 'Purdue Innovates',
    href: 'https://purdueinnovates.org/build-my-startup',
    role: 'Campus Partner',
    blurb:
      "Purdue's commercialization and startup engine, connecting university research to venture funding. A confirmed project partner for the fall semester.",
  },
]

// ---- EVENTS ------------------------------------------------
export const events = [
  {
    title: 'B-Involved Activities Fair',
    date: 'August 22, 2026',
    time: '12:00 – 3:00 PM',
    location: 'Purdue Campus',
    description:
      'Come find our table. Meet the team, ask what a semester actually looks like, and get details on fall recruiting.',
    upcoming: true,
  },
  {
    title: 'VCIC Competition',
    date: 'October – November 2026',
    location: 'Midwest Regionals',
    description:
      'The Venture Capital Investment Competition puts student teams in the investor seat against real founders, judged by working VCs.',
    upcoming: true,
  },
  {
    title: 'VCPurdue Summit',
    date: 'Spring 2027',
    location: 'Purdue Memorial Union',
    description:
      'Our flagship event, bringing investors, founders, and students together on campus.',
    upcoming: true,
  },
]

// ---- PROJECTS / TRACK RECORD -------------------------------
export const featuredProject = {
  partner: 'Charmides Capital',
  term: 'Spring 2026',
  headline: 'We ranked the universe.',
  summary:
    'VCPurdue partnered with Charmides Capital to run a full research engagement and present our findings directly to their investors.',
  thesis: [
    'B2B AI software',
    '$500K – $2.5M revenue',
    'Teams under 15',
    'Product, not services',
  ],
  deliverable:
    'A tiered ranking of the market — Tier 1, Tier 2, Tier 3 — plus a strategic overview of everything else.',
  team: '5 Associates. 30+ Analysts. One investment board.',
  timeline: [
    { month: 'January', milestone: 'Alliances forged' },
    { month: 'February', milestone: 'Team aligned' },
    { month: 'March', milestone: 'Deep research' },
    { month: 'April', milestone: 'Execution' },
  ],
}

export const fallProjects = [
  {
    partner: 'Charmides Capital',
    focus: 'Continued deal research and diligence support across the Midwest.',
  },
  {
    partner: 'Elevate Ventures',
    focus: "Sourcing and evaluation work with Indiana's most active early-stage investor.",
  },
  {
    partner: 'Purdue Innovates',
    focus: 'Diligence on Purdue-affiliated startups coming out of university research.',
  },
]

// ---- MEMBER TRACKS -----------------------------------------
export const tracks = [
  {
    tier: 'Analyst',
    tag: 'Entry',
    description:
      'Learn the fundamentals — how to read a deck, size a market, pressure-test traction, and write a first-pass memo.',
    points: [
      'Onboarding curriculum: term sheets, cap tables, sourcing',
      'Pair with an Associate on live diligence',
      'Contribute research to a partner engagement',
    ],
  },
  {
    tier: 'Associate',
    tag: 'Core',
    description:
      'Lead diligence threads, build financial models, and own deal updates from sourcing through investment committee.',
    points: [
      'Lead memos through the IC pipeline',
      'Own founder calls and market deep-dives',
      'Compete on VCIC teams',
    ],
  },
  {
    tier: 'Senior Associate',
    tag: 'Advanced',
    description:
      'Drive deal flow strategy, coach Associates, and represent the club to founders, operators, and external partners.',
    points: [
      'Shape sector theses and sourcing strategy',
      'Liaise directly with partner firms',
      'Path to the Partner-level Executive Board',
    ],
  },
]
