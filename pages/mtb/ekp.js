import { ImageTile } from "../../components/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { MtbPage } from "../../components/mtbPlace";

const Page = () => {
  return (
    <>
      <MtbPage
        title="Espoon keskuspuisto trail"
        difficulty={{
          level: "hard",
          text: "Definetely harder than Oittaa MTB, some placed will make you happy to have a dropper (or make ypu want one).",
        }}
        goodsArray={[
          "One way trail with fast and technical sections, some of them are challenging",
          "Good navigation - not as good as in Fiskars, for example, but still good.",
          "Nearly uninterrupted loop - there are a couple of road crossings, but they are short.",
          "Accessible during winter (see the video below)",
          "Location: the trail sarts in Puolarmaari where there are a parking lot and a cafe.",
        ]}
        badsArray={[
          "Some parts are dirty, sometimes to the point of being unridable. There are alternative trails though.",
          "Not much elevation change",
          "Occasional random people. Due to its convenient location, there are some trailrunners and dog-walkers at times.",
        ]}
        gpx={{
          src: "/gpx/ekp.gpx",
          title: "EKP",
        }}
        gallery={[
          <LiteYouTubeEmbed
            id="MO1l18UnrOg"
            title="EKP trail"
            wrapperClass="yt-lite gallery-video"
          />,
          <LiteYouTubeEmbed
            id="uGJM5YjPMS0"
            title="Espoo randoms, parts of EKP"
            wrapperClass="yt-lite gallery-video"
          />,
          <ImageTile
            image={{
              source: "/ekp/1.jpg",
              url: "",
            }}
          />,
          <ImageTile
            image={{
              source: "/ekp/2.jpg",
              url: "",
            }}
          />,
        ]}
      />
    </>
  );
};

export default Page;
