import { BiLogoSoundcloud } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs';
import { SiBeatport } from 'react-icons/si';
import { BsSpotify } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import logo from '../assets/logo.png';

function Footer() {
  return (
  <div>
    <footer className="bg-zinc-900 flex flex-col justify-center items-center mt-5 mb-2">
      <img src={logo} className="w-56 mb-5" />
      <div className="flex gap-5 justify-center">
        <a href="https://soundcloud.com/listentchez" target="_black">
          <BiLogoSoundcloud className="text-zinc-200 w-10 h-10 -mt-1.5" />
        </a>
        <a href="https://www.instagram.com/listentchez" target="_black">
          <BsInstagram className="text-zinc-200 w-6 h-6" />
        </a>
        <a href="https://www.beatport.com/artist/tchez/859672" target="_blank">
          <SiBeatport className="text-zinc-200 w-6 h-6" />
        </a>
        <a
          href="https://open.spotify.com/intl-pt/artist/4aTIz0KXd6u04mfDuKMn56?si=3zhbScMbRkGQXpPSHMVBRQ"
          target="_blank"
        >
          <BsSpotify className="text-zinc-200 w-6 h-6" />
        </a>
        <a href="https://www.youtube.com/@tchez1549" target="_blank">
          <BsYoutube className="text-zinc-200 w-6 h-6" />
        </a>
      </div>

     </footer>
     <div>
        <p className="text-zinc-400 text-xs m-6">
            Copyright ©️  2023 Tchez - Todos os Direitos reservados.
        </p>
	 </div>
 </div> 
  );
}

export default Footer
