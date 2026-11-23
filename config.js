// ─────────────────────────────────────────────────────────────
//  Everything you may want to edit lives in this one file.
// ─────────────────────────────────────────────────────────────
import hero from './assets/hero.jpg'
import g1 from './assets/g1.jpg'
import g2 from './assets/g2.jpg'
import g4 from './assets/g4.jpg'
import g5 from './assets/g5.jpg'
import g6 from './assets/g6.jpg'
import cover from './assets/cards/cover.jpg'
import haldi from './assets/cards/haldi.jpg'
import sangeet from './assets/cards/sangeet.jpg'
import mayra from './assets/cards/mayra.jpg'
import wedding from './assets/cards/wedding.jpg'
import cricket from './assets/cards/cricket.jpg'
import family from './assets/cards/family.jpg'
import venuePhoto from './assets/venue.jpg'

// Background song: drop an .mp3 into src/assets/ (any filename) and it is picked up automatically.
const songs = import.meta.glob('./assets/*.mp3', { eager: true, query: '?url', import: 'default' })
export const MUSIC_SRC = Object.values(songs)[0] || null
export const MUSIC_TITLE = 'Until I Found You'
// Fallback while no mp3 is in src/assets: stream from YouTube (works only on the deployed site).
export const YT_ID = null
export const YT_START = 60      // seconds: skips the intro, begins in the middle of the song
export const YT_RATE = 0.9      // slightly slowed for a softer, lo-fi feel (YouTube allows 0.25-2)

export const couple = { bride: 'Anju', groom: 'Vats' }
export const parents = {
  bride: 'D/o Smt. Premlata and Shri Shiv Prakash Bhatter',
  groom: 'S/o Smt. Kamini and Shri Kirti Ji Maheshwari',
}

// Wedding weekend starts here (IST). Used by the countdown.
export const COUNTDOWN_TARGET = '2026-12-12T11:30:00+05:30'

export const art = { cover, haldi, sangeet, mayra, wedding, cricket, family }
export const images = { hero }

export const venue = {
  name: 'Marugarh Palace',
  city: 'Jaisalmer Bypass Rd, Jodhpur',
  photo: venuePhoto,
  address: 'The Marugarh Resort & Spa, Chopasni, Jaisalmer Bypass Rd, Gopal Bari, Jodhpur, Rajasthan 342014',
  // Both links open the same place (checked): The Marugarh Resort & Spa, Jodhpur.
  mapsLink: 'https://maps.app.goo.gl/wpotjjkiNVTZ47Pu7',
  directionsLink: 'https://www.google.com/maps/dir/?api=1&destination=The+Marugarh+Resort+%26+Spa%2C+Chopasni%2C+Jaisalmer+Bypass+Rd%2C+Jodhpur%2C+Rajasthan+342014',
}

export const rsvp = [
  { name: 'Harish', phone: '9829021808' },
  { name: 'Raju', phone: '9079045274' },
  { name: 'Chandar', phone: '8114403891' },
]
export const RSVP_MESSAGE = 'Hi! I would love to attend Anju & Vats’ wedding. Number of guests: '

// Swipeable photo story: 5 photos, each with a short note (edit the notes freely).
export const gallery = [
  { src: g2, note: 'Close, always' },
  { src: g5, note: 'Laughing in the lane' },
  { src: g1, note: 'Dancing by the lake' },
  { src: g6, note: 'Under the string lights' },
  { src: g4, note: 'A quiet moment on the bench' },
]

const sw = {
  Pastels: ['#F7D9D6', '#DDEBDD', '#E3DDF0', '#F8EBC8'],
  Blingy: ['#D9C497', '#C9CED6', '#E8B8B5', '#B8975A'],
  Red: ['#B5373F', '#E27A9A', '#EE9A4D'],
  Ivory: ['#FBF3E4', '#E9D9B0', '#C9A45C'],
  Tee: ['#6F8A4A', '#E9C95B', '#FBF3E4'],
}

// Dates/times are IST. Only start times are shown, except where the printed card gives an end time.
// `cal: null` hides the Add-to-Calendar link. `blocks` = events shown together as one group.
const E = {
  haldi: { key: 'haldi', name: 'Haldi', time: '11:30 AM – 1:00 PM', note: 'Followed by lunch',
    dress: 'Pastels', swatches: sw.Pastels, cal: { start: '20261212T113000', end: '20261212T130000' } },
  sangeet: { key: 'sangeet', name: 'Sangeet Celebration', time: '7:30 PM onwards', note: 'Followed by dinner',
    dress: 'Blingy', swatches: sw.Blingy, cal: { start: '20261212T193000', end: '20261212T203000' } },
  mayra: { key: 'mayra', name: 'Mayra', time: '11:30 AM – 1:00 PM', note: 'Followed by lunch',
    dress: 'Traditional Red / Pink / Orange', swatches: sw.Red, cal: { start: '20261213T113000', end: '20261213T130000' } },
  cricket: { key: 'cricket', name: 'Cricket Match', time: '9:30 AM onwards', note: 'T-shirt will be provided',
    dress: 'Team T-shirt provided', swatches: sw.Tee, cal: { start: '20261213T093000', end: '20261213T103000' } },
  wedding: { key: 'wedding', name: 'Wedding', time: '7:30 PM onwards', note: 'Baraat Swagat & Reception · Dinner · Phere Midnight 1:30 AM',
    dress: 'Ivory / Golden', swatches: sw.Ivory, cal: { start: '20261213T193000', end: '20261213T203000' } },
}

export const days = [
  { label: 'Day One', date: 'Saturday, 12 December', blocks: [[E.haldi], [E.sangeet]] },
  { label: 'Day Two', date: 'Sunday, 13 December', blocks: [[E.mayra, E.cricket], [E.wedding]] },
]

// Family names exactly as on the printed card.
export const familyGroups = {
  left: [
    ['Warm Welcome', ['Santosh - Harish', 'Rekha - Ashwani (Raju)', 'Seema - Chandra Prakash', 'Rekha - Kamal', 'Mahima - Raunak', 'Urvashi - Saumil', 'Divya - Hitesh Lohiya']],
    ['Cordial Request', ['Kamla - Ramchandra Ji Rathi', 'Shanti - Late Shyam Sundar Ji Phophaliya', 'Meena - Gautam Chand Ji Rathi', 'Rekha - Purushottam Ji Kalantri', 'Nirmala - Chetanprakash Ji Lohiya', 'Prabha - Suresh Ji Soni', 'Uma - Kamal Ji Mundra', 'Usha - Shyam Ji Boob', 'Ritika - Anurag Ji Kabra', 'Saroj - Ashish Ji Soni', 'Lakshita - Parth Ji Maheshwari', 'Saloni - Rohit Ji Mantri']],
    ['Warm Regards', ['Mayank, Lokesh, Kushal, Piyush, Vivek, Muskaan, Jiya']],
  ],
  right: [
    ['Maternal Family', ['Hariprashad Ji, Gopaldas Ji, Dwarkadas Ji, Shantilal Ji, Laxmi Narayan Ji, Suresh Ji, Kamal Kishore Ji, Jethmal Ji, Subash Ji, Himanshu and Chandak Family (Pokran), Inderchand Ji Boob, Devilal Ji Tawari']],
    ['Great Maternal Family', ['Omprakash Ji, Raju Ji, Lunkaran Ji, Mukesh Ji Rathi (Falsund)']],
    ['Great Paternal Family', ['Jethmal Ji, Tejraj Ji, Anil Ji, Ram Kishore Ji, Satya Narayan Ji, Nand Kishore Ji, Suresh Ji (Taparia)']],
    ['Special Requests', ['Bhanwarlal Rathi, Murli Manohar Phophaliya, Mahesh Rathi']],
    ['Mithi Manuhar', ['Dhruvansh, Anisha, Shivansh, Chirag, Princy']],
  ],
  firms: ['M/s Gopi Kishan Bhatter', 'Tulsi Agro Industries'],
}
