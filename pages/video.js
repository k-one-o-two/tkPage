import Head from "next/head";
import { useRouter } from "next/router";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function VideoPage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>My videos</title>
      </Head>
      <div className="card">
        <span>
          Some videos from{" "}
          <a href="https://www.youtube.com/@k-one-o-two">my youtube</a> that I
          think are not too bad.
        </span>
      </div>
      <div className="card" title="Videos">
        <h1>My videos</h1>
        <h3>Cycling :: road</h3>
        <div className="video-container">
          <div>
            <LiteYouTubeEmbed id="C71qMICjSvQ" title="Winter Helsinki" />
            <span className="video-description">
              A winter ride around Helsinki city center. Dark and cold.
            </span>
          </div>
          <div>
            <LiteYouTubeEmbed id="fXWFjs5JWa8" title="Espoo winter day" />
            <span className="video-description">
              Random ride in Espoo, though on a mountain bike, but on roads.
            </span>
          </div>
          <div>
            <LiteYouTubeEmbed
              id="QL1WsjX1IoU"
              title="Summer commute (Espoo -> Helsinki)"
            />
            <span className="video-description">
              Commute from Espoo to Helsinki with comments (in Russian). Old
              camera.
            </span>
          </div>
          <div>
            <LiteYouTubeEmbed
              id="DvfDAEua6VI"
              title="Summer commute (Espoo -> Helsinki) with data"
            />
            <span className="video-description">
              Example of the DashWare app usage.
            </span>
          </div>
          <div>
            <LiteYouTubeEmbed
              id="7iTLJRtlA24"
              title="Commute in Saint-Petersburg"
            />
            <span className="video-description">
              Now looks like a survival horror - commute in Saint-Petersburg on
              a rigid 26" mtb.
            </span>
          </div>
        </div>
        <h3>Cycling :: mtb</h3>
        <div className="video-container">
          <div>
            <LiteYouTubeEmbed
              id="9ciASmUJkY0"
              title="Oittaa mtb trail; 04.04.2026"
            />
            <span className="video-description">
              Oittaa mtb trail, testing my new dropper seat post.
            </span>
          </div>
          <div>
            <LiteYouTubeEmbed id="mGSSJ0XwXeA" title="Lukukallio" />
            <span className="video-description">
              A trail in the forest in Mankaa.
            </span>
          </div>
          <div>
            <LiteYouTubeEmbed id="MO1l18UnrOg" title="EKP42 trail; winter" />
            <span className="video-description">
              An official trail in Espoon keskuspuisto with data and comments.
            </span>
          </div>
          <div>
            <LiteYouTubeEmbed
              id="qbX4bZFcqFI"
              title="Espoon keskuspuisto randoms"
            />
            <span className="video-description">
              Random local trails, new camera test.
            </span>
          </div>
        </div>
        <h3>Other</h3>
        <div className="video-container">
          <div>
            <LiteYouTubeEmbed id="P63VhXrieqo" title="Tahko off route" />
            <span className="video-description">
              Going slightly off route in Tahko ski resort.
            </span>
          </div>
          <div>
            <LiteYouTubeEmbed id="0761ozbqE2s" title="Tahko" />
            <span className="video-description">
              A normal run down the hill.
            </span>
          </div>
          <div>
            <LiteYouTubeEmbed id="sXvJ8P0k4tM" title="Autosport" />
            <span className="video-description">
              An old video of me pretending to know how to race a car.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPage;
