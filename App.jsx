import { useRef, useState } from 'react'
import Gate from './components/Gate'
import Music from './components/Music'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import Welcome from './components/Welcome'
import Events from './components/Events'
import Venue from './components/Venue'
import Gallery from './components/Gallery'
import Family from './components/Family'
import Rsvp from './components/Rsvp'

export default function App() {
  const audio = useRef(null)
  const [started, setStarted] = useState(false)

  // Called from the "Open the invitation" tap — browsers only allow sound after a tap.
  const open = () => {
    setStarted(true)
    setTimeout(() => Promise.resolve(audio.current?.play()).catch(() => {}), 300)
  }

  return (
    <>
      <Gate onOpen={open} />
      <Music ref={audio} started={started} />
      <main>
        <Hero />
        <Invitation />
        <Welcome />
        <Events />
        <Venue />
        <Gallery />
        <Family />
        <Rsvp />
      </main>
    </>
  )
}
