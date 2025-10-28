export function ImageTile({ image }) {
  const { source, width, height, url } = image;

  console.info({ image });

  return (
    <div
      className="flickeImageTileContainer"
      style={{
        height: Math.min(height, width),
        width: Math.min(height, width),
      }}
    >
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
          }}
        ></div>
      </a>
    </div>
  );
}
