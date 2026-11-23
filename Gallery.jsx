import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { gallery } from '../config'

// Swipe (touch) or use the arrows / dots. Each photo has a short note under it.
export default function Gallery() {
  const track = useRef(null)
  const [i, setI] = useState(0)

  useEffect(() => {
    const el = track.current
    const onScroll = () => {
      const w = el.firstElementChild.getBoundingClientRect().width
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0
      setI(Math.round(el.scrollLeft / (w + gap)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const go = (n) => {
    const el = track.current
    const k = (n + gallery.length) % gallery.length
    const w = el.firstElementChild.getBoundingClientRect().width
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    el.scrollTo({ left: k * (w + gap), behavior: 'smooth' })
  }

  return (
    <section id="gallery" className="overflow-hidden bg-blush-50 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-xl px-5 text-center">
        <p className="eyebrow">Our Story So Far</p>
        <h2 className="heading mt-4 text-4xl sm:text-6xl">Moments</h2>
        <div className="divider mt-8" />
        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-ink-soft">Swipe →</p>
      </Reveal>

      <Reveal className="relative mx-auto mt-10 max-w-3xl">
        <div
          ref={track}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[10%] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-[20%] [&::-webkit-scrollbar]:hidden"
        >
          {gallery.map((g, k) => (
            <figure key={g.src} className="w-[80%] shrink-0 snap-center sm:w-[60%]">
              <div className={`overflow-hidden rounded-2xl shadow-card transition duration-500 ${k === i ? 'scale-100' : 'scale-[0.94] opacity-70'}`}>
                <img src={g.src} alt={g.note} loading="lazy" draggable="false" className="aspect-[4/5] w-full object-cover" />
              </div>
              <figcaption className={`mt-4 text-center font-serif text-xl italic text-rose-deep transition ${k === i ? 'opacity-100' : 'opacity-0'}`}>
                {g.note}
              </figcaption>
            </figure>
          ))}
        </div>

        <button onClick={() => go(i - 1)} aria-label="Previous photo" className="absolute left-2 top-[38%] hidden h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-2xl text-rose-deep shadow sm:flex">‹</button>
        <button onClick={() => go(i + 1)} aria-label="Next photo" className="absolute right-2 top-[38%] hidden h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-2xl text-rose-deep shadow sm:flex">›</button>

        <div className="mt-6 flex justify-center gap-2">
          {gallery.map((g, k) => (
            <button key={g.src} onClick={() => go(k)} aria-label={`Photo ${k + 1}`} className={`h-2 rounded-full transition-all ${k === i ? 'w-6 bg-rose-deep' : 'w-2 bg-gold-soft'}`} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
