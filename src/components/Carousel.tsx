import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import presskit1 from '../assets/presskit1.jpg'
import presskit2 from '../assets/presskit2.jpg'
import presskit3 from '../assets/presskit3.jpg'


function Carousel() {
  return (
    <div className=" w-full h-96 flex justify-center items-center p-10 bg-zinc-200 shadow-xl">
      <AwesomeSlider className="w-10/12 h-3/4 max-w-screen-md">
        <div data-src={presskit1} />
        <div data-src={presskit2} />
        <div data-src={presskit3} />
      </AwesomeSlider>
    </div>
  );
}

export default Carousel
