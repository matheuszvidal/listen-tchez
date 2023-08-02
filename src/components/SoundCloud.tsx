import blackwhite1 from '../assets/blackwhite1.jpg';
import blackwhite2 from '../assets/blacwhite2.jpg';

function SoundCloud() {
  return (
    <div className="flex justify-center p-10 flex-wrap bg-white">
      <h2 className="w-full text-center text-xl underline text-custom text-black m-5">Live Recorded | Taurus(Original Mix) Promo Cut</h2>
      <iframe
        width="100%"
        height="166"
        allow="autoplay"
        className="m-5 mb-8 w-full"
        style={{ maxWidth: "600px" }}
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1538055250&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div className="flex md:gap-20 gap-5 justify-center h-fit">
      <img className='md:h-96 md:w-96 sm:h-56 sm:w-56 h-56 w-56 object-cover' src={blackwhite1} alt="" />
      <img className='md:h-96 md:w-96 sm:h-56 sm:w-56 h-56 w-56 object-cover' src={blackwhite2} alt="" />
      </div>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
          fontWeight: 100,
        }}
      ></div>
    </div>
  );
}

export default SoundCloud;