// ============================================================
//  VCPurdue — team roster
//
//  To add a photo: drop the image in src/assets/team/, import it
//  at the top of this file, then set `photo:` to the imported
//  variable — NOT a raw string path. Assets under src/ only get
//  bundled and hashed by Vite when they're imported; a string like
//  '/src/assets/team/name.jpg' will 404 in production.
//
//    import namePhoto from '../assets/team/name.jpg'
//    ...
//    photo: namePhoto,
//
//  Photos render with object-cover so they will NOT stretch —
//  any aspect ratio is safe.
//
//  Leave `photo` empty and the card falls back to initials.
//  Leave `bio` empty and the card won't open a modal.
// ============================================================

import josePhoto from '../assets/team/jose.png'
import anshulPhoto from '../assets/team/anshul.png'
import cristobalPhoto from '../assets/team/cristobal.png'
import nilayPhoto from '../assets/team/nilay.png'
import giangPhoto from '../assets/team/giang.png'
import jakePhoto from '../assets/team/jake.png'
import maxwellPhoto from '../assets/team/maxwell.png'
import williamPhoto from '../assets/team/william.png'
import fabricioPhoto from '../assets/team/fabricio.png'
import matthewPhoto from '../assets/team/matthew.png'

export const executiveBoard = [
  {
    name: 'José Sándigo',
    title: 'Founder & Managing Partner',
    initials: 'JS',
    linkedin: 'https://www.linkedin.com/in/josesandigo',
    photo: josePhoto,
    bio: '',
  },
  {
    name: 'Anshul Balachandra',
    title: 'Partner, Operations',
    initials: 'AB',
    linkedin: 'https://www.linkedin.com/in/anshu1b/',
    photo: anshulPhoto,
    bio: '',
  },
  {
    name: 'Cristobal Muñoz',
    title: 'Co-Founder · Partner, Projects',
    initials: 'CM',
    linkedin: 'https://www.linkedin.com/in/cristobal-munoz-legarre-2bb867327',
    photo: cristobalPhoto,
    bio: '',
  },
  {
    name: 'Nilay Mehta',
    title: 'Co-Founder · Partner, Finance',
    initials: 'NM',
    linkedin: 'https://www.linkedin.com/in/nilaymehta1',
    photo: nilayPhoto,
    bio: '',
  },
  {
    name: 'Giang Nguyen',
    title: 'Co-Founder · Partner, Partnerships',
    initials: 'GN',
    linkedin: 'https://www.linkedin.com/in/giangnguyenpurdue',
    photo: giangPhoto,
    bio: '',
  },
  {
    name: 'Jake White',
    title: 'Partner, Marketing',
    initials: 'JW',
    linkedin: 'https://www.linkedin.com/in/jake-white-785b08317',
    photo: jakePhoto,
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
    photo: maxwellPhoto,
    bio: '',
  },
  {
    name: 'William Schnefke',
    title: 'Senior Associate',
    initials: 'WS',
    linkedin: 'https://www.linkedin.com/in/william-schnefke/',
    photo: williamPhoto,
    bio: '',
  },
]

export const advisors = [
  {
    name: "Prof. Fabrício d'Almeida",
    title: 'Founder & Faculty Advisor',
    initials: 'FA',
    linkedin: 'https://www.linkedin.com/in/fabriciodalmeida/',
    photo: fabricioPhoto,
    bio: 'Clinical Assistant Professor of Finance and Academic Director of the MSF Program, Mitchell E. Daniels School of Business.',
  },
  {
    name: 'Prof. Matthew D. Lynall',
    title: 'Founder & Faculty Advisor',
    initials: 'ML',
    linkedin: 'https://www.linkedin.com/in/mlynall/',
    photo: matthewPhoto,
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
