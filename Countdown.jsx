import { useEffect, useState } from 'react'
import { COUNTDOWN_TARGET } from '../config'

const calc = () => {
  const diff = new Date(COUNTDOWN_TARGET).getTime() - Date.now()
  if (diff <= 0) return null
  return {
    Days: Math.floor(diff / 864e5),
    Hours: Math.floor((diff / 36e5) % 24),
    Mins: Math.floor((diff / 6e4) % 60),
    Secs: Math.floor((diff / 1e3) % 60),
  }
}

export default function Countdown() {
  const [t, setT] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  if (!t) return <p className="font-serif text-2xl italic text-rose-deep">The celebrations have begun!</p>

  return (
    <div className="mx-auto flex max-w-sm justify-center gap-3 sm:gap-6" aria-label="Countdown to the celebrations">
      {Object.entries(t).map(([k, v]) => (
        <div key={k} className="w-[4.2rem] sm:w-20">
          <div className="font-serif text-4xl font-light text-ink sm:text-5xl">{String(v).padStart(2, '0')}</div>
          <div className="mt-1 text-[0.6rem] tracking-[0.3em] uppercase text-gold">{k}</div>
        </div>
      ))}
    </div>
  )
}
