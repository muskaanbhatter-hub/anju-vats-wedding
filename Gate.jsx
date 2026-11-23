import { useEffect, useState } from 'react'
import { CoverCard } from './Cards'
import { MUSIC_SRC, YT_ID } from '../config'

export default function Gate({ onOpen }) {
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    document.body.style.overflow = gone ? '' : 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [gone])

  const open = () => {
    onOpen()
    setLeaving(true)
    window.scrollTo(0, 0)
    setTimeout(() => setGone(true), 1000)
  }
  if (gone) return null

  return (
    <div
      className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#F3ECE2] px-0 transition-all duration-1000 ease-out ${leaving ? 'pointer-events-none -translate-y-6 opacity-0' : ''}`}
    >
      <div style={{ width: 'min(100vw, calc((100svh - 120px) * 0.6664), 520px)' }}>
        <CoverCard />
      </div>
      <button onClick={open} className="btn btn-solid mt-6">Open the invitation</button>
      {(MUSIC_SRC || YT_ID) && <p className="mt-3 text-[0.65rem] tracking-[0.25em] uppercase text-ink-soft">♪ best experienced with sound</p>}
    </div>
  )
}
