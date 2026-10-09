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
        <>
          <button popovertarget={`pop_${source}`} className="imgButton">
            <div
              className="flickeImageTile"
              style={{ backgroundImage: `url(${source})` }}
            ></div>
          </button>
          <div id={`pop_${source}`} className="img-dialog" popover="auto">
            <div className="dlg-header">
              <p className="dlg-title">{source}</p>
              <button
                className="close-btn"
                popovertarget={`pop_${source}`}
                popovertargetaction="hide"
              >
                close
              </button>
            </div>

            <div
              className="img-container"
              style={{ backgroundImage: `url(${source})` }}
            ></div>
          </div>
        </>
      )}
    </div>
  );
}
