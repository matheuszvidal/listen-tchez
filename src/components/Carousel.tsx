import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Carousel1 from '../assets/Carousel1.jpg'
import Carousel2 from '../assets/Carousel2.jpg'
import Carousel3 from '../assets/Carousel3.jpg'

function Carousel() {
  return (
    <div className=" w-full h-auto flex justify-center items-center p-10 pt-5 bg-zinc-200 shadow-xl">
      <AwesomeSlider className="h-5/6 max-w-screen-lg">
        <img data-src={Carousel1} alt='Carrosel Foto numero um do DJ Tchez tocando'/>
        <img data-src={Carousel2} alt='Carrosel Foto numero dois do DJ Tchez tocando'/>
        <img data-src={Carousel3} alt='Carrosel Foto numero três do DJ Tchez tocando'/>
      </AwesomeSlider>
    </div>
  );
}

export default Carousel
