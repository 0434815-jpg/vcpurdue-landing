// ============================================================
//  VCPurdue — single source of truth
//  Edit values here; every page picks them up automatically.
//  Only put facts in this file that the club has confirmed.
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
  linkedin: 'https://www.linkedin.com/company/vcpurdue',
  instagram: 'https://www.instagram.com/vcpurdue',
  email: 'pusmvf@purdue.edu',
}

// Pre-filled "Start a conversation" email used on every firm-facing CTA.
export const partnershipMailto = `mailto:${links.email}?subject=Partnership%20Inquiry%20%E2%80%94%20VCPurdue`

// Which CTA the site leads with.
//   'apply'    — recruiting is open, point at the application (current)
//   'interest' — collect names now, apply later
export const ctaMode = 'apply'

// Guards. A button only becomes clickable when its URL exists AND
// its flag is true, so a placeholder can never ship live again.
export const interestOpen = false
// Fall 2026 applications are closed. While false, /apply shows the
// "Applications are closed" page and every Apply button links to it.
// Flip to true (and set a fresh applyDeadline below) only when the next
// cycle's form is live — don't point this at a dead form again.
export const applyOpen = false

// Set to false until BoilerLink registration is approved.
export const boilerlinkLive = false

// Application deadline. Set to '' to hide the deadline callout —
// currently empty because applications are closed and no next date has
// been announced.
export const applyDeadline = ''

// ---- CLUB FACTS --------------------------------------------
export const club = {
  name: 'VCPurdue',
  // SAO-approved official RSO name. Purdue policy forbids a club
  // name STARTING with "Purdue", so never shorten to "Purdue VC".
  fullName: 'Venture Capital Club at Purdue',
  legalNote: 'An independent student organization at Purdue University.',
  // Shown under legalNote in the footer on every page.
  trademarkNote:
    "'Purdue' is a trademark of Purdue University. This site is run by students and is not endorsed by Purdue University.",
  // Campus photos (Purdue Marketing's public PhotoShelter gallery) are for
  // non-commercial use and must not imply Purdue endorsement, sponsorship,
  // or affiliation. Credit shown in the footer on every page.
  campusPhotoCredit: 'Campus photography: Purdue University Marketing and Communications.',
  clubPhotoCredit: 'Photography by Ruby Kivett',
  school: 'Mitchell E. Daniels, Jr. School of Business',
  founded: 'Spring 2026',
  // Fall 2026 class. Update all four together each semester.
  memberCount: '98',
  memberLabel: 'Fall 2026 class',
  colleges: '9',
  projectTeams: '6',
}

// Fall 2026 class makeup. Percentages are shown exactly as given.
// Don't add per-tier (Analyst/Associate) counts here.
export const membership = {
  term: 'Fall 2026',
  classLevels: 5,
  outsideBusiness: '35%',
  byCollege: [
    { label: 'Business', pct: 65 },
    { label: 'Engineering', pct: 19 },
    { label: 'Science', pct: 10 },
    { label: 'Other', pct: 5 },
  ],
  byClass: [
    { label: 'Freshman', pct: 29.6 },
    { label: 'Sophomore', pct: 27.6 },
    { label: 'Junior', pct: 24.5 },
    { label: 'Senior', pct: 9.2 },
    { label: "Master's", pct: 9.2 },
  ],
}

// ---- PARTNERS ----------------------------------------------
// Order matters: this semester's partners first, then past engagements.
// `tagline` is the one-line description each partner uses for itself.
export const partners = [
  {
    name: 'Elevate Ventures',
    href: 'https://elevateventures.com',
    role: 'Venture Partner',
    season: 'Fall 2026',
    tagline: "Indiana's most active early-stage investor.",
    blurb:
      "Indiana's most active early-stage investor. Three of our six project teams work with them this fall: Purdue startup diligence, Startup Indiana diligence, and portfolio follow-up.",
  },
  {
    name: 'Purdue HIVE',
    href: 'https://engineering.purdue.edu/HIVE',
    role: 'Campus Partner',
    season: 'Fall 2026',
    tagline: "Purdue's hub for student-led, tech-driven startups.",
    blurb:
      "Purdue's hub for student-led, tech-driven startups. Two of our project teams are building the first database of Purdue-born startups.",
  },
  {
    name: 'Purdue Research Foundation',
    href: 'https://prf.org',
    role: 'Campus Partner',
    season: 'Fall 2026',
    tagline: 'Turning Purdue innovation into impact since 1930.',
    blurb:
      'Turning Purdue innovation into impact since 1930. One joint team with Purdue Innovates is mapping every grant open to student founders.',
  },
  {
    name: 'Purdue Innovates',
    href: 'https://purdueinnovates.org/build-my-startup',
    role: 'Campus Partner',
    season: 'Fall 2026',
    tagline: "Where Purdue's ideas go from lab to company.",
    blurb:
      "Where Purdue's ideas go from lab to company. One joint team with Purdue Research Foundation is mapping every grant open to student founders.",
  },
  {
    name: 'Charmides Capital',
    href: 'https://charmidescapital.com',
    role: 'Venture Partner',
    season: 'Spring 2026',
    tagline: 'An Indiana venture firm investing across the Midwest.',
    blurb:
      'An Indiana venture firm investing across the Midwest. They gave us their thesis, we ranked the market against it, and our members presented the findings to their investors.',
  },
]

// ---- EVENTS ------------------------------------------------
// TODO (after Saturday, Oct 24, 2026): Purdue VCIC has passed. Replace
// that entry with the result (or remove it), and update `vcic.path` so
// the Midwest Regional becomes the next step. The Oct 24 internal round is
// hosted by VCPurdue; the Midwest Regional and Global Finals are run by
// VCIC, where VCPurdue represents Purdue.
export const events = [
  {
    title: 'Purdue VCIC',
    date: 'Saturday, October 24, 2026',
    time: '8:15 AM – 4:00 PM',
    location: 'Purdue HIVE, BHEE 270',
    description:
      'The Purdue round of VCIC, hosted by VCPurdue. Student teams act as VCs: they diligence three real startups, then pitch an investment to a panel of real VC judges.',
    host: 'Hosted by VCPurdue',
    note: 'Competitors and judges only. Not open to the public.',
    href: 'https://www.vcic.org/events/2027-events/2027-internal-events/2027-undergraduate-purdue-internal-2/',
    linkLabel: 'Official VCIC page',
  },
  {
    title: 'VCPurdue Summit',
    date: 'Spring 2027',
    location: 'Purdue Memorial Union',
    description:
      'A day on campus with investors and founders. Planning starts this fall.',
  },
]

// VCIC explainer + Purdue's path. Stats are from vcic.org.
// Don't add a team count.
// Judges are listed on the official VCIC page (checked Oct 20, 2026): Elevate
// Ventures (Landon Young), Purdue Research Foundation (Richard Sikora), and the
// Indiana Economic Development Corporation (Ryan Locke), plus Purdue faculty.
// The page doesn't call them "investors", so the line says "representatives".
// Re-check the page before the Oct 24 event; judges can change.
export const hostProof =
  'Host of the Purdue VCIC, whose judges include representatives of Elevate Ventures, Purdue Research Foundation, and the Indiana Economic Development Corporation.'

export const vcic = {
  officialUrl:
    'https://www.vcic.org/events/2027-events/2027-internal-events/2027-undergraduate-purdue-internal-2/',
  sourceUrl: 'https://www.vcic.org',
  about:
    "VCIC is the world's largest venture capital competition. Student teams act as VCs: they diligence three real startups, then pitch an investment to a panel of real VC judges.",
  hosted: 'VCPurdue hosts the Purdue VCIC on October 24.',
  represent: 'VCPurdue represents Purdue at VCIC.',
  stats: [
    { value: '1998', label: 'First VCIC' },
    { value: '226', label: 'Schools' },
    { value: '$2.9B+', label: 'Raised by startups' },
  ],
  path: [
    {
      step: '01',
      title: 'Purdue VCIC',
      date: 'Saturday, October 24, 2026',
      place: 'Purdue HIVE, BHEE 270',
      host: 'Hosted by VCPurdue',
    },
    {
      step: '02',
      title: 'Midwest Regional',
      date: 'February 27, 2027',
      place: 'Cincinnati, OH',
    },
    {
      step: '03',
      title: 'Global Finals',
      date: 'April 16–17, 2027',
      place: 'Chapel Hill, NC',
    },
  ],
  photoCaption: 'VCPurdue at the 2026 VCIC Undergraduate Midwest Regional.',
}

// ---- PROJECTS / TRACK RECORD -------------------------------
// Spring 2026 case study. These numbers are historical (Spring 2026),
// not the current roster — never reuse them as current member counts.
// Only the facts below go on the site. No company names, no sectors beyond
// "B2B AI software", no outcomes or counts that aren't listed here.
export const featuredProject = {
  partner: 'Charmides Capital',
  term: 'Spring 2026',
  role: 'Venture Partner',
  // From charmidescapital.com (checked Oct 22, 2026): "a venture capital fund
  // that co-invests with institutional investors in Indiana and the Midwest",
  // investing in early-stage B2B software companies with high growth
  // potential. The site does not say "seed" or "Series A".
  about:
    'An Indiana venture capital fund that co-invests with institutional investors across the Midwest. It backs early-stage B2B software companies with high growth potential.',
  brief:
    'Find and rank pre-seed and seed startups that fit their thesis: innovative software with category-disruption potential.',
  // The screening lens we published (matches our LinkedIn).
  thesis: [
    'B2B AI software',
    '$500K – $2.5M revenue',
    'Teams under 15',
    'Product, not services',
  ],
  stats: [
    { value: '5', label: 'Associates' },
    { value: '30+', label: 'Analysts' },
    { value: '4', label: 'Project teams' },
    { value: '4', label: 'Months' },
  ],
  // Optional: total companies recommended. Leave '' until the club confirms
  // a number; when set, it shows as a numeral on the "Top picks" stage.
  companiesRecommended: '',
  delivered: [
    'Each of four teams screened the market and put forward its top picks',
    'One-page snapshots on every company, deeper memos on the top picks',
    'A shared tracker so no two analysts duplicated work',
    'A shortlist Charmides used for screening and follow-ups',
  ],
  timeline: [
    { when: 'January', what: 'Launch, teams formed' },
    { when: 'March 11', what: 'Partner meeting with Charmides and speaker panel' },
    { when: 'March 25', what: 'Second speaker panel' },
    { when: 'April', what: "Final rankings presented to Charmides' investors" },
  ],
  note: "Company names stay confidential. That's Charmides' pipeline, not ours to share.",
}

// Fall 2026: 6 project teams across 4 partners. `partner` must match a
// name in `partners` above (the card links to that partner's site).
// The PRF + Purdue Innovates team is ONE joint team, so it's listed on
// both cards but counted once in the six.
export const fallProjects = [
  {
    partner: 'Elevate Ventures',
    teams: 3,
    work: [
      'Purdue startup diligence',
      'Startup Indiana diligence',
      'Portfolio follow-up',
    ],
  },
  {
    partner: 'Purdue HIVE',
    teams: 2,
    work: ['Building the first database of Purdue-born startups'],
  },
  {
    partner: 'Purdue Research Foundation',
    teams: 1,
    jointWith: 'Purdue Innovates',
    work: ['Mapping every grant open to student founders'],
  },
  {
    partner: 'Purdue Innovates',
    teams: 1,
    jointWith: 'Purdue Research Foundation',
    work: ['Mapping every grant open to student founders'],
  },
]

// What firms get from a VCPurdue engagement. This is the language
// already used on /partners.
export const deliverables = [
  'Market maps',
  'Competitive landscapes',
  'Diligence memos',
]

// ---- MEMBER TRACKS -----------------------------------------
// The path members move along, in order. Shown on the homepage.
export const tracks = [
  {
    tier: 'Analyst',
    tag: 'Entry',
    description:
      'Learn the fundamentals: reading a deck, sizing a market, testing traction, writing a first-pass memo.',
  },
  {
    tier: 'Associate',
    tag: 'Core',
    description:
      'Lead diligence threads, build financial models, and own deal updates from sourcing through investment committee.',
  },
  {
    tier: 'Senior Associate',
    tag: 'Advanced',
    description:
      'Drive deal flow strategy, coach Associates, and represent the club to founders, operators, and external partners.',
  },
  {
    tier: 'Executive Board',
    tag: 'Leadership',
    description: 'Partners who run the club, each owning one function.',
  },
]

// ---- TODO: facts that would make the site stronger -----------
// Nothing below is rendered. Each item needs a real number or quote
// from the club before it goes on the site — don't fill them in with
// guesses.
//  - Testimonials: a partner quote (firm audience) and a member quote
//    (student audience). No testimonial section is rendered until we
//    have real ones.
//  - Firms: how long a typical engagement runs, a sample/redacted
//    memo or deliverable, how many engagements we can take per
//    semester, and the intake process ("how do I start?" is currently
//    just the email button).
//  - Partner logos: only with each partner's permission.
//  - Students: weekly time commitment and regular meeting day/time
//    (the old FAQ answers for these were removed until confirmed).
//  - Club monogram (the clocktower VC mark used on Instagram) for the
//    nav/footer — needs an SVG.
