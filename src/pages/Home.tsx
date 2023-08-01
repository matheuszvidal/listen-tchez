import Bar from "../components/Bar";
import Hero from "../components/Hero";
import { BiLogoSoundcloud } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { SiBeatport } from "react-icons/si";
import { BsSpotify } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import PressKit from "../components/PressKit";
import Carousel from "../components/Carousel";
import Instagram from "../components/Instagram";
import SoundCloud from "../components/SoundCloud";
import Beatport from "../components/BeatPort";
import Spotify from "../components/Spotify";

function App() {
  return (
    <>
      <Hero />
      <Bar>
        <a href="https://soundcloud.com/listentchez" target="_black">
          <BiLogoSoundcloud className="text-black w-10 h-10" />
        </a>
        <a href="https://www.instagram.com/listentchez" target="_black">
          <BsInstagram className="text-black w-6 h-6" />
        </a>
        <a href="https://www.beatport.com/artist/tchez/859672" target="_blank">
          <SiBeatport className="text-black w-6 h-6" />
        </a>
        <a
          href="https://open.spotify.com/intl-pt/artist/4aTIz0KXd6u04mfDuKMn56?si=3zhbScMbRkGQXpPSHMVBRQ"
          target="_blank"
        >
          <BsSpotify className="text-black w-6 h-6" />
        </a>
        <a href="https://www.youtube.com/@tchez1549" target="_blank">
          <BsYoutube className="text-black w-6 h-6" />
        </a>
      </Bar>
      <PressKit />
      <Bar>
        <p className="underline font-custom text-xl">ME SIGA NO INSTAGRAM</p>
      </Bar>
      <Instagram />
      <SoundCloud />
      <Beatport />
      <div className="flex justify-center">
        <Carousel />
      </div>
      <Spotify />
    </>
  );
}

export default App;
