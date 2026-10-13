import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { BreadcrumbJsonLd } from "next-seo";
import { Seo, absoluteUrl } from "./seo";
// Dynamically import the map component with SSR disabled
const GpxTrackMap = dynamic(() => import("./GpxTrackMap"), {
  ssr: false,
  loading: () => <div className="map map-placeholder">Loading map...</div>,
});

export const MtbPage = ({
  title,
  goodsArray,
  badsArray,
  gpx,
  gallery,
  difficulty,
}) => {
  const router = useRouter();
  const description = `${title}: a ${difficulty.level} MTB trail in the Helsinki region. ${difficulty.text} GPX track, map, photos and videos.`;
  // Use the gallery photos (ImageTiles) as share previews.
  const images = gallery
    .map((item) => item.props.image?.source)
    .filter(Boolean)
    .map((source) => ({ url: absoluteUrl(source), alt: title }));

  return (
    <>
      <Seo
        title={`${title} - MTB trail`}
        description={description}
        openGraph={{
          type: "article",
          title,
          description,
          images,
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: absoluteUrl("/") },
          { name: "MTB places", item: absoluteUrl("/mtb") },
          { name: title, item: absoluteUrl(router.pathname) },
        ]}
      />
      <div className="card">
        <div className="article">
          <h1>{title}</h1>

          <div>
            <div>
              <h3>difficulty</h3>
              <div className="difficulty">
                <div className={`difficulty-${difficulty.level}`}>
                  <div className="difficulty-name">{difficulty.level}</div>
                </div>
                <div>{difficulty.text}</div>
              </div>
            </div>
            <div>
              <h3>Goods</h3>
              <ul>
                {goodsArray.map((good, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: good }} />
                ))}
              </ul>
            </div>
            <div>
              <h3>Bads</h3>
              <ul>
                {badsArray.map((bad, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: bad }} />
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3>map</h3>
            <GpxTrackMap src={gpx.src} title={gpx.title} />
          </div>
          <div>
            <h3>gallery</h3>
            <div className="images-container">
              {gallery.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
