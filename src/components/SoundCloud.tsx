import { Link } from "react-router-dom";
import blackwhite1 from "../assets/blackwhite1.jpg";
import blackwhite2 from "../assets/blacwhite2.jpg";

function SoundCloud() {
  return (
    <div className="flex justify-center p-8 items-center flex-col bg-zinc-200">
      <Link
        to="https://soundcloud.com/listentchez/tchez-the-after-anna-nuun-garden"
        className="w-full text-center text-2xl underline text-custom text-black mb-3 cursor-pointer"
      >
        Tchez @ The After (ANNA) - Nuun Garden
      </Link>
      <iframe
        width="100%"
        height="166"
        allow="autoplay"
        className="m-5 mb-10 w-full shadow-xl"
        style={{ maxWidth: "750px" }}
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1198342570&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div className="flex gap-10 justify-center h-fit">
        <img
          className="md:h-96 md:w-96 sm:h-56 sm:w-56 h-56 w-56 object-cover shadow-xl"
          src={blackwhite1}
          alt="Tchez tocando em um evento"
        />
        <img
          className="md:h-96 md:w-96 sm:h-56 sm:w-56 h-56 w-56 object-cover shadow-xl"
          src={blackwhite2}
          alt="Tchez tocando em um evento"
        />
      </div>
    </div>
  );
}

export default SoundCloud;
