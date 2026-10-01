import Head from "next/head";
import dynamic from "next/dynamic";
import { ImageTile } from "../../components/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

// Dynamically import the map component with SSR disabled
const GpxTrackMap = dynamic(() => import("../../components/GpxTrackMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Loading map...
    </div>
  ),
});

const r2Page = () => {
  return (
    <>
      {" "}
      <Head>
        <title>Oittaa R2</title>
      </Head>
      <div className="card">
        <div className="article">
          <h1>Oittaa R2</h1>

          <div>
            <div>
              <h3>Goods</h3>
              <ul>
                <li>
                  This is a great trail - it is long, it has a lot of diversity
                  in it, has some unique features (like that wooden climb, have
                  never seen that before).
                </li>
                <li>
                  It is in a great location - Nuuksio is a national park for a
                  reason.
                </li>
                <li>
                  It has good <i>on trail</i> navigation.
                </li>
                <li>
                  There are two parking places nearby, so it's easy to reach.
                  Technically, it's not too hard to get there from Espoo on your
                  own.
                </li>
              </ul>
            </div>
            <div>
              <h3>Bads</h3>
              <ul>
                <li>
                  Unlike the original Oittaa MTB, or EKP trails - this one is
                  actually a set of segments, somewhat like Helsingin
                  keskuspuisto one. And the navigation between them is not that
                  good - I've had an official gpx and still nearly missed a
                  segment.
                </li>
                <li>
                  It is <u>not</u> one way. There are fast enough parts where it
                  might be dangerous. So watch out.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <GpxTrackMap src="/gpx/r2gpx" title="Oittaa R2 track" />
          </div>
          <div>
            <h3>gallery</h3>
            <div className="images-container">
              <LiteYouTubeEmbed
                id="-XyneJO_zLs"
                title="R2"
                style={{ height: "300px", width: "300px" }}
              />
              <ImageTile
                image={{
                  source: "/r2/1.jpg",
                  url: "",
                }}
              />
              <ImageTile
                image={{
                  source: "/r2/2.jpg",
                  url: "",
                }}
              />
              <ImageTile
                image={{
                  source: "/r2/3.jpg",
                  url: "",
                }}
              />
              <ImageTile
                image={{
                  source: "/r2/4.jpg",
                  url: "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default r2Page;
