import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { MUSIC_SRC, MUSIC_TITLE, YT_ID, YT_START, YT_RATE } from '../config'

let ytPromise
const loadYT = () => ytPromise || (ytPromise = new Promise((res) => {
  if (window.YT?.Player) return res(window.YT)
  const prev = window.onYouTubeIframeAPIReady
  window.onYouTubeIframeAPIReady = () => { prev?.(); res(window.YT) }
  const t = document.createElement('script'); t.src = 'https://www.youtube.com/iframe_api'; document.head.appendChild(t)
}))

const Music = forwardRef(function Music({ started }, ref) {
  const audioEl = useRef(null)
  const yt = useRef(null)
  const [playing, setPlaying] = useState(false)
  const useYT = !MUSIC_SRC && !!YT_ID

  useImperativeHandle(ref, () => ({
    play: () => { if (MUSIC_SRC) return audioEl.current?.play(); yt.current?.playVideo?.() },
    pause: () => { if (MUSIC_SRC) audioEl.current?.pause(); else yt.current?.pauseVideo?.() },
  }))

  useEffect(() => {
    const a = audioEl.current
    if (!a) return
    const on = () => setPlaying(true), off = () => setPlaying(false)
    a.addEventListener('play', on); a.addEventListener('pause', off)
    return () => { a.removeEventListener('play', on); a.removeEventListener('pause', off) }
  }, [])

  useEffect(() => {
    if (!useYT) return
    let dead = false
    loadYT().then((YT) => {
      if (dead) return
      yt.current = new YT.Player('yt-player', {
        videoId: YT_ID, width: '200', height: '113',
        playerVars: { start: YT_START, playsinline: 1, controls: 0, rel: 0, modestbranding: 1, disablekb: 1 },
        events: {
          onReady: (e) => { try { e.target.setPlaybackRate(YT_RATE) } catch {} },
          onStateChange: (e) => {
            setPlaying(e.data === 1)
            if (e.data === 0) { e.target.seekTo(YT_START); e.target.playVideo() } // loop from the middle section
          },
        },
      })
    })
    return () => { dead = true; try { yt.current?.destroy() } catch {} }
  }, [useYT])

  if (!MUSIC_SRC && !YT_ID) return null
  const toggle = () => {
    if (MUSIC_SRC) { const a = audioEl.current; a.paused ? a.play().catch(() => {}) : a.pause() }
    else playing ? yt.current?.pauseVideo() : yt.current?.playVideo()
  }
  return (
    <>
      {MUSIC_SRC && <audio ref={audioEl} src={MUSIC_SRC} loop preload="auto" />}
      {useYT && (
        <div className={`fixed bottom-20 left-4 z-30 overflow-hidden rounded-xl shadow-lg ring-1 ring-gold-soft ${started ? '' : 'pointer-events-none opacity-0'}`} style={{ width: 200, height: 113 }}>
          <div id="yt-player" />
        </div>
      )}
      {started && (
        <button onClick={toggle} aria-label={playing ? `Pause ${MUSIC_TITLE}` : `Play ${MUSIC_TITLE}`}
          className="fixed bottom-4 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/90 text-rose-deep shadow-lg shadow-rose-deep/20 ring-1 ring-gold-soft backdrop-blur">
          <span className={playing ? 'animate-bob' : 'opacity-50'} aria-hidden="true">♪</span>
          {!playing && <span className="absolute h-px w-6 rotate-45 bg-rose-deep" />}
        </button>
      )}
    </>
  )
})
export default Music
