export function ImageTile({
  image,
  availableWidth,
  rowNumber,
  excess,
  numberOfHorizontalImages,
}) {
  const oneColumn = availableWidth <= 650;

  const { source, width, height, url } = image;
  const desiredHeight = 400;
  const difference = availableWidth / 1700;

  const isVertical = height > width;

  if (!isVertical) {
    let totalWidth = width;
    if (excess[rowNumber] > 0) {
      totalWidth += excess[rowNumber] / numberOfHorizontalImages;
    }
    return (
      <div
        className="flickeImageTileContainer"
        style={{
          width: oneColumn ? "" : totalWidth * difference,
          height: desiredHeight,
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
  } else {
    return (
      <div
        className="flickeImageTileContainer"
        style={{
          width: oneColumn ? "" : width * (desiredHeight / height) * difference,
          height: desiredHeight,
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
}
