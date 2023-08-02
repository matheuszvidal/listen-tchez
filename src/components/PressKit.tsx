import pressKit1 from '../assets/presskit1.jpg';
import pressKit2 from '../assets/presskit2.jpg';
import pressKit3 from '../assets/presskit3.jpg';
import pressKit4 from '../assets/presskit4.jpg';

function PressKit() {
  return (
    <div className="bg-zinc-900 flex flex-col items-center justify-center">
      <h2 className="text-white font-custom text-2xl underline w-full text-center m-5">Presskit</h2>
      <div className="flex gap-9 flex-wrap items-center justify-center w-2/4 mb-10">
        <img src={pressKit1} className=" w-80 h-64" alt="Uma foto de um show, com o DJ Tchez tocando!"/>
        <img src={pressKit2} className=" w-80 h-64" alt="Uma foto de um show, com o DJ Tchez tocando!"/>
        <img src={pressKit3} className=" w-80 h-64" alt="Uma foto de um show, com o DJ Tchez tocando!"/>
        <img src={pressKit4} className=" w-80 h-64" alt="Uma foto de um show, com o DJ Tchez tocando!"/>
      </div>
    </div>
  )
}

export default PressKit
