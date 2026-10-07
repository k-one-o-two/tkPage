import { ImageTile } from "../../components/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { MtbPage } from "../../components/mtbPlace";

const Page = () => {
  return (
    <>
      <MtbPage
        title="Lohjan Harju"
        goodsArray={[
          "Nearly perfect XC loop - longer then Oittaa Mtb, has several different parts, is one uninterrupted lap.",
          "Has some artifical drops, they are fun.",
          "Is fast and mostly beginner friendly, except for a couple of rocks.",
          "Somewhat accessible in winter - not really maintained, but ridable.",
          "There's a water source at the beginning of the lap (it is off during winter though).",
          "Lots of parking places.",
        ]}
        badsArray={[
          "Might be too easy for experienced riders, though you can always push harder.",
          "Is closer than Fiskars, but still takes some time to get there.",
        ]}
        gpx={{
          src: "/gpx/lohja.gpx",
          title: "Lohja",
        }}
        gallery={[
          <LiteYouTubeEmbed
            id="tShFHQ1cZgk"
            title="Full run"
            style={{ height: "300px", width: "300px" }}
          />,
          <LiteYouTubeEmbed
            id="ekc3dixsG8g"
            title="Edit"
            style={{ height: "300px", width: "300px" }}
          />,
          <ImageTile
            image={{
              source: "/lohja/1.jpg",
              url: "",
            }}
          />,
          <ImageTile
            image={{
              source: "/lohja/2.jpg",
              url: "",
            }}
          />,
        ]}
      />
    </>
  );
};

export default Page;
