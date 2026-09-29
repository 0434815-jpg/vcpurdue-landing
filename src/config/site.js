// ============================================================
//  VCPurdue — single source of truth
//  Edit values here; every page picks them up automatically.
// ============================================================

// ---- LINKS -------------------------------------------------
export const links = {
  // Official application form. This is the short link José is
  // circulating publicly (Aug 24). It resolves to the same form as the
  // earlier kgg7s1aiT9HsHe1u8 link — keep this matching his posts.
  apply: 'https://forms.gle/83SmP6dYA4pQB5if7',
  // Optional early-season signup. Empty and unused while the real
  // application is live — set a URL and flip ctaMode to 'interest'
  // if you ever need to collect names before applications open.
  interest: '',
  boilerlink: 'https://boilerlink.purdue.edu/organization/vcpurdue',
  linkedin: 'https://www.linkedin.com/company/purduevc',
  instagram: 'https://www.instagram.com/vcpurdue',
  email: 'pusmvf@purdue.edu',
}

// Which CTA the site leads with.
//   'apply'    — recruiting is open, point at the application (current)
//   'interest' — collect names now, apply later
export const ctaMode = 'apply'

// Guards. A button only becomes clickable when its URL exists AND
// its flag is true, so a placeholder can never ship live again.
export const interestOpen = false
// Fall 2026 applications closed Sept 4; the linked Google Form no
// longer accepts responses. Flip to true (and set a fresh applyDeadline
// below) when the next recruiting cycle's form is live — don't just
// point this at a dead form again.
export const applyOpen = false

// Set to false until BoilerLink registration is approved.
export const boilerlinkLive = false

// Application deadline. Set to '' to hide the deadline callout —
// currently empty because Fall 2026 applications are closed and no
// next date has been confirmed yet.
export const applyDeadline = ''

// ---- CLUB FACTS --------------------------------------------
export const club = {
  name: 'VCPurdue',
  // SAO-approved official RSO name. Purdue policy forbids a club
  // name STARTING with "Purdue", so never shorten to "Purdue VC".
  fullName: 'Venture Capital Club at Purdue',
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
      'An Indiana venture firm investing across the Midwest. They gave us their thesis, we ranked the market against it, and our members presented the findings to their investors.',
  },
  {
    name: 'Elevate Ventures',
    href: 'https://elevateventures.com',
    role: 'Venture Partner',
    blurb:
      "Indiana's most active early-stage investor. One of our three project teams works with them this fall.",
  },
  {
    name: 'Purdue Innovates',
    href: 'https://purdueinnovates.org/build-my-startup',
    role: 'Campus Partner',
    blurb:
      'The office that turns Purdue research into companies. Our members diligence startups coming out of it.',
  },
  {
    name: 'Purdue Research Foundation',
    href: 'https://prf.org',
    role: 'Campus Partner',
    blurb:
      "Purdue's technology commercialization and research-support foundation.",
  },
  {
    name: 'HIVE',
    href: 'https://engineering.purdue.edu/HIVE',
    role: 'Campus Partner',
    blurb:
      "Purdue Engineering's hub for student-led startups. Full name: Hub for Innovation, Ventures, and Entrepreneurship.",
  },
]

// ---- EVENTS ------------------------------------------------
export const events = [
  {
    title: 'VCIC Competition',
    date: 'October – November 2026',
    location: 'Midwest Regionals',
    description:
      'The Venture Capital Investment Competition. Student teams sit on the investor side of the table with real founders, and working VCs judge the calls.',
    upcoming: true,
  },
  {
    title: 'VCPurdue Summit',
    date: 'Spring 2027',
    location: 'Purdue Memorial Union',
    description:
      'A day on campus with investors and founders. Planning starts this fall.',
    upcoming: true,
  },
]

// ---- PROJECTS / TRACK RECORD -------------------------------
export const featuredProject = {
  partner: 'Charmides Capital',
  term: 'Spring 2026',
  headline: 'We ranked the universe.',
  summary:
    'Charmides gave us their thesis and asked which companies fit it. Four months later we came back with a ranked list and presented it to their investors.',
  thesis: [
    'B2B AI software',
    '$500K – $2.5M revenue',
    'Teams under 15',
    'Product, not services',
  ],
  deliverable:
    'Every company sorted into Tier 1, Tier 2, or Tier 3, with a written read on everything that fell outside.',
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
    partner: 'Elevate Ventures',
    focus: "Sourcing and evaluation work with Indiana's most active early-stage investor.",
  },
  {
    partner: 'Purdue Research Foundation',
    focus: "Research and diligence support work with Purdue's technology commercialization office.",
  },
  {
    partner: 'HIVE',
    focus: "Diligence and research support work with Purdue's student venture hub.",
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
