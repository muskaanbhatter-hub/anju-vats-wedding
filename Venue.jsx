import Reveal from './Reveal'
import { venue } from '../config'

const Pin = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-rose-deep">
    <path d="M24 43s14-12.5 14-23a14 14 0 10-28 0c0 10.5 14 23 14 23z" /><circle cx="24" cy="20" r="5" />
  </svg>
)

export default function Venue() {
  return (
    <section id="venue" className="bg-ivory px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="eyebrow">The Venue</p>
          <h2 className="heading mt-4 text-4xl italic sm:text-6xl">{venue.name}</h2>
          <p className="mt-3 font-serif text-xl text-ink-soft">{venue.city}</p>
          <div className="divider mt-8" />
        </Reveal>

        <Reveal className="mt-14">
          <img src={venue.photo} alt={`${venue.name}, Jodhpur`} className="w-full rounded-2xl object-cover shadow-card" loading="lazy" />
        </Reveal>

        <Reveal className="mt-8 rounded-2xl border border-gold-soft/60 bg-white/70 px-6 py-8 text-center">
          <div className="flex justify-center"><Pin /></div>
          <p className="mt-3 font-serif text-xl text-ink">{venue.name}</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{venue.address}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={venue.directionsLink} target="_blank" rel="noreferrer" className="btn btn-solid">Get directions</a>
            <a href={venue.mapsLink} target="_blank" rel="noreferrer" className="btn btn-outline">View on Google Maps</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
