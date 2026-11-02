import { BreadcrumbJsonLd } from "next-seo";
import { Seo, absoluteUrl } from "../../components/seo";
import { Card } from "../../components/card";
import { NoteImage } from "../../components/noteImage";

const Page = () => {
  return (
    <>
      <Seo
        title="MTB places near Helsinki and Espoo"
        description="MTB trails around Helsinki, Espoo and Uusimaa: Oittaa, R2, Espoo central park, Helsinki central park, Lohja, Fiskars and Sepänkannas, with GPX tracks, maps, photos, videos and difficulty ratings."
        openGraph={{
          title: "MTB places near Helsinki and Espoo",
          images: [{ url: absoluteUrl("/misc/bike.jpg"), alt: "MTB places" }],
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: absoluteUrl("/") },
          { name: "MTB places", item: absoluteUrl("/mtb") },
        ]}
      />
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
              Here's an (incomplete, in progress) list of places for MTB riding
              that I'm aware of.
            </p>
            <p>
              You will find gpx tracks, photos, videos and descriptions for them
              on their pages.
            </p>
            <p>
              To help you adjust your expectations: I'm riding a rather old
              hardtail GT Avalanche.
            </p>
            <p>
              Regarding the difficulty level. It is based on{" "}
              <a href="https://www.britishcycling.org.uk/search/article/mtbst20100615-MTB-Trail-Grading-System-0">
                this
              </a>{" "}
              guide. Keep in mind that these marks are subjective.
            </p>
          </div>
          <NoteImage src="/misc/bike.jpg" />
          <div>
            <h2>Let's go riding!</h2>
          </div>
          <div className="main-list">
            <Card title="Oittaa MTB" link="/mtb/oittaa" accent="moderate">
              <p> Espoo</p>
              <p>
                <span className="sketch-highlight"> 2.8 km |  68 m</span>
              </p>

              <p>Near the Bodominjärvi, Espoo. Short XC loop.</p>
            </Card>
            <Card title="Oittaa R2" link="/mtb/r2" accent="hard">
              <p> Espoo</p>
              <p>
                <span className="sketch-highlight"> 14.8 km |  119 m</span>
              </p>
              <p>
                On the other side of the road from the MTB route. Longer,
                consists of several segments.
              </p>
            </Card>
            <Card title="Lohja" link="/mtb/lohja" accent="moderate">
              <p> Lohja</p>
              <p>
                <span className="sketch-highlight"> 8.3 km |  80 m</span>
              </p>
              <p>
                60 km westward from Helsinki. Fast loop, longer than the Oittaa
                MTB route.
              </p>
            </Card>
            <Card title="Fiskars" link="/mtb/fiskars" accent="hard">
              <p> Fiskars</p>
              <p>
                <span className="sketch-highlight"> 11.6 km |  218 m</span>
              </p>
              <p>
                90 km westward from Helsinki. Long and scenic, though less
                interesting than R2.
              </p>
            </Card>
            <Card title="Helsinki" link="/mtb/helsinki" accent="moderate">
              <p> Helsinki</p>
              <p>
                <span className="sketch-highlight"> 20.4 km |  193 m</span>
              </p>
              <p>
                Starts approximately from the Olympic stadium and goes north.
              </p>
            </Card>
            <Card title="Sepänkannas" link="/mtb/sepankannas" accent="moderate">
              <p> Kirkkonummi</p>
              <p>
                <span className="sketch-highlight"> 12.2 km |  188 m</span>
              </p>
              <p>In Kirkkonummi. Nice rocks, no marked trails.</p>
            </Card>
            <Card title="EKP" link="/mtb/ekp" accent="hard">
              <p> Espoo</p>
              <p>
                <span className="sketch-highlight"> 4.5 km |  48 m</span>
              </p>
              <p>A great all year trail in the Espoo central park</p>
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
