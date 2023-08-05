import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Carousel1 from '../assets/Carousel1.jpg'
import Carousel2 from '../assets/Carousel2.jpg'
import Carousel3 from '../assets/Carousel3.jpg'

function Carousel() {
  return (
    <div className=" w-full h-auto flex justify-center items-center p-10 pt-5 bg-zinc-200 shadow-xl">
      <AwesomeSlider className="h-5/6 max-w-screen-lg">
        <div data-src={Carousel1} />
        <div data-src={Carousel2} />
        <div data-src={Carousel3} />
      </AwesomeSlider>
    </div>
  );
}

export default Carousel
