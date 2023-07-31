function Beatport() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 bg-slate-50 p-10">
      <iframe
        className="shadow-md"
        src="https://embed.beatport.com/?id=17862184&type=track"
        width="100%"
        height="162"
        style={{ maxWidth: "600px" }}
      ></iframe>
      <iframe
        className="shadow-md"
        src="https://embed.beatport.com/?id=17537369&type=track"
        width="100%"
        height="162"
        style={{ maxWidth: "600px" }}
      ></iframe>
    </div>
  );
}

export default Beatport;