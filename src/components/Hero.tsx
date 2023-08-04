import tchezvideo from '../assets/tchezvideo.mp4';

function Hero() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        playsInline        
        className="w-full h-96 object-cover"
      >
        <source src={tchezvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Hero
