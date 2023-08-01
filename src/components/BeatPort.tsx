import greenimg from '../assets/greenimg.jpg';

function Beatport() {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center gap-8 bg-zinc-900 p-10">
      <h2 className="w-full text-center underline text-xl text-custom text-white m-5">Compre suas faixas favoritas no BeatPort agora!</h2>
      <iframe
        className="shadow-md"
        src="https://embed.beatport.com/?id=17862184&type=track"
        width="100%"
        height="162"
        style={{ maxWidth: "600px" }}
        allow="autoplay"
      ></iframe>
      <iframe
        className="shadow-md"
        src="https://embed.beatport.com/?id=17537369&type=track"
        width="100%"
        height="162"
        style={{ maxWidth: "600px" }}
      ></iframe>
      <img src={greenimg} className="h-96 w-1/3 object-cover" alt="" />
      <p className='text-white bg-zinc-800 font-custom -mt-8'>
        Veja mais em
        <a className='underline' href="https://grve.com.br/2023/04/tchez-ep-lunar/" target="_blank">https://grve.com.br/2023/04/tchez-ep-lunar/</a>
      </p>
    </div>
  );
}

export default Beatport;
