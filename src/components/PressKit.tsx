import { Link } from 'react-router-dom';
import pressKit1 from '../assets/presskit1.webp';
import pressKit2 from '../assets/presskit2.webp';
import pressKit3 from '../assets/presskit3.webp';
import pressKit4 from '../assets/presskit4.webp';

function PressKit() {
  return (
    <div className="bg-zinc-900 flex flex-col items-center justify-center">
      <Link to="https://www.dropbox.com/sh/25jx5nf978g0y98/AAANw43pURaId8k1o4U8GxvPa?dl=0" className="text-white font-custom text-2xl underline w-full text-center m-5">
          Presskit
      </Link>
      <div className="flex gap-9 flex-wrap items-center justify-center w-2/4 mb-10">
        <img
          src={pressKit1}
          className=" w-80"
          alt="Uma foto de um show, com o DJ Tchez tocando!"
        />
        <img
          src={pressKit2}
          className=" w-80"
          alt="Uma foto de um show, com o DJ Tchez tocando!"
        />
        <img
          src={pressKit3}
          className=" w-80"
          alt="Uma foto de um show, com o DJ Tchez tocando!"
        />
        <img
          src={pressKit4}
          className=" w-80"
          alt="Uma foto de um show, com o DJ Tchez tocando!"
        />
      </div>
    </div>
  );
}

export default PressKit
