import { ImageTile } from "../../components/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { MtbPage } from "../../components/mtbPlace";

const Page = () => {
  return (
    <>
      <MtbPage
        title="Oittaa R2"
        difficulty={{
          level: "hard",
          text: "It depends actually, but there are hard parts. First couple of segments are easier than others.",
        }}
        goodsArray={[
          "This is a great trail - it is long, it has a lot of diversity in it, has some unique features (like that wooden climb, have never seen that before).",
          "It is in a great location - Nuuksio is a national park for a reason.",
          "It has good <i>on trail</i> navigation.",
          "There are two parking places nearby, so it's easy to reach. Technically, it's not too hard to get there from Espoo on your own.",
        ]}
        badsArray={[
          "Unlike the original Oittaa MTB, or EKP trails - this one is actually a set of segments, somewhat like Helsingin keskuspuisto one. And the navigation between them is not that good - I've had an official gpx and still nearly missed a segment.",
          ,
          "It is <u>not</u> one way. There are fast enough parts where it might be dangerous. So watch out.",
        ]}
        gpx={{
          src: "/gpx/r2gpx",
          title: "Oittaa R2 track",
        }}
        gallery={[
          <LiteYouTubeEmbed
            id="-XyneJO_zLs"
            title="R2"
            style={{ height: "300px", width: "300px" }}
          />,
          <LiteYouTubeEmbed
            id="LncSGIbhW4k"
            title="R2 with friends"
            style={{ height: "300px", width: "300px" }}
          />,
          <ImageTile
            image={{
              source: "/r2/1.jpg",
              url: "",
            }}
          />,
          <ImageTile
            image={{
              source: "/r2/2.jpg",
              url: "",
            }}
          />,
          <ImageTile
            image={{
              source: "/r2/3.jpg",
              url: "",
            }}
          />,
          <ImageTile
            image={{
              source: "/r2/4.jpg",
              url: "",
            }}
          />,
        ]}
      />
    </>
  );
};

export default Page;
