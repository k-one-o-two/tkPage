import Head from "next/head";
import { Card } from "../../components/card";
import { NoteImage } from "../../components/noteImage";

const Page = () => {
  return (
    <>
      <Head>
        <title>MTB places</title>
      </Head>
      <div className="card">
        <div className="art">
          <pre>
            {`
████████████████████
█                  █
█      ██   █      █
█   ██████████     █
█▒▒ ████     █     █
█▒▒▒▒▒▒    ████    █
█▒▒▒▒▒▒▒▒  ████    █
█▒▒▒▒▒▒▒▒▒▒▒▒      █
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
████████████████████
            `}
          </pre>
        </div>
        <div className="article">
          <h1>MTB places</h1>
          <div>
            <p>
              Here's a (incomplete, in progress) list of places for MTB riding
              that I'm aware of.
            </p>
            <p>
              You will find gpx tracks, photos, videos and descriptions for them
              on their pages.
            </p>
            <p>
              To help you adjust ypur expectations: I'm riding a rather old
              hardtail GT Avalanche.
            </p>
          </div>
          <NoteImage src="/misc/bike.jpg" />
          <div>
            <h2>Let's go riding!</h2>
          </div>
          <div className="main-list">
            <Card title="Oittaa MTB" link="/mtb/oittaa">
              <p>Oittaa MTB</p>
              <p>Near the Bodominjärvi, Espoo. Short XC loop.</p>
            </Card>
            <Card title="Oittaa R2" link="/mtb/r2">
              <p>Oittaa R2</p>
              <p>
                On the other side of the road from the MTB route. Longer,
                consists of several segments.
              </p>
            </Card>
            <Card title="Lohja" link="/mtb/lohja">
              <p>Lohja</p>
              <p>
                60 km westward from Helsinki. Fast loop, longer than the Oittaa
                MTB route.
              </p>
            </Card>
            <Card title="Fiskars" link="/mtb/fiskars">
              <p>Fiskars</p>
              <p>
                90 km westward from Helsinki. Long and scenic, though less
                interesting than R2.
              </p>
            </Card>
            <Card title="Helsinki" link="/mtb/helsinki">
              <p>Helsinki central park</p>
              <p>
                Starts approximately from the Olympic stadium and goes north.
              </p>
            </Card>
            <Card title="Sepänkannas" link="/mtb/sepankannas">
              <p>Sepänkannas area</p>
              <p>In Kirkkonummi. Nice rocks, no marked trails.</p>
            </Card>
          </div>
          <div>
            <p>More to come.</p>
            <p>If you wish to contribute, contact me.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
