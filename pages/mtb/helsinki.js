import { ImageTile } from "../../components/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { MtbPage } from "../../components/mtbPlace";

const Page = () => {
  return (
    <>
      <MtbPage
        title="Helsinki central park MTB"
        goodsArray={[
          "Central location, accessible for lots of people.",
          "Well maintained in winter and it is actually way smoother and faster when snow covered.",
          "Has nice places, though nothing really technical - not exaclty suitable for a gravel bike (in summer), but don't expect much.",
        ]}
        badsArray={[
          "Navigation between segments is just bad. Sometimes I had to guess and guessed wrong - hence the gpx is not exactly good, sorry.",
          "It's not one way and quite narrow at times, not safe.",
        ]}
        gpx={{
          src: "/gpx/hels.gpx",
          title: "Helsinki",
        }}
        gallery={[
          <LiteYouTubeEmbed
            id="F8B70JKX12s"
            title="Helsinki"
            style={{ height: "300px", width: "300px" }}
          />,
          <ImageTile
            image={{
              source: "/hel/1.jpg",
              url: "",
            }}
          />,
          <ImageTile
            image={{
              source: "/hel/2.jpg",
              url: "",
            }}
          />,
          <ImageTile
            image={{
              source: "/hel/3.jpg",
              url: "",
            }}
          />,
        ]}
      />
    </>
  );
};

export default Page;
