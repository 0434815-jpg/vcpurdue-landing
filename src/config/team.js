// ============================================================
//  VCPurdue — team roster
//
//  To add a photo: drop the image in src/assets/team/ then set
//  photo: '/src/assets/team/firstname.jpg'  (or import it).
//  Photos render with object-cover so they will NOT stretch —
//  any aspect ratio is safe.
//
//  Leave `photo` empty and the card falls back to initials.
//  Leave `bio` empty and the card won't open a modal.
// ============================================================

export const executiveBoard = [
  {
    name: 'José Sándigo',
    title: 'Founder & Managing Partner',
    initials: 'JS',
    linkedin: 'https://www.linkedin.com/in/josesandigo',
    photo: '',
    bio: '',
  },
  {
    name: 'Anshul Balachandra',
    title: 'Partner, Operations',
    initials: 'AB',
    linkedin: 'https://www.linkedin.com/in/anshu1b/',
    photo: '',
    bio: '',
  },
  {
    name: 'Cristobal Muñoz',
    title: 'Co-Founder · Partner, Projects',
    initials: 'CM',
    linkedin: 'https://www.linkedin.com/in/cristobal-munoz-legarre-2bb867327',
    photo: '',
    bio: '',
  },
  {
    name: 'Nilay Mehta',
    title: 'Co-Founder · Partner, Finance',
    initials: 'NM',
    linkedin: 'https://www.linkedin.com/in/nilaymehta1',
    photo: '',
    bio: '',
  },
  {
    name: 'Giang Nguyen',
    title: 'Co-Founder · Partner, Partnerships',
    initials: 'GN',
    linkedin: 'https://www.linkedin.com/in/giangnguyenpurdue',
    photo: '',
    bio: '',
  },
  {
    name: 'Jake White',
    title: 'Partner, Marketing',
    initials: 'JW',
    linkedin: 'https://www.linkedin.com/in/jake-white-785b08317',
    photo: '',
    bio: '',
  },
]

// Anshul moved up to Partner, Operations (Aug 21) — he's on the
// Executive Board above, not here.
export const seniorAssociates = [
  {
    name: 'Maxwell Klug',
    title: 'Senior Associate',
    initials: 'MK',
    linkedin: 'https://www.linkedin.com/in/maxwell-klug/',
    photo: '',
    bio: '',
  },
  {
    name: 'William Schnefke',
    title: 'Senior Associate',
    initials: 'WS',
    linkedin: 'https://www.linkedin.com/in/william-schnefke/',
    photo: '',
    bio: '',
  },
]

export const advisors = [
  {
    name: "Prof. Fabrício d'Almeida",
    title: 'Founder & Faculty Advisor',
    initials: 'FA',
    linkedin: 'https://www.linkedin.com/in/fabriciodalmeida/',
    photo: '',
    bio: 'Clinical Assistant Professor of Finance and Academic Director of the MSF Program, Mitchell E. Daniels School of Business.',
  },
  {
    name: 'Prof. Matthew D. Lynall',
    title: 'Founder & Faculty Advisor',
    initials: 'ML',
    linkedin: 'https://www.linkedin.com/in/mlynall/',
    photo: '',
    bio: 'Clinical Professor, Mitchell E. Daniels School of Business. Director, NSF I-Corps Hub, Great Lakes Region.',
  },
]

// RESOLVED — José's May 6 question about Founders/Co-Founders.
// Per the official founding-team graphics:
//   Founders    — Fabrício d'Almeida, Matthew D. Lynall, José Sándigo
//   Co-Founders — Cristobal Muñoz, Giang Nguyen, Nilay Mehta
//                 (Hieu Nguyen was also a co-founder but left the club
//                  in Aug 2026 and was removed at José's request)
// Reflected in each person's title above rather than a duplicate
// section. Leave this empty unless you want a separate block.
export const founders = []
