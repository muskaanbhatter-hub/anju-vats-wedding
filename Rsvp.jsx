import Reveal from './Reveal'
import { couple, rsvp, RSVP_MESSAGE } from '../config'

export default function Rsvp() {
  return (
    <>
      <section id="rsvp" className="bg-ivory px-6 py-24 text-center sm:py-32">
        <Reveal className="mx-auto max-w-2xl">
          <p className="eyebrow">Kindly Respond</p>
          <h2 className="heading mt-4 text-4xl italic sm:text-5xl">RSVP</h2>
          <div className="divider mt-8" />
          <p className="mt-8 font-serif text-xl text-ink-soft">Let us know you&rsquo;re coming — reach out to any of us.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {rsvp.map((r) => (
              <a key={r.phone} href={`https://wa.me/91${r.phone}?text=${encodeURIComponent(RSVP_MESSAGE)}`} target="_blank" rel="noreferrer"
                className="rounded-2xl border border-gold-soft/60 bg-white/70 px-5 py-6 transition hover:-translate-y-0.5 hover:shadow-card">
                <p className="font-serif text-2xl italic text-rose-deep">{r.name}</p>
                <p className="mt-1 tracking-widest text-ink">{r.phone}</p>
                <p className="mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-gold">WhatsApp</p>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <footer className="bg-blush-100 px-6 py-14 text-center">
        <p className="font-serif text-4xl italic text-ink sm:text-5xl">{couple.bride} <span className="text-gold">&amp;</span> {couple.groom}</p>
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-ink-soft">12 · 13 December 2026 · Jodhpur</p>
        <p className="mt-6 text-sm text-ink-soft">With love &amp; gratitude 🌸</p>
      </footer>

      <a href="#rsvp" className="btn btn-solid fixed bottom-4 right-4 z-40 !px-5 !py-2.5 shadow-lg shadow-rose-deep/30">RSVP</a>
    </>
  )
}
