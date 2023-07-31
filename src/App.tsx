import Bar from "./components/Bar"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { BiLogoSoundcloud } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs';
import { SiBeatport } from 'react-icons/si';
import { BsSpotify } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import PressKit from "./components/PressKit"
import Carousel from "./components/Carousel"
import Instagram from "./components/Instagram"
import SoundCloud from "./components/SoundCloud"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Bar>
        <BiLogoSoundcloud className="text-black w-10 h-10"/>
        <BsInstagram className="text-black w-6 h-6"/>
        <SiBeatport className="text-black w-6 h-6"/>
        <BsSpotify className="text-black w-6 h-6"/>
        <BsYoutube className="text-black w-6 h-6"/>
      </Bar>
      <PressKit />
      <Instagram />
      <SoundCloud />
      <div className="flex justify-center">
      <Carousel />
      </div>
      <div className="flex justify-center">
      <Footer />
      </div>
    </>
  )
}

export default App
