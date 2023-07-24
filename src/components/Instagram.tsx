import { InstagramEmbed } from "react-social-media-embed"

function Instagram() {
  return (
    <div className="flex items-center justify-center space-x-8 p-10">
      <InstagramEmbed
        url="https://www.instagram.com/p/CpldcoOP5dZ/"
        height={530}
        width={345}
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/CnvDeiXpIqd/"
        width={345}
        height={530}
      />
    </div>
  );
}

export default Instagram