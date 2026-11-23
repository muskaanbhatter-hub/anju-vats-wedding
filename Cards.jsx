import { Card, T } from './CardArt'
import { art, venue } from '../config'

/* ---------- Opening cover (page 1) ---------- */
export function CoverCard() {
  const c = '#6b5a4e'
  return (
    <Card img={art.cover}>
      <T y={19.8} font="font-deva" size={3.7} track={0.04} color="#9A5B34">श्री पित्राय नमः</T>
      <T y={25.1} size={2.45} track={0.22} color={c}>WELCOME TO THE WEDDING OF</T>
      <T y={46.7} size={5.2} track={0.14} weight={500} color="#6f6253">Anju &amp; Vats</T>
      <T y={53.6} size={2.5} track={0.28} weight={600} color="#5b4c3f">DECEMBER</T>
      <T y={57.1} x={40.4} size={1.8} track={0.18} weight={500} color={c}>SAT</T>
      <T y={57.1} x={49.4} size={1.8} track={0.18} weight={500} color={c}>SUN</T>
      <T y={60.8} x={40.4} size={3.5} track={0} weight={500} color="#5b4c3f">12</T>
      <T y={60.8} x={49.4} size={3.5} track={0} weight={500} color="#5b4c3f">13</T>
      <T y={60.8} x={61} size={3.5} track={0.16} weight={600} color="#5b4c3f">2026</T>
      <T y={68.4} size={2.15} track={0.22} weight={600} color={c}>MARUGARH PALACE,</T>
      <T y={70.8} size={2.15} track={0.22} weight={600} color={c}>JAISALMER BYPASS RD, JODHPUR</T>
    </Card>
  )
}

/* ---------- Haldi (page 3): artwork already carries the date; time is live ---------- */
export function HaldiCard() {
  return (
    <Card img={art.haldi}>
      <T y={42.9} size={2.5} track={0.18} weight={500} color="#7a6652">11:30 AM – 1:00 PM</T>
    </Card>
  )
}

/* ---------- Sangeet (page 4) ---------- */
export function SangeetCard() {
  const c = '#E9E4D8'
  return (
    <Card img={art.sangeet}>
      <T y={14.3} size={1.9} track={0.24} color="#cfd6e0">TOGETHER IN LOVE.</T>
      <T y={16.2} size={1.9} track={0.24} color="#cfd6e0" style={{ marginTop: '1.6cqw' }}>WE INVITE YOU TO OUR</T>
      <T y={27.7} size={7.6} track={0.06} weight={500} color={c}>SANGEET</T>
      <T y={36} font="font-script" size={8.6} track={0} color="#D5D0C8">Celebration</T>
      <T y={46.3} size={2.8} track={0.26} weight={500} color="#fff">12 DECEMBER</T>
      <T y={49.4} size={2.8} track={0.26} weight={500} color="#fff">7:30 PM ONWARDS</T>
      <T y={53.6} size={2.4} track={0.26} weight={600} color="#fff">FOLLOWED BY DINNER</T>
      <T y={58.2} size={1.7} track={0.26} color="#cfd6df">DANCE ✦ DINE ✦ CELEBRATE</T>
      <T y={60.4} size={1.7} track={0.26} color="#cfd6df">THE NIGHT AWAY</T>
    </Card>
  )
}

/* ---------- Mayra (page 5) ---------- */
export function MayraCard() {
  const rose = '#B25A67'
  return (
    <Card img={art.mayra}>
      <T y={14} size={1.9} track={0.24} color="#B87377">TOGETHER IN LOVE.</T>
      <T y={15.9} size={1.9} track={0.24} color="#B87377" style={{ marginTop: '1.6cqw' }}>WE INVITE YOU TO OUR</T>
      <T y={29.1} size={10.5} track={0.06} weight={600} color="#B9566A">MAYRA</T>
      <T y={44} size={2.7} track={0.24} weight={600} color={rose}>13 DECEMBER</T>
      <T y={47.1} size={2.7} track={0.24} weight={600} color={rose}>11:30 AM – 1:00 PM</T>
      <T y={51.9} size={2.3} track={0.24} weight={600} color={rose}>FOLLOWED BY LUNCH</T>
    </Card>
  )
}

/* ---------- Wedding (page 6) ---------- */
export function WeddingCard() {
  const c = '#5b4a44'
  return (
    <Card img={art.wedding}>
      <T y={11.9} size={1.9} track={0.24} color="#7a6a62">TOGETHER IN LOVE.</T>
      <T y={13.8} size={1.9} track={0.24} color="#7a6a62" style={{ marginTop: '1.6cqw' }}>WE INVITE YOU TO OUR</T>
      <T y={27.1} size={10.5} track={0.04} weight={600} color="#B0505E">WEDDING</T>
      <T y={39.2} size={2.7} track={0.22} weight={500} color={c}>13 DECEMBER</T>
      <T y={42} size={2.5} track={0.12} weight={500} color={c} font="font-serif">Baraat Swagat &amp; Reception</T>
      <T y={44.8} size={2.7} track={0.2} weight={500} color={c}>7:30 PM ONWARDS</T>
      <T y={47} size={1.8} track={0.2} color={c}>FOLLOWED BY DINNER</T>
      <T y={53.9} size={2.6} track={0.08} weight={500} color={c} font="font-serif">Phere – Midnight 1:30 AM</T>
    </Card>
  )
}

/* ---------- Cricket (built from the supplied card, text re-set live) ---------- */
const olive = '#4A5A2D'
const Icon = ({ children }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke={olive} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: '7.4cqw', height: '7.4cqw' }}>{children}</svg>
)
export function CricketCard() {
  return (
    <Card img={art.cricket} ratio="853 / 1280">
      <T y={12.9} size={2.7} track={0.22} weight={500} color={olive}>THE WEDDING WEEKEND</T>
      <T y={15.6} size={2.7} track={0.22} weight={500} color={olive}>CONTINUES...</T>

      <svg className="absolute" style={{ left: '72%', top: '16.5%', width: '8%' }} viewBox="0 0 60 40" stroke={olive} strokeWidth="2.2" strokeLinecap="round" fill="none"><path d="M6 6l10 12M24 4l22 8M30 22l24 5" /></svg>
      <T y={22.7} font="" size={6.6} track={0} color={olive} style={{ fontFamily: '"Dancing Script", cursive', fontWeight: 500 }}>Join us for a</T>
      <T y={30.9} font="" size={10.6} track={0} color={olive} style={{ fontFamily: '"Kaushan Script", cursive' }}>Cricket Match!</T>
      <svg className="absolute" style={{ left: '35.5%', top: '35.6%', width: '37%' }} viewBox="0 0 300 16" fill="none" stroke={olive} strokeWidth="3.2" strokeLinecap="round"><path d="M3 11 C 90 3, 200 3, 297 8" /></svg>

      <T y={41.2} font="font-serif" size={4.6} track={0} weight={500} color={olive}>Let’s hit, bowl and celebrate</T>
      <T y={44.6} font="font-serif" size={4.6} track={0} weight={500} color={olive} x={51}>together! ♡</T>

      {/* date | time | place */}
      <div className="absolute" style={{ left: '34.6%', top: '48.4%', height: '8%', width: '0.25%', background: '#8a7a55' }} />
      <div className="absolute" style={{ left: '65.9%', top: '48.4%', height: '8%', width: '0.25%', background: '#8a7a55' }} />
      <div className="absolute flex flex-col items-center" style={{ left: '22.9%', top: '50.5%', transform: 'translate(-50%,-50%)' }}>
        <Icon><rect x="6" y="9" width="36" height="32" rx="4" /><path d="M6 19h36M15 5v8M33 5v8M15 27h4M22 27h4M29 27h4M15 34h4M22 34h4" /></Icon>
      </div>
      <div className="absolute flex flex-col items-center" style={{ left: '50.4%', top: '50.5%', transform: 'translate(-50%,-50%)' }}>
        <Icon><circle cx="24" cy="24" r="18" /><path d="M24 13v12l8 5" /></Icon>
      </div>
      <div className="absolute flex flex-col items-center" style={{ left: '79.1%', top: '50.5%', transform: 'translate(-50%,-50%)' }}>
        <Icon><path d="M24 43s14-12.5 14-23a14 14 0 10-28 0c0 10.5 14 23 14 23z" /><circle cx="24" cy="20" r="5" /><path d="M12 44h24" /></Icon>
      </div>
      <T y={54.8} x={22.9} font="font-serif" size={4.2} track={0} weight={500} color={olive}>13<sup style={{ fontSize: '55%' }}>th</sup> Dec</T>
      <T y={54.8} x={50.4} font="font-serif" size={3.6} track={0} weight={500} color={olive}>9:30 AM onwards</T>
      <T y={54.8} x={79.1} font="font-serif" size={3.6} track={0} weight={500} color={olive}>{venue.name}</T>

      {/* outfit pill */}
      <div className="absolute flex flex-col items-center justify-center rounded-full" style={{ left: '25%', top: '59.4%', width: '50%', height: '5.8%', border: `0.3cqw solid ${olive}` }}>
        <span className="font-serif" style={{ fontSize: '2.7cqw', letterSpacing: '.16em', color: olive, lineHeight: 1.15, fontWeight: 500 }}>OUTFIT:</span>
        <span className="font-serif" style={{ fontSize: '2.6cqw', letterSpacing: '.14em', color: olive, lineHeight: 1.15, fontWeight: 500 }}>T SHIRT WILL BE PROVIDED</span>
      </div>

      <T y={69.4} font="font-serif" size={4.9} track={0} italic weight={500} color={olive}>See you on the field!</T>
      <svg className="absolute" style={{ left: '44.5%', top: '71.8%', width: '14%' }} viewBox="0 0 120 8" fill="none" stroke={olive} strokeWidth="2.4" strokeLinecap="round"><path d="M3 5 C 40 1, 80 1, 117 3" /></svg>
    </Card>
  )
}

export const cardFor = {
  haldi: HaldiCard, sangeet: SangeetCard, cricket: CricketCard, mayra: MayraCard, wedding: WeddingCard,
}
