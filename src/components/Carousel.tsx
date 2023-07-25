import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import presskit1 from '../assets/presskit1.jpg'
import presskit2 from '../assets/presskit2.jpg'
import presskit3 from '../assets/presskit3.jpg'
const AutoplaySlider = withAutoplay(AwesomeSlider);


function Carousel() {
  return (
    <div className=' w-full h-96 flex justify-center items-center p-10 bg-white'>
  <AutoplaySlider
    className=" w-10/12 h-3/4"
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src={presskit1} />
    <div data-src={presskit2} />
    <div data-src={presskit3} />
  </AutoplaySlider>
    </div>
  )
}

export default Carousel
