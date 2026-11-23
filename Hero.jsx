import { couple, images, parents } from '../config'

export default function Hero() {
  return (
    <header className="relative flex min-h-[100svh] items-end justify-center overflow-hidden pb-24 text-center text-ivory sm:pb-28">
      <img src={images.hero} alt="Anju and Vats" className="absolute inset-0 h-full w-full animate-slow-zoom object-cover object-[50%_45%]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/85" />

      <div className="relative z-10 px-6">
        <p className="fade-up font-serif text-2xl italic tracking-wide sm:text-3xl" style={{ animationDelay: '.2s' }}>We are getting married!</p>
        <h1 className="fade-up mt-3 font-serif text-[3.6rem] font-light italic leading-[1.05] sm:text-8xl md:text-9xl" style={{ animationDelay: '.45s' }}>
          {couple.bride}<span className="mx-3 text-gold-soft not-italic sm:mx-6">&amp;</span>{couple.groom}
        </h1>
        <div className="fade-up mx-auto mt-4 space-y-1 font-serif text-[0.95rem] italic leading-snug text-ivory/90 sm:text-lg" style={{ animationDelay: '.6s' }}>
          <p>{parents.bride}</p>
          <p>{parents.groom}</p>
        </div>
        <div className="fade-up mx-auto mt-6 h-px w-20 bg-gold-soft/80" style={{ animationDelay: '.75s' }} />
        <p className="fade-up mt-5 font-serif text-xl tracking-[0.2em] sm:text-2xl" style={{ animationDelay: '.9s' }}>DECEMBER 12 &amp; 13, 2026</p>
        <p className="fade-up mt-2 text-xs uppercase tracking-[0.3em] text-ivory/80" style={{ animationDelay: '1.05s' }}>Marugarh Palace · Jodhpur</p>
      </div>

      <a href="#invitation" aria-label="Scroll down" className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 animate-bob">
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="1" width="20" height="32" rx="10" /><line x1="11" y1="8" x2="11" y2="14" strokeLinecap="round" /></svg>
      </a>
    </header>
  )
}
