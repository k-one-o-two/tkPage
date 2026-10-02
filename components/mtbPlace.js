import Head from "next/head";
import dynamic from "next/dynamic";
// Dynamically import the map component with SSR disabled
const GpxTrackMap = dynamic(() => import("./GpxTrackMap"), {
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

export const MtbPage = ({ title, goodsArray, badsArray, gpx, gallery }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="card">
        <div className="article">
          <h1>{title}</h1>

          <div>
            <div>
              <h3>Goods</h3>
              <ul>
                {goodsArray.map((good) => (
                  <li dangerouslySetInnerHTML={{ __html: good }} />
                ))}
              </ul>
            </div>
            <div>
              <h3>Bads</h3>
              <ul>
                {badsArray.map((bad) => (
                  <li dangerouslySetInnerHTML={{ __html: bad }} />
                ))}
              </ul>
            </div>
          </div>
          <div>
            <GpxTrackMap src={gpx.src} title={gpx.title} />
          </div>
          <div>
            <h3>gallery</h3>
            <div className="images-container">
              {gallery.map((item) => item)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
