import Reveal from './Reveal'
import { couple, parents } from '../config'

// Original ornaments (inline SVG) so the section matches the site's blush / ivory / gold palette.
const Lotus = ({ className = '' }) => (
  <svg viewBox="0 0 120 60" className={className} fill="none" stroke="#B8975A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M60 52 C48 44 44 30 60 10 C76 30 72 44 60 52Z" />
    <path d="M60 52 C42 50 28 40 26 24 C42 26 54 34 60 52Z" />
    <path d="M60 52 C78 50 92 40 94 24 C78 26 66 34 60 52Z" />
    <path d="M60 52 C34 54 14 48 6 34 C26 32 46 40 60 52Z" opacity=".6" />
    <path d="M60 52 C86 54 106 48 114 34 C94 32 74 40 60 52Z" opacity=".6" />
  </svg>
)
const Sprig = ({ flip = false }) => (
  <svg viewBox="0 0 90 90" className={`h-16 w-16 sm:h-20 sm:w-20 ${flip ? '-scale-x-100' : ''}`} fill="none" stroke="#D9C497" strokeWidth="1.3" strokeLinecap="round" aria-hidden="true">
    <path d="M6 84 C 8 50 30 20 84 6" />
    {[[18, 62], [26, 46], [38, 32], [54, 20], [70, 12]].map(([x, y], k) => (
      <g key={k}><path d={`M${x} ${y} q-12 -2 -14 -12 q12 0 14 12z`} fill="#F2D0CB" fillOpacity=".55" /><path d={`M${x} ${y} q12 6 12 16 q-12 -4 -12 -16z`} fill="#F2D0CB" fillOpacity=".35" /></g>
    ))}
  </svg>
)
const Divider = () => (
  <div className="mx-auto my-6 flex items-center justify-center gap-3 text-gold" aria-hidden="true">
    <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold" />
    <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M10 0l2.6 7.4L20 10l-7.4 2.6L10 20l-2.6-7.4L0 10l7.4-2.6z" /></svg>
    <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold" />
  </div>
)

const dots = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28'><path d='M14 11l3 3-3 3-3-3z' fill='%23B8975A' fill-opacity='.10'/></svg>")`

export default function Invitation() {
  return (
    <section id="invitation" className="relative overflow-hidden px-4 py-24 sm:py-32" style={{ background: 'linear-gradient(180deg,#FBF7F2 0%,#F9E6E2 55%,#FBF7F2 100%)' }}>
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: dots }} aria-hidden="true" />

      <Reveal className="relative mx-auto max-w-[480px]">
        {/* arch-shaped invitation panel with a double gold frame */}
        <div className="rounded-t-[240px] rounded-b-[2rem] p-[7px] shadow-card" style={{ background: 'linear-gradient(160deg,#D9C497,#B8975A 50%,#D9C497)' }}>
          <div className="rounded-t-[234px] rounded-b-[1.7rem] bg-ivory p-[5px]">
            <div className="relative rounded-t-[229px] rounded-b-[1.5rem] border border-gold-soft/70 px-7 pb-32 pt-16 text-center sm:px-12" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #FFFFFF 0%, #FBF4EA 55%, #F7EBDD 100%)' }}>
              <div className="absolute bottom-2 left-2"><Sprig /></div>
              <div className="absolute bottom-2 right-2"><Sprig flip /></div>

              <Lotus className="mx-auto h-12 w-24" />
              <p className="mt-5 font-deva text-xl text-rose-deep sm:text-2xl">श्री गणेशाय नमः</p>
              <p className="mt-1 font-deva text-xl text-rose-deep sm:text-2xl">श्री पित्राय नमः</p>

              <Divider />
              <p className="font-deva text-[0.95rem] leading-loose text-ink sm:text-lg">
                वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br />निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
              </p>
              <Divider />

              <p className="font-serif text-lg italic text-ink-soft">seeking your gracious presence on the auspicious occasion of</p>

              <p className="mt-7 text-xs uppercase tracking-[0.3em] text-gold">With the blessing of</p>
              <div className="mt-3 space-y-1 font-serif text-[1.02rem] leading-snug text-ink">
                <p>Smt. Ratna Devi and Shri Manaklal Ji Bhatter</p>
                <p>Smt. Maina Devi and Late Shri Gopi Kishan Ji Bhatter</p>
                <p>Smt. Rukhma Devi and Late Shri Valabhdas Ji Chandak</p>
              </div>

              <div className="mt-10">
                <h3 className="font-display text-5xl font-medium tracking-[0.08em] text-rose-deep sm:text-6xl">{couple.bride.toUpperCase()}</h3>
                <p className="mt-2 font-serif text-[0.98rem] italic text-ink-soft">({parents.bride})</p>
                <p className="my-3 font-script text-5xl text-gold">&amp;</p>
                <h3 className="font-display text-5xl font-medium tracking-[0.08em] text-rose-deep sm:text-6xl">{couple.groom.toUpperCase()}</h3>
                <p className="mt-2 font-serif text-[0.98rem] italic text-ink-soft">({parents.groom})</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
