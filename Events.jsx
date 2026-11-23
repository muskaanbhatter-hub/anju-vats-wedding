import Reveal from './Reveal'
import { days } from '../config'
import { cardFor } from './Cards'

const calUrl = (e) => {
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${e.name} | Anju & Vats`,
    dates: `${e.cal.start}/${e.cal.end}`,
    ctz: 'Asia/Kolkata',
    location: 'Marugarh Palace, Jaisalmer Bypass Rd, Jodhpur',
    details: `${e.time}. ${e.note}. Dress code: ${e.dress}.`,
  })
  return `https://calendar.google.com/calendar/render?${p.toString()}`
}

function EventBlock({ e }) {
  const Art = cardFor[e.key]
  return (
    <Reveal className="mx-auto w-full max-w-[460px]">
      <Art />
      <div className="mt-5 flex flex-col items-center gap-3">
        <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-2.5 ring-1 ring-gold-soft/50">
          <span className="flex -space-x-1.5">
            {e.swatches.map((c) => <span key={c} className="h-4 w-4 rounded-full border border-white shadow-sm" style={{ background: c }} />)}
          </span>
          <span className="text-left text-xs leading-tight text-ink">
            <span className="block uppercase tracking-[0.2em] text-gold">Dress code</span>
            {e.dress}
          </span>
        </div>
        {e.cal && (
          <a href={calUrl(e)} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-[0.2em] text-rose-deep underline-offset-4 hover:underline">+ Add to calendar</a>
        )}
      </div>
    </Reveal>
  )
}

export default function Events() {
  return (
    <section id="events" className="bg-blush-50 px-4 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="eyebrow">The Celebrations</p>
        <h2 className="heading mt-4 text-4xl sm:text-6xl">Two days of joy</h2>
        <div className="divider mt-8" />
      </Reveal>

      {days.map((day) => (
        <div key={day.label} className="mt-16">
          <Reveal className="mb-10 text-center">
            <p className="eyebrow">{day.label}</p>
            <p className="font-serif text-3xl italic text-rose-deep sm:text-4xl">{day.date}</p>
          </Reveal>
          <div className="space-y-20">
            {day.blocks.map((block) =>
              block.length === 1 ? (
                <EventBlock key={block[0].key} e={block[0]} />
              ) : (
                // Events that belong together are shown as one group, one card right after the other.
                <div key={block.map((b) => b.key).join('-')} className="mx-auto max-w-[500px] rounded-[2rem] bg-white/50 p-3 ring-1 ring-gold-soft/40 sm:p-4">
                  <p className="eyebrow pb-4 pt-2 text-center">{block.map((b) => b.name).join(' & ')}</p>
                  <div className="space-y-10">
                    {block.map((e) => <EventBlock key={e.key} e={e} />)}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
