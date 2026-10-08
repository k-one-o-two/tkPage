import { ImageTile } from "../../components/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { MtbPage } from "../../components/mtbPlace";

const Page = () => {
  return (
    <>
      <MtbPage
        title="Sepänkannas area"
        difficulty={{
          level: "moderate",
          text: "Since not a trail, you can pick whatever you want, but I have not seen anything too hard there.",
        }}
        goodsArray={[
          "Idk if that's good or not, but this is not exactly a trail, but rather an area. So no marks whatsover.",
          "Lots of rocks, they are quite different from the usual trails.",
          "Convenient parking near the daycare.",
          "Amazing view from the top.",
        ]}
        badsArray={[
          "Not a route - easy to get lost (this is why my gpx looks the way it looks).",
          "Probably, falling on the rocks is more painful than on the usual trails.",
        ]}
        gpx={{
          src: "/gpx/sepa.gpx",
          title: "Helsinki",
        }}
        gallery={[
          <LiteYouTubeEmbed
            id="aFGXxvMNt8U"
            title="Sepänkannas"
            style={{ height: "300px", width: "300px" }}
          />,
          <ImageTile
            image={{
              source: "/sepa/1.jpg",
              url: "",
            }}
          />,
          <ImageTile
            image={{
              source: "/sepa/2.jpg",
              url: "",
            }}
          />,
        ]}
      />
    </>
  );
};

export default Page;
