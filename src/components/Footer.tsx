import { BiLogoSoundcloud } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs';
import { SiBeatport } from 'react-icons/si';
import { BsSpotify } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="bg-zinc-900 flex flex-col justify-center align-middle w-fit h-fit mt-5 mb-2">
      <img src={logo} className="w-56 mb-7" />
      <div className="flex align-middle gap-5 justify-center">
        <a href="https://soundcloud.com/listentchez" target="_black">
          <BiLogoSoundcloud className="text-white w-10 h-10 -mt-1.5" />
        </a>
        <a href="https://www.instagram.com/listentchez" target="_black">
          <BsInstagram className="text-white w-6 h-6" />
        </a>
        <a href="https://www.beatport.com/artist/tchez/859672" target="_blank">
          <SiBeatport className="text-white w-6 h-6" />
        </a>
        <a
          href="https://open.spotify.com/intl-pt/artist/4aTIz0KXd6u04mfDuKMn56?si=3zhbScMbRkGQXpPSHMVBRQ"
          target="_blank"
        >
          <BsSpotify className="text-white w-6 h-6" />
        </a>
        <a href="https://www.youtube.com/@tchez1549" target="_blank">
          <BsYoutube className="text-white w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}

export default Footer
