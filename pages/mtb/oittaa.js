import { ImageTile } from "../../components/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { MtbPage } from "../../components/mtbPlace";

const Page = () => {
  return (
    <>
      <MtbPage
        title="Oittaa MTB"
        difficulty={{
          level: "moderate",
          text: "Mostly moderate, one hard climb and a couple of scary (when first time) descents.",
        }}
        goodsArray={[
          "A nice XC trail with different parts - flow, rocks, forest.",
          "A cuple of rather hard climbs, especially whan not on the first lap.",
          "It is one way - you can concentrate on your riding.",
          "Great location - a huge parking lot, places to refill water and clean the bike. And the spot, after which Children of Bodom band has been called.",
        ]}
        badsArray={[
          "It is short, so gets quite boring after a while.",
          "Not much tech stuff.",
          "Not maintained in winter.",
        ]}
        gpx={{
          src: "/gpx/oittagpx",
          title: "Oittaa MTB",
        }}
        gallery={[
          <LiteYouTubeEmbed
            id="9ciASmUJkY0"
            title="Oittaa"
            wrapperClass="yt-lite gallery-video"
          />,
          <ImageTile
            image={{
              source: "/oit/1.jpg",
              url: "",
            }}
          />,
          <ImageTile
            image={{
              source: "/oit/2.jpg",
              url: "",
            }}
          />,
          <ImageTile
            image={{
              source: "/oit/3.jpg",
              url: "",
            }}
          />,
        ]}
      />
    </>
  );
};

export default Page;
