export function ImageTile({ image }) {
  const { source, url } = image;

  return (
    <div className="flickeImageTileContainer">
      <a href={`${url.replace("/sizes/m/", "")}`}>
        <div
          className="cursor-pointer hover:shadow-8 flickeImageTile"
          style={{
            backgroundSize: "cover",
            backgroundPositionY: "center",
            backgroundPositionX: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${source})`,
            height: "100%",
            width: "100%",
          }}
        ></div>
      </a>
    </div>
  );
}
