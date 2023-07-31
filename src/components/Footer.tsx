import { BiLogoSoundcloud } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs';
import { SiBeatport } from 'react-icons/si';
import { BsSpotify } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className='flex flex-col justify-center align-middle w-fit h-fit'>
      <img src={logo} className="w-36 mb-7" />
      <div className='flex align-middle gap-2 justify-center'>
        <BiLogoSoundcloud className="text-white w-6 h-6 -mt-1.5"/>
        <BsInstagram className="text-white w-3 h-3"/>
        <SiBeatport className="text-white w-3 h-3"/>
        <BsSpotify className="text-white w-3 h-3"/>
        <BsYoutube className="text-white w-3 h-3"/>
      </div>
    </footer>
  )
}

export default Footer
