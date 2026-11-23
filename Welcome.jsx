import Reveal from './Reveal'
import Countdown from './Countdown'

export default function Welcome() {
  return (
    <section id="welcome" className="relative bg-ivory px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-3xl" aria-hidden="true">🌸</p>
          <h2 className="heading mt-4 text-4xl italic sm:text-5xl">A very warm welcome to you!</h2>
          <div className="divider mt-8" />
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-10 font-serif text-xl leading-relaxed text-ink-soft sm:text-2xl sm:leading-[1.7]">
            Your presence makes us happy, and we look forward to making this Grand Wedding full of love and memories.
            Please be with us and enjoy every moment.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-8 font-serif text-2xl italic text-rose-deep sm:text-3xl">It&rsquo;s our pleasure to have you! ❤️</p>
        </Reveal>

        <Reveal delay={400} className="mt-16">
          <p className="eyebrow mb-6">Counting down to Haldi</p>
          <Countdown />
        </Reveal>
      </div>
    </section>
  )
}
