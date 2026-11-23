import Reveal from './Reveal'
import { art, familyGroups } from '../config'

const Group = ({ title, lines }) => (
  <div className="mb-6">
    <h4 className="font-serif text-lg font-semibold text-rose-deep">{title}</h4>
    <ul className="mt-1 space-y-0.5 text-[0.95rem] leading-snug text-[#2f5d3a]">
      {lines.map((l) => <li key={l}>{l}</li>)}
    </ul>
  </div>
)

const pink = '#FDF3F2'
export default function Family() {
  const fade = (dir) => ({ WebkitMaskImage: `linear-gradient(${dir}, #000 70%, transparent)`, maskImage: `linear-gradient(${dir}, #000 70%, transparent)` })
  return (
    <section id="family" style={{ background: pink }} className="overflow-hidden">
      <img src={art.family} alt="" aria-hidden="true" className="block w-full max-w-3xl mx-auto object-cover object-top" style={{ height: '16vw', minHeight: 70, maxHeight: 170, ...fade('to bottom') }} />
      <div className="mx-auto max-w-3xl px-6 pb-4 pt-4 sm:px-10">
        <Reveal className="text-center">
          <p className="eyebrow">With immense joy</p>
          <h2 className="heading mt-3 text-3xl italic sm:text-5xl">the family invites you</h2>
          <div className="divider mt-6" />
        </Reveal>
        <Reveal className="mt-10 grid gap-x-12 sm:grid-cols-2">
          <div>{familyGroups.left.map(([t, l]) => <Group key={t} title={t} lines={l} />)}</div>
          <div>{familyGroups.right.map(([t, l]) => <Group key={t} title={t} lines={l} />)}</div>
        </Reveal>
        <Reveal className="mt-4 text-center">
          <h4 className="font-serif text-lg font-semibold text-rose-deep">Business Firms</h4>
          {familyGroups.firms.map((f) => <p key={f} className="text-[0.95rem] text-[#2f5d3a]">{f}</p>)}
        </Reveal>
      </div>
      <img src={art.family} alt="" aria-hidden="true" className="block w-full max-w-3xl mx-auto object-cover object-bottom" style={{ height: '26vw', minHeight: 110, maxHeight: 280, ...fade('to top') }} />
    </section>
  )
}
