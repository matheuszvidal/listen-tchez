function SoundCloud() {
  return (
    <div className="flex justify-center p-10 bg-zinc-200">
      <iframe
        width="100%"
        height="166"
        allow="autoplay"
        style={{ maxWidth: "600px" }}
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1538055250&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
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