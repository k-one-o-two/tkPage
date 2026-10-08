import { ImageTile } from "../../components/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { MtbPage } from "../../components/mtbPlace";

const Page = () => {
  return (
    <>
      <MtbPage
        title="Fiskars trail center"
        difficulty={{
          level: "hard",
          text: "The trail is marked red, there are some steep hp and downhills, one is even marked black.",
        }}
        goodsArray={[
          "Actually good trails - there are both fast singletracks and tech sections.",
          "Great navigation, nearly impossible to get lost.",
          "Amazing views from the hill at the end of the red route.",
          "Easy to find a parking place (and you're gonna need it).",
          "Fiskars itself is a lovely town",
        ]}
        badsArray={[
          "It is too far away (I live in Espoo) and impossible to reach without a car. It was fine, but now with the R2 in place - not so much.",
          'There are no facilities - no place to get some water or clean the bike. Not that it\'s really needed, but I kinda expected it from a "trail center".',
        ]}
        gpx={{
          src: "/gpx/fis",
          title: "Fiskars",
        }}
        gallery={[
          <LiteYouTubeEmbed
            id="dix7_CyR4A4"
            title="Fiskars"
            style={{ height: "300px", width: "300px" }}
          />,
          <ImageTile
            image={{
              source: "/fis/1.jpg",
              url: "",
            }}
          />,
          <ImageTile
            image={{
              source: "/fis/2.jpg",
              url: "",
            }}
          />,
          <ImageTile
            image={{
              source: "/fis/3.jpg",
              url: "",
            }}
          />,
        ]}
      />
    </>
  );
};

export default Page;
