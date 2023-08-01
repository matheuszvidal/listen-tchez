function Spotify() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 bg-slate-50 p-10">
      <iframe
        style={{ borderRadius: "12px", maxWidth: "600px" }}
        src="https://open.spotify.com/embed/artist/4aTIz0KXd6u04mfDuKMn56?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Spotify;