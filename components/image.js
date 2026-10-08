export function ImageTile({ image }) {
  const { source, url } = image;

  return (
    <div className="flickeImageTileContainer">
      {url && (
        <a href={`${url.replace("/sizes/m/", "")}`}>
          <div
            className="flickeImageTile"
            style={{ backgroundImage: `url(${source})` }}
          ></div>
        </a>
      )}
      {!url && (
        <div
          className="flickeImageTile"
          style={{ backgroundImage: `url(${source})` }}
        ></div>
      )}
    </div>
  );
}
